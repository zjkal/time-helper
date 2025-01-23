<?php
declare (strict_types=1);

namespace zjkal;

use DateTime;
use DateTimeZone;
use Exception;
use InvalidArgumentException;

/**
 * 最方便的PHP时间助手类, 所有方法都可以传入任意类型的时间日期格式或者时间戳
 * Class TimeHelper
 * @package zjkal
 */
class TimeHelper
{
    //常见的特殊日期格式
    private static $date_formats = ['Y-m-d', 'm/d/Y', 'd.m.Y', 'm.d.y', 'd/m/Y', 'Y年m月d日', 'Y年m月', 'Y年m月d号', 'Y/m/d', 'Y.m.d', 'Y.m', 'F d, Y', 'M d, Y', 'F j, Y', 'M j, Y', 'F jS, Y', 'M jS, Y'];
    //常见的特殊时间格式
    private static $time_formats = ['H', 'H:i', 'H:i:s', 'H点', 'H点i分', 'H点i分s秒', 'H时', 'H时i分', 'H时i分s秒', 'g:i a', 'h:i a'];

    /**
     * 判断是否为时间戳格式
     * @param int|string $timestamp 要判断的字符串
     * @return bool 如果是时间戳返回True,否则返回False
     */
    public static function isTimestamp($timestamp): bool
    {
        $start = strtotime('1970-01-01 00:00:00');
        $end = strtotime('2099-12-31 23:59:59');
        //判断是否为时间戳
        if (!empty($timestamp) && is_numeric($timestamp) && $timestamp <= $end && $timestamp >= $start) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 将任意时间类型的参数转为时间戳
     * 请注意 m/d/y 或 d-m-y 格式的日期，如果分隔符是斜线（/），则使用美洲的 m/d/y 格式。如果分隔符是横杠（-）或者点（.），则使用欧洲的 d-m-y 格式。为了避免潜在的错误，您应该尽可能使用 YYYY-MM-DD 格式或者使用 date_create_from_format() 函数。
     * @param int|string $datetime 要转换为时间戳的字符串或数字,如果为空则返回当前时间戳
     * @return int 时间戳
     */
    public static function toTimestamp($datetime = null): int
    {
        if (empty($datetime)) {
            return time();
        }

        $start = strtotime('1970-01-01 00:00:00');
        $end = strtotime('2099-12-31 23:59:59');
        //判断是否为时间戳
        if (is_numeric($datetime) && $datetime <= $end && $datetime >= $start) {
            return intval($datetime);
        } else {
            $timestamp = strtotime($datetime);
            if ($timestamp) {
                return $timestamp;
            } else {
                /* 尝试处理特殊的日期格式 */
                [$date, $time] = explode(' ', $datetime);
                if ($date) {
                    //获取时间的格式
                    $time_format_str = '';
                    if ($time) {
                        foreach (self::$time_formats as $time_format) {
                            if (date_create_from_format($time_format, $time) !== false) {
                                $time_format_str = $time_format;
                                break;
                            }
                        }
                    }
                    foreach (self::$date_formats as $date_format) {
                        //获取日期的格式
                        if (date_create_from_format($date_format, $date) !== false) {
                            $datetime_format = ($time_format_str) ? "$date_format $time_format_str" : $date_format;
                            //获取日期时间对象
                            $datetime_obj = date_create_from_format($datetime_format, $datetime);
                            if ($datetime_obj !== false) {
                                return strtotime($datetime_obj->format('Y-m-d' . ($time_format_str ? ' H:i:s' : '')));
                            }
                        }
                    }
                }

                throw new InvalidArgumentException('Param datetime must be a timestamp or a string time');
            }
        }
    }

    /**
     * 将任意格式的时间转换为指定格式
     * @param string     $format   格式化字符串(默认为:Y-m-d H:i:s)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return false|string 格式化后的时间字符串
     */
    public static function format(string $format = 'Y-m-d H:i:s', $datetime = null): string
    {
        return date($format, self::toTimestamp($datetime));
    }

    /**
     * 根据日期字符串, 修改指定时间, 并返回修改后的时间戳
     * @param string     $modifier 日期修改字符串
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function modifyTimestamp(string $modifier, $datetime = null): int
    {
        $date = new DateTime();
        $date->setTimestamp(self::toTimestamp($datetime));
        return $date->modify($modifier)->getTimestamp();
    }

    /**
     * 返回截止到今天晚上零点之前的秒数
     * @return int 秒数
     */
    public static function secondEndToday(): int
    {
        list($y, $m, $d) = explode('-', date('Y-m-d'));
        return mktime(23, 59, 59, intval($m), intval($d), intval($y)) - time();
    }

    /**
     * 返回一分钟的秒数,传入参数可以返回数分钟的秒数
     * @param int $minutes 分钟数,默认为1分钟
     * @return int 秒数
     */
    public static function secondMinute(int $minutes = 1): int
    {
        return 60 * $minutes;
    }

    /**
     * 返回一小时的秒数,传入参数可以返回数小时的秒数
     * @param int $hours 小时数,默认为1小时
     * @return int 秒数
     */
    public static function secondHour(int $hours = 1): int
    {
        return 3600 * $hours;
    }

    /**
     * 返回一天的秒数,传入参数可以返回数天的秒数
     * @param int $days 天数,默认为1天
     * @return int 秒数
     */
    public static function secondDay(int $days = 1): int
    {
        return 86400 * $days;
    }

    /**
     * 返回一周的秒数,传入参数可以返回数周的秒数
     * @param int $weeks 周数,默认为1周
     * @return int 秒数
     */
    public static function secondWeek(int $weeks = 1): int
    {
        return 604800 * $weeks;
    }

    /**
     * 讲时间转换为友好显示格式
     * @param int|string $datetime 时间日期的字符串或数字
     * @param string     $lang     语言,默认为中文,如果要显示英文传入en即可
     * @return string 转换后的友好时间格式
     */
    public static function toFriendly($datetime, string $lang = 'zh'): string
    {
        $interval = self::getDateDiff($datetime);

        $count = 0;
        $type = '';

        if ($interval->y) {
            $count = $interval->y;
            $type = $lang == 'zh' ? '年' : ' year';
        } elseif ($interval->m) {
            $count = $interval->m;
            $type = $lang == 'zh' ? '月' : ' month';
        } elseif ($interval->d) {
            $count = $interval->d;
            $type = $lang == 'zh' ? '天' : ' day';
        } elseif ($interval->h) {
            $count = $interval->h;
            $type = $lang == 'zh' ? '小时' : ' hour';
        } elseif ($interval->i) {
            $count = $interval->i;
            $type = $lang == 'zh' ? '分钟' : ' minute';
        } elseif ($interval->s) {
            $count = $interval->s;
            $type = $lang == 'zh' ? '秒' : ' second';
        }

        if (empty($type)) {
            return $lang == 'zh' ? '刚刚' : 'just now';
        } else {
            return $count . $type . ($lang == 'zh' ? '前' : (($count > 1 ? 's' : '') . ' ago'));
        }
    }

    /**
     * 判断日期是否为今天
     * @param string|int $datetime 时间日期
     * @return bool 如果是今天则返回True,否则返回False
     */
    public static function isToday($datetime): bool
    {
        return self::format('Y-m-d', $datetime) == self::format('Y-m-d');
    }

    /**
     * 判断日期是否为昨天
     * @param string|int $datetime 时间日期
     * @return bool 如果是昨天则返回True,否则返回False
     */
    public static function isYesterday($datetime): bool
    {
        return self::format('Y-m-d', $datetime) == self::format('Y-m-d', strtotime('-1 day'));
    }

    /**
     * 判断日期是否为明天
     * @param string|int $datetime 时间日期
     * @return bool 如果是明天则返回True,否则返回False
     */
    public static function isTomorrow($datetime): bool
    {
        return self::format('Y-m-d', $datetime) == self::format('Y-m-d', strtotime('+1 day'));
    }

    /**
     * 判断日期是否为本周
     * @param string|int $datetime 时间日期
     * @return bool 如果是本周则返回True,否则返回False
     */
    public static function isThisWeek($datetime): bool
    {
        $week_start = strtotime(date('Y-m-d 00:00:00', strtotime('this week')));
        $week_end = strtotime(date('Y-m-d 23:59:59', strtotime('last day next week')));
        $timestamp = self::toTimestamp($datetime);
        return $timestamp >= $week_start && $timestamp <= $week_end;
    }

    /**
     * 判断日期是否为本月
     * @param string|int $datetime 时间日期
     * @return bool 如果是本月则返回True,否则返回False
     */
    public static function isThisMonth($datetime): bool
    {
        return self::format('Y-m', $datetime) == self::format('Y-m');
    }

    /**
     * 判断日期是否为今年
     * @param string|int $datetime 时间日期
     * @return bool 如果是今年则返回True,否则返回False
     */
    public static function isThisYear($datetime): bool
    {
        return self::format('Y', $datetime) == self::format('Y');
    }

    /**
     * 获得指定日期是星期几(默认为当前时间)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 星期几(1-7)
     */
    public static function getWeekDay($datetime = null): int
    {
        return intval(self::format('N', $datetime));
    }

    /**
     * 判断指定日期是否为平常日(周一到周五)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return bool 是平常日返回true,否则返回false
     */
    public static function isWeekday($datetime = null): bool
    {
        return in_array(self::getWeekDay($datetime), [1, 2, 3, 4, 5]);
    }

    /**
     * 判断指定日期是否为周末(周六和周日)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return bool 是周末返回true,否则返回false
     */
    public static function isWeekend($datetime = null): bool
    {
        return in_array(self::getWeekDay($datetime), [6, 7]);
    }

    //获得两个日期得差量对象
    private static function getDateDiff($datetime, $new_datetime = null): \DateInterval
    {
        $datetime = self::format('Y-m-d H:i:s', $datetime);
        $new_datetime = self::format('Y-m-d H:i:s', $new_datetime);
        return date_diff(date_create($datetime), date_create($new_datetime));
    }

    /**
     * 返回两个日期相差的秒数(如果之传入一个日期,则与当前时间比较)
     * @param $datetime
     * @param $new_datetime
     * @return int
     */
    public static function diffSeconds($datetime, $new_datetime = null): int
    {
        $timestamp = self::toTimestamp($datetime);
        $new_timestamp = self::toTimestamp($new_datetime);
        return abs($new_timestamp - $timestamp);
    }

    /**
     * 返回两个日期相差分钟数(如果之传入一个日期,则与当前时间比较)
     * @param $datetime
     * @param $new_datetime
     * @return int
     */
    public static function diffMinutes($datetime, $new_datetime = null): int
    {
        return intval(self::diffSeconds($datetime, $new_datetime) / 60);
    }

    /**
     * 返回两个日期相差小时数(如果之传入一个日期,则与当前时间比较)
     * @param $datetime
     * @param $new_datetime
     * @return int
     */
    public static function diffHours($datetime, $new_datetime = null): int
    {
        return intval(self::diffSeconds($datetime, $new_datetime) / 3600);
    }

    /**
     * 返回两个日期相差天数(如果只传入一个日期,则与当天时间比较)
     * @param int|string $datetime     要计算的时间
     * @param int|string $new_datetime 要比较的时间(默认为当前时间)
     * @return int 相差天数
     */
    public static function diffDays($datetime, $new_datetime = null): int
    {
        return self::getDateDiff($datetime, $new_datetime)->days;
    }

    /**
     * 返回两个日期相差星期数(如果只传入一个日期,则与当天时间比较)
     * @param int|string $datetime     要计算的时间
     * @param int|string $new_datetime 要比较的时间(默认为当前时间)
     * @return int 相差星期数
     */
    public static function diffWeeks($datetime, $new_datetime = null): int
    {
        return intval(self::diffDays($datetime, $new_datetime) / 7);
    }

    /**
     * 返回两个日期相差月数(如果只传入一个日期,则与当天时间比较)
     * @param int|string $datetime     要计算的时间
     * @param int|string $new_datetime 要比较的时间(默认为当前时间)
     * @return int 相差月数
     */
    public static function diffMonths($datetime, $new_datetime = null): int
    {
        $diff = self::getDateDiff($datetime, $new_datetime);
        return $diff->y * 12 + $diff->m;
    }

    /**
     * 返回两个日期相差年数(如果只传入一个日期,则与当前时间比较)
     * @param int|string $datetime     要计算的时间
     * @param int|string $new_datetime 要比较的时间(默认为当前时间)
     * @return int 相差年数
     */
    public static function diffYears($datetime, $new_datetime = null): int
    {
        return self::getDateDiff($datetime, $new_datetime)->y;
    }

    /**
     * 返回N分钟前的时间戳,传入第二个参数,则从该时间开始计算
     * @param int        $minute   分钟数(默认为1分钟)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @param bool       $round    是否取整(默认false),如果传入true,则返回当前分钟0秒的时间戳
     * @return int 时间戳
     */
    public static function beforeMinute(int $minute = 1, $datetime = null, bool $round = false): int
    {
        $timestamp = self::modifyTimestamp(sprintf('-%d minute', $minute), $datetime);
        return $round ? strtotime(date('Y-m-d H:i:00', $timestamp)) : $timestamp;
    }

    /**
     * 返回N分钟后的时间戳,传入第二个参数,则从该时间开始计算
     * @param int        $minute   分钟数(默认为1分钟)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @param bool       $round    是否取整(默认false),如果传入true,则返回当前分钟0秒的时间戳
     * @return int 时间戳
     */
    public static function afterMinute(int $minute = 1, $datetime = null, bool $round = false): int
    {
        $timestamp = self::modifyTimestamp(sprintf('+%d minute', $minute), $datetime);
        return $round ? strtotime(date('Y-m-d H:i:00', $timestamp)) : $timestamp;
    }

    /**
     * 返回N小时前的时间戳,传入第二个参数,则从该时间开始计算
     * @param int        $hour     小时数(默认为1小时)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @param bool       $round    是否取整(默认false),如果传入true,则返回当前小时0分钟的时间戳
     * @return int 时间戳
     */
    public static function beforeHour(int $hour = 1, $datetime = null, bool $round = false): int
    {
        $timestamp = self::modifyTimestamp(sprintf('-%d hour', $hour), $datetime);
        return $round ? strtotime(date('Y-m-d H:00:00', $timestamp)) : $timestamp;
    }

    /**
     * 返回N小时后的时间戳,传入第二个参数,则从该时间开始计算
     * @param int        $hour     小时数(默认为1小时)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @param bool       $round    是否取整(默认false),如果传入true,则返回当前小时0分钟的时间戳
     * @return int 时间戳
     */
    public static function afterHour(int $hour = 1, $datetime = null, bool $round = false): int
    {
        $timestamp = self::modifyTimestamp(sprintf('+%d hour', $hour), $datetime);
        return $round ? strtotime(date('Y-m-d H:00:00', $timestamp)) : $timestamp;
    }

    /**
     * 返回N天前的时间戳,传入第二个参数,则从该时间开始计算
     * @param int        $day      天数(默认为1天)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @param bool       $round    是否取整(默认false),如果传入true,则返回当前日期0点的时间戳
     * @return int 时间戳
     */
    public static function beforeDay(int $day = 1, $datetime = null, bool $round = false): int
    {
        $timestamp = self::modifyTimestamp(sprintf('-%d day', $day), $datetime);
        return $round ? strtotime(date('Y-m-d 00:00:00', $timestamp)) : $timestamp;
    }

    /**
     * 返回N天后的时间戳,传入第二个参数,则从该时间开始计算
     * @param int        $day      天数(默认为1天)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @param bool       $round    是否取整(默认false),如果传入true,则返回当前日期0点的时间戳
     * @return int 时间戳
     */
    public static function afterDay(int $day = 1, $datetime = null, bool $round = false): int
    {
        $timestamp = self::modifyTimestamp(sprintf('+%d day', $day), $datetime);
        return $round ? strtotime(date('Y-m-d 00:00:00', $timestamp)) : $timestamp;
    }

    /**
     * 返回N星期前的时间戳,传入第二个参数,则从该时间开始计算
     * @param int        $week     星期数(默认为1星期)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function beforeWeek(int $week = 1, $datetime = null): int
    {
        return self::modifyTimestamp(sprintf('-%d week', $week), $datetime);
    }

    /**
     * 返回N星期后的时间戳,传入第二个参数,则从该时间开始计算
     * @param int        $week     星期数(默认为1星期)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function afterWeek(int $week = 1, $datetime = null): int
    {
        return self::modifyTimestamp(sprintf('+%d week', $week), $datetime);
    }

    /**
     * 返回N月前的时间戳,传入第二个参数,则从该时间开始计算
     * @param int        $month    月数(默认为1个月)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @param bool       $round    是否取整(默认false),如果传入true,则返回当前日期1号0点的时间戳
     * @return int 时间戳
     */
    public static function beforeMonth(int $month = 1, $datetime = null, bool $round = false): int
    {
        $timestamp = self::modifyTimestamp(sprintf('-%d month', $month), $datetime);
        return $round ? strtotime(date('Y-m-1 00:00:00', $timestamp)) : $timestamp;
    }

    /**
     * 返回N月后的时间戳,传入第二个参数,则从该时间开始计算
     * @param int        $month    月数(默认为1个月)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @param bool       $round    是否取整(默认false),如果传入true,则返回当前日期1号0点的时间戳
     * @return int 时间戳
     */
    public static function afterMonth(int $month = 1, $datetime = null, bool $round = false): int
    {
        $timestamp = self::modifyTimestamp(sprintf('+%d month', $month), $datetime);
        return $round ? strtotime(date('Y-m-1 00:00:00', $timestamp)) : $timestamp;
    }

    /**
     * 返回N年前的时间戳,传入第二个参数,则从该时间开始计算
     * @param int        $year     年数(默认为1年)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @param bool       $round    是否取整(默认false),如果传入true,则返回当前日期1月1号0点的时间戳
     * @return int 时间戳
     */
    public static function beforeYear(int $year = 1, $datetime = null, bool $round = false): int
    {
        $timestamp = self::modifyTimestamp(sprintf('-%d year', $year), $datetime);
        return $round ? strtotime(date('Y-1-1 00:00:00', $timestamp)) : $timestamp;
    }

    /**
     * 返回N年后的时间戳,传入第二个参数,则从该时间开始计算
     * @param int        $year     年数(默认为1年)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @param bool       $round    是否取整(默认false),如果传入true,则返回当前日期1月1号0点的时间戳
     * @return int 时间戳
     */
    public static function afterYear(int $year = 1, $datetime = null, bool $round = false): int
    {
        $timestamp = self::modifyTimestamp(sprintf('+%d year', $year), $datetime);
        return $round ? strtotime(date('Y-1-1 00:00:00', $timestamp)) : $timestamp;
    }

    /**
     * 获得秒级/毫秒级/微秒级/纳秒级时间戳
     * @param int $level 默认0,获得秒级时间戳. 1.毫秒级时间戳; 2.微秒级时间戳; 3.纳米级时间戳
     * @return int 时间戳
     */
    public static function getTimestamp(int $level = 0): int
    {
        if ($level === 0) return time();
        list($msc, $sec) = explode(' ', microtime());
        if ($level === 1) {
            return intval(sprintf('%.0f', (floatval($msc) + floatval($sec)) * 1000));
        } elseif ($level === 2) {
            return intval(sprintf('%.0f', (floatval($msc) + floatval($sec)) * 1000 * 1000));
        } else {
            return intval(sprintf('%.0f', (floatval($msc) + floatval($sec)) * 1000 * 1000 * 1000));
        }
    }

    /**
     * 获得毫秒级的时间戳
     * @return int 毫秒级时间戳
     */
    public static function getMilliTimestamp(): int
    {
        return self::getTimestamp(1);
    }

    /**
     * 获得微秒级的时间戳
     * @return int 微秒级时间戳
     */
    public static function getMicroTimestamp(): int
    {
        return self::getTimestamp(2);
    }

    /**
     * 获得纳秒级的时间戳
     * @return int 纳秒级时间戳
     */
    public static function getNanoTimestamp(): int
    {
        return self::getTimestamp(3);
    }

    /**
     * 判断该日期是否为闰年
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return bool 闰年返回true,否则返回false
     */
    public static function isLeapYear($datetime = null): bool
    {
        return self::format('L', $datetime) == 1;
    }

    /**
     * 判断该日期的当年有多少天
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 该年的天数
     */
    public static function daysInYear($datetime = null): int
    {
        return self::isLeapYear($datetime) ? 366 : 365;
    }

    /**
     * 判断该日期的当月有多少天
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 该月的天数
     */
    public static function daysInMonth($datetime = null): int
    {
        return intval(self::format('t', $datetime));
    }

    /**
     * 不同时区的时间转换
     * @param string      $toTimezone   目标时区
     * @param string|null $fromTimezone 原时区(默认为当前PHP运行环境所设置的时区)
     * @param int|string  $datetime     任意格式的时间字符串或时间戳(默认为当前时间)
     * @param string      $format       格式化字符串
     * @return string
     * @throws Exception
     */
    public static function timezoneFormat(string $toTimezone, ?string $fromTimezone = null, $datetime = 'now', string $format = 'Y-m-d H:i:s'): string
    {
        if (self::isTimestamp($datetime)) {
            $date = new DateTime();
            $date->setTimestamp($datetime);
            $date->setTimezone(new DateTimeZone('UTC'));
        } else {
            if ($fromTimezone === null) {
                $fromTimezone = date_default_timezone_get();
            }
            $date = new DateTime($datetime, new DateTimeZone($fromTimezone));
        }
        $date->setTimezone(new DateTimeZone($toTimezone));
        return $date->format($format);
    }

    /**
     * 比较两个时间的大小,如果第二个参数为空,则与当前时间比较
     * @param $datetime1
     * @param $datetime2
     * @return int 第一个时间大于第二个时间则返回1,小于则返回-1,相等时则返回0
     */
    public static function compare($datetime1, $datetime2 = null): int
    {
        $timestamp1 = self::toTimestamp($datetime1);
        $timestamp2 = self::toTimestamp($datetime2);
        if ($timestamp1 > $timestamp2) {
            return 1;
        } elseif ($timestamp1 < $timestamp2) {
            return -1;
        } else {
            return 0;
        }
    }

    /**
     * 获取当前时间
     * @param string $format 格式化字符串(默认为:Y-m-d H:i:s)
     * @return string
     */
    public static function now(string $format = 'Y-m-d H:i:s'): string
    {
        return date($format);
    }

    /**
     * 后续开发计划:
     * TODO: 返回当前是第几年, getYear(),返回4位数年份.
     * TODO: 返回当前是第几个季度, getQuarter(),返回1234.
     * TODO: 返回当前是第几个月, getMonth(),返回1-12.
     * TODO: 返回当前是第几周, getWeek(),返回1-53.
     * TODO: 返回当前是第几天, getDay(),返回1-31.
     * TODO: 返回当前是第几小时, getHour(),返回0-23.
     * TODO: 返回当前是第几分钟, getMinute(),返回0-59.
     * TODO: 返回当前是第几秒, getSecond(),返回0-59.
     * TODO: 为beforeWeek和afterWeek增加取整方法
     * TODO: 修改before和after相关方法,使取整不仅可以向前,还可以向后,如afterMonth可以返回该月最后一天的23点59分59秒的时间戳
     * TODO: 返回日期范围,主要用于SQL查询, 比如今天,昨天,最近7天, 本月, 本周等等. 为了方便使用, 会另外再起一个类
     */
}
