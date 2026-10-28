<?php

namespace zjkal\tests;

use InvalidArgumentException;
use PHPUnit\Framework\TestCase;
use zjkal\TimeHelper;
use zjkal\TimeRange;

class BoundaryTest extends TestCase
{
    public function testEmptyValuesAndZeroHaveDifferentMeanings()
    {
        foreach ([null, '', false, [], 0.0] as $value) {
            $before = time();
            $timestamp = TimeHelper::toTimestamp($value);
            $this->assertGreaterThanOrEqual($before, $timestamp);
            $this->assertLessThanOrEqual(time(), $timestamp);
        }
        $this->assertSame(0, TimeHelper::toTimestamp(0));
        $this->assertSame(0, TimeHelper::toTimestamp('0'));
        $this->assertSame(0, TimeHelper::toTimestamp('1970-01-01 00:00:00 UTC'));
    }

    public function testLooseParsingDoesNotWarnAndKeepsCompatibility()
    {
        set_error_handler(function ($severity, $message) {
            throw new \ErrorException($message, 0, $severity);
        });
        try {
            $this->assertSame(strtotime('2026-10-27'), TimeHelper::toTimestamp('2026年10月27日'));
            $this->assertSame(strtotime('2026-10-27 12:30:00'), TimeHelper::toTimestamp('2026年10月27日 12点30分'));
            $this->assertSame(strtotime('2026-03-03'), TimeHelper::toTimestamp('2026-02-31'));
            $this->expectException(InvalidArgumentException::class);
            TimeHelper::toTimestamp('bad-date');
        } finally {
            restore_error_handler();
        }
    }

    public function testEpochAndTimezoneStringTimestamp()
    {
        $this->assertTrue(TimeHelper::isTimestamp(0));
        $this->assertTrue(TimeHelper::isTimestamp('0'));
        $this->assertFalse(TimeHelper::isTimestamp(null));
        $this->assertSame(0, TimeHelper::toTimestamp('0'));
        $this->assertSame(0, TimeHelper::toTimestamp('1970-01-01 00:00:00 UTC'));
        $this->assertSame('1970-01-01 00:00:00', TimeHelper::timezoneFormat('UTC', null, 0));
        $this->assertSame('2023-09-01 12:00:00', TimeHelper::timezoneFormat('Asia/Shanghai', null, '1693540800'));
    }

    public function testZeroTimestampInDifferentTimezones()
    {
        $zone = date_default_timezone_get();
        try {
            foreach (['UTC', 'America/Los_Angeles', 'Asia/Shanghai'] as $timezone) {
                date_default_timezone_set($timezone);
                foreach ([0, '0'] as $zero) {
                    $this->assertTrue(TimeHelper::isTimestamp($zero));
                    $this->assertSame(0, TimeHelper::toTimestamp($zero));
                    $this->assertSame('1970-01-01 00:00:00', TimeHelper::timezoneFormat('UTC', null, $zero));
                }
                $range = TimeRange::day(0);
                $this->assertTrue(TimeRange::contains(0, $range['start'], $range['end']));
            }
        } finally {
            date_default_timezone_set($zone);
        }
    }

    public function testFriendlyDirections()
    {
        // 留足秒数余量，跨秒运行仍处于同一个小时数。
        $this->assertSame('2小时后', TimeHelper::toFriendly(time() + 7500));
        $this->assertSame('in 2 hours', TimeHelper::toFriendly(time() + 7500, 'en'));
        $this->assertSame('2小时前', TimeHelper::toFriendly(time() - 7500));
        $this->assertSame('2 hours ago', TimeHelper::toFriendly(time() - 7500, 'en'));
    }

    public function testThisWeekExcludesNextMonday()
    {
        $range = TimeRange::week();
        $this->assertTrue(TimeHelper::isThisWeek($range['start']));
        $this->assertTrue(TimeHelper::isThisWeek($range['end'] - 1));
        $this->assertFalse(TimeHelper::isThisWeek($range['end']));
    }

    public function testHighPrecisionTimestamps()
    {
        if (PHP_INT_SIZE < 8) {
            $this->expectException(\OverflowException::class);
            TimeHelper::getNanoTimestamp();
            return;
        }
        foreach ([1 => 1000, 2 => 1000000, 3 => 1000000000] as $level => $scale) {
            $before = time();
            $value = TimeHelper::getTimestamp($level);
            $this->assertGreaterThanOrEqual($before * $scale, $value);
            $this->assertLessThan((time() + 1) * $scale, $value);
            if ($level === 3) {
                $this->assertSame(0, $value % 1000);
            }
        }
        $this->assertIsInt(TimeHelper::getMilliTimestamp());
        $this->assertIsInt(TimeHelper::getMicroTimestamp());
    }
}
