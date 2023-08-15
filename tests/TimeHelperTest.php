<?php

use zjkal\TimeHelper;

require '../vendor/autoload.php';
echo '测试:' . PHP_EOL;
echo TimeHelper::isTimestamp(1646186290) . PHP_EOL;
echo '测试:' . PHP_EOL;
echo TimeHelper::secondEndToday() . PHP_EOL;
echo TimeHelper::secondMinute(5) . PHP_EOL;
echo TimeHelper::secondHour(2) . PHP_EOL;
echo TimeHelper::secondDay(7) . PHP_EOL;
echo TimeHelper::secondWeek(4) . PHP_EOL;
echo '友好日期:' . PHP_EOL;
echo TimeHelper::toFriendly('2020-3-2 10:15:33', 'en') . PHP_EOL;

$datetime = '2020-04-10 22:22:22';

var_dump(TimeHelper::isToday($datetime));
var_dump(TimeHelper::isThisMonth($datetime));
var_dump(TimeHelper::isThisYear($datetime));
var_dump(TimeHelper::isThisWeek($datetime));

$datetime = 1586451741;

var_dump(TimeHelper::isToday($datetime));
var_dump(TimeHelper::isThisMonth($datetime));
var_dump(TimeHelper::isThisYear($datetime));
var_dump(TimeHelper::isThisWeek($datetime));

$datetime = 'Apr 11, 2020';

var_dump(TimeHelper::isToday($datetime));
var_dump(TimeHelper::isThisMonth($datetime));
var_dump(TimeHelper::isThisYear($datetime));
var_dump(TimeHelper::isThisWeek($datetime));
echo '相差天数:' . PHP_EOL;
var_dump(TimeHelper::diffDays('2022-4-10 23:01:11', 'Apr 11, 2020')) . PHP_EOL;
echo '相差天数:' . PHP_EOL;
var_dump(TimeHelper::diffDays(1586451741)) . PHP_EOL;
echo '相差年数:' . PHP_EOL;
var_dump(TimeHelper::diffYears(1586451741)) . PHP_EOL;
echo '相差月数:' . PHP_EOL;
var_dump(TimeHelper::diffMonths(1586451741)) . PHP_EOL;
echo '相差周数:' . PHP_EOL;
var_dump(TimeHelper::diffWeeks(1586451741)) . PHP_EOL;
echo 'N时间前&后:' . PHP_EOL;
var_dump(TimeHelper::beforeMinute(3, '2022-3-2 10:15:33'));
var_dump(TimeHelper::beforeMinute(3, '2022-3-2 10:15:33', true));
var_dump(TimeHelper::afterMinute(2, 1586451741));
var_dump(TimeHelper::beforeHour(5, '2022-3-2 10:15:33'));
var_dump(TimeHelper::afterHour(5));
var_dump(TimeHelper::beforeDay(2));
var_dump(TimeHelper::afterDay(2));
var_dump(TimeHelper::beforeWeek(6, 1586451741));
var_dump(TimeHelper::afterWeek(6));
var_dump(TimeHelper::beforeMonth(1, 'March 3, 2010 10:15:33'));
var_dump(TimeHelper::afterMonth(1));
var_dump(TimeHelper::beforeYear(2));
var_dump(TimeHelper::afterYear(2));
echo '获得毫秒级时间戳:' . PHP_EOL;
var_dump(TimeHelper::getTimestamp());
var_dump(TimeHelper::getMilliTimestamp());
var_dump(TimeHelper::getMicroTimestamp());
var_dump(TimeHelper::getNanoTimestamp());

echo '时间转换:' . PHP_EOL;
var_dump(TimeHelper::format('Y-m-d H:i:s', 'May 3, 2021'));

echo '今天是星期几:' . PHP_EOL;
var_dump(TimeHelper::getWeekDay('Nov 28, 2022'));

echo '是否为闰年:' . PHP_EOL;
var_dump(TimeHelper::isLeapYear('2020-3-2 10:15:33'));

echo '该日期的当年有多少天:' . PHP_EOL;
var_dump(TimeHelper::daysInYear('2020-3-2 10:15:33'));
echo '该日期的当月有多少天:' . PHP_EOL;
var_dump(TimeHelper::daysInMonth('2020-3-2 10:15:33'));

echo '是否为平常日:' . PHP_EOL;
var_dump(TimeHelper::isWeekday('2023-01-02'));
echo '是否为周末:' . PHP_EOL;
var_dump(TimeHelper::isWeekend('2023-01-02'));

echo '时区转换:' . PHP_EOL;
echo '洛杉矶时间:';
var_dump(TimeHelper::timezoneFormat('America/Los_Angeles'));
echo '洛杉矶时间转换为伦敦时间:';
var_dump(TimeHelper::timezoneFormat('America/Los_Angeles', 'Europe/London', 'Aug 15, 2023 10:15:33', 'H:i:s'));
echo '时间戳转换为伦敦时间:';
var_dump(TimeHelper::timezoneFormat('Europe/London', null, 1692097543));