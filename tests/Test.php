<?php
require '../vendor/autoload.php';

echo \zjkal\TimeHelper::is_timestamp(1646186290) . PHP_EOL;
echo \zjkal\TimeHelper::secondEndToday() . PHP_EOL;
echo \zjkal\TimeHelper::secondMinute(5) . PHP_EOL;
echo \zjkal\TimeHelper::secondHour(2) . PHP_EOL;
echo \zjkal\TimeHelper::secondDay(7) . PHP_EOL;
echo \zjkal\TimeHelper::secondWeek(4) . PHP_EOL;
echo '友好日期:';
echo \zjkal\TimeHelper::friendly_date('2022-3-2 10:15:33') . PHP_EOL;
echo \zjkal\TimeHelper::friendly_date(1646186290, 365, 'Y-m-d', 'en') . PHP_EOL;

$datetime = '2020-04-10 22:22:22';

var_dump(\zjkal\TimeHelper::isToday($datetime));
var_dump(\zjkal\TimeHelper::isThisMonth($datetime));
var_dump(\zjkal\TimeHelper::isThisYear($datetime));
var_dump(\zjkal\TimeHelper::isThisWeek($datetime));

$datetime = 1586451741;

var_dump(\zjkal\TimeHelper::isToday($datetime));
var_dump(\zjkal\TimeHelper::isThisMonth($datetime));
var_dump(\zjkal\TimeHelper::isThisYear($datetime));
var_dump(\zjkal\TimeHelper::isThisWeek($datetime));

$datetime = 'Apr 11, 2020';

var_dump(\zjkal\TimeHelper::isToday($datetime));
var_dump(\zjkal\TimeHelper::isThisMonth($datetime));
var_dump(\zjkal\TimeHelper::isThisYear($datetime));
var_dump(\zjkal\TimeHelper::isThisWeek($datetime));
echo '相差天数:';
var_dump(\zjkal\TimeHelper::diffDays('2022-4-10 23:01:11', 'Apr 11, 2020')) . PHP_EOL;
echo '相差天数:';
var_dump(\zjkal\TimeHelper::diffDays(1586451741)) . PHP_EOL;
echo '相差年数:';
var_dump(\zjkal\TimeHelper::diffYears(1586451741)) . PHP_EOL;
echo '相差月数:';
var_dump(\zjkal\TimeHelper::diffMonths(1586451741)) . PHP_EOL;
echo '相差周数:';
var_dump(\zjkal\TimeHelper::diffWeeks(1586451741)) . PHP_EOL;
echo 'N时间前&后:';
var_dump(\zjkal\TimeHelper::beforeMinute(3, '2022-3-2 10:15:33'));
var_dump(\zjkal\TimeHelper::beforeMinute(3, '2022-3-2 10:15:33', true));
var_dump(\zjkal\TimeHelper::afterMinute(2, 1586451741));
var_dump(\zjkal\TimeHelper::beforeHour(5, '2022-3-2 10:15:33'));
var_dump(\zjkal\TimeHelper::afterHour(5));
var_dump(\zjkal\TimeHelper::beforeDay(2));
var_dump(\zjkal\TimeHelper::afterDay(2));
var_dump(\zjkal\TimeHelper::beforeWeek(6, 1586451741));
var_dump(\zjkal\TimeHelper::afterWeek(6));
var_dump(\zjkal\TimeHelper::beforeMonth(1, 'March 3, 2010 10:15:33'));
var_dump(\zjkal\TimeHelper::afterMonth(1));
var_dump(\zjkal\TimeHelper::beforeYear(2));
var_dump(\zjkal\TimeHelper::afterYear(2));
echo '获得毫秒级时间戳:';
var_dump(\zjkal\TimeHelper::getTimestamp(1));
var_dump(\zjkal\TimeHelper::getMilliTimestamp());
var_dump(\zjkal\TimeHelper::getMicroTimestamp());
var_dump(\zjkal\TimeHelper::getNanoTimestamp());