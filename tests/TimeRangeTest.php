<?php

namespace zjkal\tests;

use InvalidArgumentException;
use PHPUnit\Framework\TestCase;
use zjkal\TimeRange;

class TimeRangeTest extends TestCase
{
    public function testCalendarBoundariesAndOffsets()
    {
        $cases = [
            ['day', '2024-02-29 12:30:00', 0, '2024-02-29', '2024-03-01'],
            ['day', '2024-03-01', -1, '2024-02-29', '2024-03-01'],
            ['week', '2026-01-01', 0, '2025-12-29', '2026-01-05'],
            ['week', '2026-01-04', -1, '2025-12-22', '2025-12-29'],
            ['month', '2024-03-31', -1, '2024-02-01', '2024-03-01'],
            ['month', '2026-12-31', 1, '2027-01-01', '2027-02-01'],
            ['quarter', '2026-05-31', 0, '2026-04-01', '2026-07-01'],
            ['quarter', '2026-01-31', -1, '2025-10-01', '2026-01-01'],
            ['year', '2024-02-29', 0, '2024-01-01', '2025-01-01'],
            ['year', '2024-02-29', 1, '2025-01-01', '2026-01-01'],
        ];
        foreach ($cases as [$unit, $date, $offset, $start, $end]) {
            $expected = ['start' => strtotime($start), 'end' => strtotime($end)];
            $this->assertSame($expected, TimeRange::period($unit, $date, $offset));
            $this->assertSame($expected, TimeRange::$unit($date, $offset));
        }
        $today = TimeRange::day();
        $this->assertTrue(TimeRange::contains(time(), $today['start'], $today['end']));
    }

    public function testContainsEndpointsAndEpoch()
    {
        $this->assertTrue(TimeRange::contains(0, 0, 10));
        $this->assertFalse(TimeRange::contains(0, 0, 10, false));
        $this->assertFalse(TimeRange::contains(10, 0, 10));
        $this->assertTrue(TimeRange::contains(10, 0, 10, true, true));
        $this->assertFalse(TimeRange::contains(0, 0, 0));
        $this->assertTrue(TimeRange::contains(0, 0, 0, true, true));
        $this->assertFalse(TimeRange::contains(11, 0, 10));
    }

    public function testDaylightSavingUsesCalendarDays()
    {
        $zone = date_default_timezone_get();
        date_default_timezone_set('America/New_York');
        try {
            $spring = TimeRange::day('2026-03-08');
            $autumn = TimeRange::day('2026-11-01');
            $this->assertSame(23 * 3600, $spring['end'] - $spring['start']);
            $this->assertSame(25 * 3600, $autumn['end'] - $autumn['start']);
            $this->assertSame('2026-03-09 00:00:00', date('Y-m-d H:i:s', $spring['end']));
        } finally {
            date_default_timezone_set($zone);
        }
    }

    public function testRejectsUnknownPeriod()
    {
        $this->expectException(InvalidArgumentException::class);
        TimeRange::period('unknown');
    }

    public function testRejectsReversedRange()
    {
        $this->expectException(InvalidArgumentException::class);
        TimeRange::contains(5, 10, 0);
    }
}
