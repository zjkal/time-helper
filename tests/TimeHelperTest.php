<?php

namespace zjkal\tests;
date_default_timezone_set('Asia/Shanghai');

use zjkal\TimeHelper;
use PHPUnit\Framework\TestCase;

class TimeHelperTest extends TestCase
{
    public function testModifyTimestamp()
    {
        $this->assertSame(1693627200, TimeHelper::modifyTimestamp('+1 day', '2023-9-1 12:00:00'));
    }

    public function testAfterMonth()
    {
        $this->assertSame(1696132800, TimeHelper::afterMonth(1, '2023-9-1 12:00:00'));
    }

    public function testSecondMinute()
    {
        $this->assertSame(3600, TimeHelper::secondMinute(60));
    }

    public function testBeforeYear()
    {
        $this->assertSame(1641009600, TimeHelper::beforeYear(1, '2023-1-1 12:00:00'));
    }

    public function testAfterHour()
    {
        $this->assertSame(1693544400, TimeHelper::afterHour(1, '2023-9-1 12:00:00'));
    }

    public function testSecondHour()
    {
        $this->assertSame(3600, TimeHelper::secondHour(1));
    }

    public function testSecondWeek()
    {
        $this->assertSame(604800, TimeHelper::secondWeek(1));
    }

    public function testBeforeMonth()
    {
        $this->assertSame(1669867200, TimeHelper::beforeMonth(1, '2023-1-1 12:00:00'));
    }

    public function testIsThisYear()
    {
        $this->assertSame(false, TimeHelper::isThisYear('2022-1-1 12:00:00'));
    }

    public function testDaysInMonth()
    {
        $this->assertSame(31, TimeHelper::daysInMonth('2023-1-1 12:00:00'));
    }

    public function testBeforeWeek()
    {
        $this->assertSame(1671940800, TimeHelper::beforeWeek(1, '2023-1-1 12:00:00'));
    }

    public function testBeforeDay()
    {
        $this->assertSame(1693281600, TimeHelper::beforeDay(3, '2023-9-1 12:00:00'));
    }

    public function testAfterMinute()
    {
        $this->assertSame(1693541400, TimeHelper::afterMinute(10, '2023-9-1 12:00:00'));
    }

    public function testAfterDay()
    {
        $this->assertSame(1693972800, TimeHelper::afterDay(5, '2023-9-1 12:00:00'));
    }

    public function testIsTimestamp()
    {
        $this->assertSame(false, TimeHelper::isTimestamp('2023-9-1 12:00:00'));
    }

    public function testAfterYear()
    {
        $this->assertSame(1725163200, TimeHelper::afterYear(1, '2023-9-1 12:00:00'));
    }

    public function testBeforeHour()
    {
        $this->assertSame(1693537200, TimeHelper::beforeHour(1, '2023-9-1 12:00:00'));
    }

    public function testIsWeekday()
    {
        $this->assertSame(true, TimeHelper::isWeekday('2023-9-1 12:00:00'));
    }

    public function testFormat()
    {
        $this->assertSame('Sep 01, 2023 12:00', TimeHelper::format('M d, Y H:i', '2023-9-1 12:00:00'));
    }

    public function testAfterWeek()
    {
        $this->assertSame(1694145600, TimeHelper::afterWeek(1, '2023-9-1 12:00:00'));
    }

    public function testToTimestamp()
    {
        $this->assertSame(1693540800, TimeHelper::toTimestamp('2023-9-1 12:00:00'));
    }

    public function testIsThisMonth()
    {
        $this->assertSame(false, TimeHelper::isThisMonth('2023-8-1 12:00:00'));
    }

    public function testDiffWeeks()
    {
        $this->assertSame(57, TimeHelper::diffWeeks('2022-9-1 12:00:00', '2023-10-8 12:00:00'));
    }

    public function testIsToday()
    {
        $this->assertSame(false, TimeHelper::isToday('2023-8-1 12:00:00'));
    }

    public function testIsYesterday()
    {
        $this->assertSame(false, TimeHelper::isYesterday('2023-8-1 12:00:00'));
    }

    public function testIsTomorrow()
    {
        $this->assertSame(false, TimeHelper::isTomorrow('2023-8-1 12:00:00'));
    }

    public function testBeforeMinute()
    {
        $this->assertSame(1693540200, TimeHelper::beforeMinute(10, '2023-9-1 12:00:00'));
    }

    public function testDaysInYear()
    {
        $this->assertSame(365, TimeHelper::daysInYear('2023-1-1 12:00:00'));
    }

    public function testGetWeekDay()
    {
        $this->assertSame(5, TimeHelper::getWeekDay('2023-9-1 12:00:00'));
    }

    public function testIsWeekend()
    {
        $this->assertSame(false, TimeHelper::isWeekend('2023-9-1 12:00:00'));
    }

    public function testDiffYears()
    {
        $this->assertSame(2, TimeHelper::diffYears('2023-9-1 12:00:00', '2025-9-1 12:00:00'));
    }

    public function testIsThisWeek()
    {
        $this->assertSame(false, TimeHelper::isThisWeek('2023-7-1 12:00:00'));
    }

    public function testDiffMonths()
    {
        $this->assertSame(36, TimeHelper::diffMonths('2021-9-1 12:00:00', '2024-9-1 12:00:00'));
    }

    public function testDiffDays()
    {
        $this->assertSame(731, TimeHelper::diffDays('2022-9-1 12:00:00', '2024-9-1 12:00:00'));
    }

    public function testDiffHours()
    {
        $this->assertSame(216, TimeHelper::diffHours('2023-9-1 12:00:00', '2023-9-10 12:00:00'));
    }

    public function testDiffMinutes()
    {
        $this->assertSame(12960, TimeHelper::diffMinutes('2023-9-1 12:00:00', '2023-9-10 12:00:00'));
    }

    public function testDiffSeconds()
    {
        $this->assertSame(777600, TimeHelper::diffSeconds('2023-9-1 12:00:00', '2023-9-10 12:00:00'));
    }

    public function testIsLeapYear()
    {
        $this->assertSame(false, TimeHelper::isLeapYear('2023-1-1 12:00:00'));
    }

    public function testTimezoneFormat()
    {
        $this->assertSame('18:15:33', TimeHelper::timezoneFormat('Europe/London', 'America/Los_Angeles', 'Aug 15, 2023 10:15:33', 'H:i:s'));
    }

    public function testSecondDay()
    {
        $this->assertSame(86400, TimeHelper::secondDay(1));
    }

    public function testCompare()
    {
        $this->assertSame(1, TimeHelper::compare('2023-9-1 12:00:00', '2023-8-1 12:00:00'));
    }

    public function testToFriendly()
    {
        $this->assertSame('just now', TimeHelper::toFriendly(time(), 'en'));
    }

    public function testGetYear()
    {
        $this->assertSame(2023, TimeHelper::getYear('2023-9-1 12:00:00'));
    }

    public function testGetQuarter()
    {
        $this->assertSame(1, TimeHelper::getQuarter('2023-1-1 12:00:00'));
        $this->assertSame(4, TimeHelper::getQuarter('2023-10-24 12:00:00'));
    }

    public function testGetMonth()
    {
        $this->assertSame(9, TimeHelper::getMonth('2023-9-1 12:00:00'));
    }

    public function testGetWeek()
    {
        $this->assertSame(35, TimeHelper::getWeek('2023-9-1 12:00:00'));
    }

    public function testGetDay()
    {
        $this->assertSame(1, TimeHelper::getDay('2023-9-1 12:00:00'));
    }

    public function testGetHour()
    {
        $this->assertSame(12, TimeHelper::getHour('2023-9-1 12:00:00'));
    }

    public function testGetMinute()
    {
        $this->assertSame(20, TimeHelper::getMinute('2023-9-1 12:20:20'));
    }

    public function testGetSecond()
    {
        $this->assertSame(6, TimeHelper::getSecond('2023-9-1 12:00:06'));
    }
}
