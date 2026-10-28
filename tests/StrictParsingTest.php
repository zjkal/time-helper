<?php

namespace zjkal\tests;

use InvalidArgumentException;
use PHPUnit\Framework\TestCase;
use zjkal\TimeHelper;

class StrictParsingTest extends TestCase
{
    public function testExactDatesAndDefaults()
    {
        $this->assertSame(strtotime('2024-02-29'), TimeHelper::parseExact('2024-02-29', 'Y-m-d'));
        $this->assertSame(strtotime('2026-04-03'), TimeHelper::parseExact('03/04/2026', 'd/m/Y'));
        $this->assertSame(strtotime('2026-03-04'), TimeHelper::parseExact('03/04/2026', 'm/d/Y'));
        $this->assertSame(0, TimeHelper::parseExact('1970-01-01 00:00:00', 'Y-m-d H:i:s', 'UTC'));
        $this->assertSame(strtotime('1970-01-01 12:30:00 UTC'), TimeHelper::parseExact('12:30', 'H:i', 'UTC'));
        $this->assertTrue(TimeHelper::isValidDate('2024-02-29'));
        $this->assertTrue(TimeHelper::isValidDate('2026年10月27日', 'Y年m月d日'));
        $this->assertSame(strtotime('2026-10-27T12:30:00+08:00'), TimeHelper::parseExact('2026-10-27T12:30:00+08:00', 'Y-m-d\TH:i:sP'));
    }

    public function testRejectsInvalidOrNonCanonicalInput()
    {
        foreach (['2026-02-29', '2026-02-31', '2026-13-01', '2026-2-01', '2026-01-01 extra', '', "2026-01-01\0"] as $value) {
            $this->assertFalse(TimeHelper::isValidDate($value), $value);
        }
        $this->assertFalse(TimeHelper::isValidDate('2026-01-01 24:00:00', 'Y-m-d H:i:s'));
        $this->assertFalse(TimeHelper::isValidDate('2026-01-01', ''));
        $this->assertFalse(TimeHelper::isValidDate('2026-01-01', 'Y-m-d', 'invalid/zone'));
        $this->assertFalse(TimeHelper::isValidDate('2026-03-08 02:30:00', 'Y-m-d H:i:s', 'America/New_York'));
    }

    public function testInvalidParseThrows()
    {
        $this->expectException(InvalidArgumentException::class);
        TimeHelper::parseExact('2026-02-29', 'Y-m-d');
    }

    public function testTimezoneDoesNotChangeGlobalDefault()
    {
        $zone = date_default_timezone_get();
        $this->assertSame(strtotime('2026-01-01 UTC'), TimeHelper::parseExact('2026-01-01', 'Y-m-d', 'UTC'));
        $this->assertSame($zone, date_default_timezone_get());
    }
}
