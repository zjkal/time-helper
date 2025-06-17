<?php

namespace zjkal\tests;
date_default_timezone_set('Asia/Shanghai');

use zjkal\TimeHelper;
use PHPUnit\Framework\TestCase;

class TimeHelperTest extends TestCase
{
    public function testModifyTimestamp()
    {
        $this->expectOutputString('1693627200');
        print TimeHelper::modifyTimestamp('+1 day', '2023-9-1 12:00:00');
    }

    public function testAfterMonth()
    {
        $this->expectOutputString('1696132800');
        print TimeHelper::afterMonth(1, '2023-9-1 12:00:00');
    }

    public function testSecondMinute()
    {
        $this->expectOutputString('3600');
        print TimeHelper::secondMinute(60);
    }

    public function testBeforeYear()
    {
        $this->expectOutputString('1641009600');
        print TimeHelper::beforeYear(1, '2023-1-1 12:00:00');
    }

    public function testAfterHour()
    {
        $this->expectOutputString('1693544400');
        print TimeHelper::afterHour(1, '2023-9-1 12:00:00');
    }

    public function testSecondHour()
    {
        $this->expectOutputString('3600');
        print TimeHelper::secondHour(1);
    }

    public function testSecondWeek()
    {
        $this->expectOutputString('604800');
        print TimeHelper::secondWeek(1);
    }

    public function testBeforeMonth()
    {
        $this->expectOutputString('1669867200');
        print TimeHelper::beforeMonth(1, '2023-1-1 12:00:00');
    }

    public function testIsThisYear()
    {
        $this->expectOutputString(false);
        print TimeHelper::isThisYear('2022-1-1 12:00:00');
    }

    public function testDaysInMonth()
    {
        $this->expectOutputString('31');
        print TimeHelper::daysInMonth('2023-1-1 12:00:00');
    }

    public function testBeforeWeek()
    {
        $this->expectOutputString('1671940800');
        print TimeHelper::beforeWeek(1, '2023-1-1 12:00:00');
    }

    public function testBeforeDay()
    {
        $this->expectOutputString('1693281600');
        print TimeHelper::beforeDay(3, '2023-9-1 12:00:00');
    }

    public function testAfterMinute()
    {
        $this->expectOutputString('1693541400');
        print TimeHelper::afterMinute(10, '2023-9-1 12:00:00');
    }

    public function testAfterDay()
    {
        $this->expectOutputString('1693972800');
        print TimeHelper::afterDay(5, '2023-9-1 12:00:00');
    }

    public function testIsTimestamp()
    {
        $this->expectOutputString(false);
        print TimeHelper::isTimestamp('2023-9-1 12:00:00');
    }

    public function testAfterYear()
    {
        $this->expectOutputString('1725163200');
        print TimeHelper::afterYear(1, '2023-9-1 12:00:00');
    }

    public function testBeforeHour()
    {
        $this->expectOutputString('1693537200');
        print TimeHelper::beforeHour(1, '2023-9-1 12:00:00');
    }

    public function testIsWeekday()
    {
        $this->expectOutputString(true);
        print TimeHelper::isWeekday('2023-9-1 12:00:00');
    }

    public function testFormat()
    {
        $this->expectOutputString('Sep 01, 2023 12:00');
        print TimeHelper::format('M d, Y H:i', '2023-9-1 12:00:00');
    }

    public function testAfterWeek()
    {
        $this->expectOutputString('1694145600');
        print TimeHelper::afterWeek(1, '2023-9-1 12:00:00');
    }

    public function testToTimestamp()
    {
        $this->expectOutputString('1693540800');
        print TimeHelper::toTimestamp('2023-9-1 12:00:00');
    }

    public function testIsThisMonth()
    {
        $this->expectOutputString(false);
        print TimeHelper::isThisMonth('2023-8-1 12:00:00');
    }

    public function testDiffWeeks()
    {
        $this->expectOutputString('57');
        print TimeHelper::diffWeeks('2022-9-1 12:00:00', '2023-10-8 12:00:00');
    }

    public function testIsToday()
    {
        $this->expectOutputString(false);
        print TimeHelper::isToday('2023-8-1 12:00:00');
    }

    public function testIsYesterday()
    {
        $this->expectOutputString(false);
        print TimeHelper::isYesterday('2023-8-1 12:00:00');
    }

    public function testIsTomorrow()
    {
        $this->expectOutputString(false);
        print TimeHelper::isTomorrow('2023-8-1 12:00:00');
    }

    public function testBeforeMinute()
    {
        $this->expectOutputString('1693540200');
        print TimeHelper::beforeMinute(10, '2023-9-1 12:00:00');
    }

    public function testDaysInYear()
    {
        $this->expectOutputString('365');
        print TimeHelper::daysInYear('2023-1-1 12:00:00');
    }

    public function testGetWeekDay()
    {
        $this->expectOutputString('5');
        print TimeHelper::getWeekDay('2023-9-1 12:00:00');
    }

    public function testIsWeekend()
    {
        $this->expectOutputString(false);
        print TimeHelper::isWeekend('2023-9-1 12:00:00');
    }

    public function testDiffYears()
    {
        $this->expectOutputString('2');
        print TimeHelper::diffYears('2023-9-1 12:00:00', '2025-9-1 12:00:00');
    }

    public function testIsThisWeek()
    {
        $this->expectOutputString(false);
        print TimeHelper::isThisWeek('2023-7-1 12:00:00');
    }

    public function testDiffMonths()
    {
        $this->expectOutputString('36');
        print TimeHelper::diffMonths('2021-9-1 12:00:00', '2024-9-1 12:00:00');
    }

    public function testDiffDays()
    {
        $this->expectOutputString('731');
        print TimeHelper::diffDays('2022-9-1 12:00:00', '2024-9-1 12:00:00');
    }

    public function testDiffHours()
    {
        $this->expectOutputString('216');
        print TimeHelper::diffHours('2023-9-1 12:00:00', '2023-9-10 12:00:00');
    }

    public function testDiffMinutes()
    {
        $this->expectOutputString('12960');
        print TimeHelper::diffMinutes('2023-9-1 12:00:00', '2023-9-10 12:00:00');
    }

    public function testDiffSeconds()
    {
        $this->expectOutputString('777600');
        print TimeHelper::diffSeconds('2023-9-1 12:00:00', '2023-9-10 12:00:00');
    }

    public function testIsLeapYear()
    {
        $this->expectOutputString(false);
        print TimeHelper::isLeapYear('2023-1-1 12:00:00');
    }

    public function testTimezoneFormat()
    {
        $this->expectOutputString('18:15:33');
        print TimeHelper::timezoneFormat('Europe/London', 'America/Los_Angeles', 'Aug 15, 2023 10:15:33', 'H:i:s');
    }

    public function testSecondDay()
    {
        $this->expectOutputString('86400');
        print TimeHelper::secondDay(1);
    }

    public function testCompare()
    {
        $this->expectOutputString('1');
        print TimeHelper::compare('2023-9-1 12:00:00', '2023-8-1 12:00:00');
    }

    public function testToFriendly()
    {
        $this->expectOutputString('just now');
        print TimeHelper::toFriendly(time(), 'en');
    }

    public function testGetYear()
    {
        $this->expectOutputString('2023');
        print TimeHelper::getYear('2023-9-1 12:00:00');
    }

    public function testGetQuarter()
    {
        $this->assertSame(1, TimeHelper::getQuarter('2023-1-1 12:00:00'));
        $this->assertSame(4, TimeHelper::getQuarter('2023-10-24 12:00:00'));
    }

    public function testGetMonth()
    {
        $this->expectOutputString('9');
        print TimeHelper::getMonth('2023-9-1 12:00:00');
    }

    public function testGetWeek()
    {
        $this->expectOutputString('35');
        print TimeHelper::getWeek('2023-9-1 12:00:00');
    }

    public function testGetDay()
    {
        $this->expectOutputString('1');
        print TimeHelper::getDay('2023-9-1 12:00:00');
    }

    public function testGetHour()
    {
        $this->expectOutputString('12');
        print TimeHelper::getHour('2023-9-1 12:00:00');
    }

    public function testGetMinute()
    {
        $this->expectOutputString('0');
        print TimeHelper::getMinute('2023-9-1 12:00:00');
    }

    public function testGetSecond()
    {
        $this->expectOutputString('0');
        print TimeHelper::getSecond('2023-9-1 12:00:00');
    }
}
