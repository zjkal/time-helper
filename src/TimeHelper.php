<?php


namespace zjkal;

use DateTime;

/**
 * 最方便的PHP时间助手类, 所有方法都可以传入任意类型的时间日期格式或者时间戳
 * Class Time
 * @package zjkal
 */
class TimeHelper
{
    /**
     * 判断是否为时间戳格式
     * @param int|string $timestamp 要判断的字符串
     * @return bool 如果是时间戳返回True,否则返回False
     */
    public static function is_timestamp($timestamp): bool
    {
        if (!is_int($timestamp)) {
            return false;
        }

        if (strtotime(date('Y-m-d H:i:s', $timestamp)) === $timestamp) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 将任意时间类型的参数转为时间戳
     * 请注意 m/d/y 或 d-m-y 格式的日期，如果分隔符是斜线（/），则使用美洲的 m/d/y 格式。如果分隔符是横杠（-）或者点（.），则使用欧洲的 d-m-y 格式。为了避免潜在的错误，您应该尽可能使用 YYYY-MM-DD 格式或者使用 date_create_from_format() 函数。
     * @param int|string $datetime 要转换为时间戳的字符串或数字
     * @return int 时间戳
     */
    public static function toTimestamp($datetime): int
    {
        if (!$datetime) {
            throw new \InvalidArgumentException('Param datetime must be a timestamp or a string time');
        }

        $start = strtotime('1970-01-01 07:00:00'); // 0
        $end = strtotime('2038-01-19 03:14:07'); // 2147454847
        //判断是否为时间戳
        if (is_numeric($datetime) && $datetime <= $end && $datetime >= $start) {
            return intval($datetime);
        } else {
            $timestamp = strtotime($datetime);
            if ($timestamp) {
                return $timestamp;
            } else {
                throw new \InvalidArgumentException('Param datetime must be a timestamp or a string time');
            }
        }
    }

    /**
     * 返回截止到今天晚上零点之前的秒数
     * @return int 秒数
     */
    public static function secondEndToday(): int
    {
        list($y, $m, $d) = explode('-', date('Y-m-d'));
        return mktime(23, 59, 59, $m, $d, $y) - time();
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
     * 友好的时间显示
     * @param int|string $time 时间日期的字符串或数字
     * @param int $max_days 转换格式的最大天数,超过此天数则直接显示日期,默认为365
     * @param string $format 格式,和date函数格式一致,默认为Y年m月d日
     * @param string $lang 语言,默认为中文,如果要显示英文传入en即可
     * @return false|string 转换后的友好时间格式
     */
    public static function friendly_date($time, int $max_days = 365, string $format = 'Y年m月d日', string $lang = 'zh')
    {

        $time = self::toTimestamp($time);
        $now_time = time();
        if ($time > $now_time) {
            return date($format, $time);
        }

        $z = date('z', $time);//当前的第几天
        $now_days = date('z', $now_time);
        if ($z > $now_days) {
            $now_days += 365;
        }
        $diff_days = $now_days - $z;//获取差异天
        $diffs = $now_time - $time;//获取差异秒

        if ($diff_days >= $max_days) {
            return date($format, $time);
        } elseif ($diff_days >= 2) {
            return $diff_days . ($lang == 'zh' ? '天前' : ' days ago');
        } elseif ($diff_days >= 1) {
            return $lang == 'zh' ? '昨天' : 'yesterday';
        } elseif ($diffs >= 3600) {
            return floor($diffs / 3600) . ($lang == 'zh' ? '小时前' : ' hours ago');
        } elseif ($diffs >= 60) {
            return floor($diffs / 60) . ($lang == 'zh' ? '分钟前' : ' minutes ago');
        } elseif ($diffs >= 10) {
            return $diffs . ($lang == 'zh' ? '秒前' : ' seconds ago');
        } else {
            return $lang == 'zh' ? '刚刚' : 'just';
        }
    }

    /**
     * 判断日期是否为今天
     * @param string|int $datetime 时间日期
     * @return bool 如果是今天则返回True,否则返回False
     */
    public static function isToday($datetime): bool
    {
        $timestamp = self::toTimestamp($datetime);
        if (date('Y-m-d', $timestamp) == date('Y-m-d')) {
            return true;
        } else {
            return false;
        }
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
        if ($timestamp >= $week_start && $timestamp <= $week_end) {
            return true;
        } else {
            return false;
        }
    }


    /**
     * 判断日期是否为本月
     * @param string|int $datetime 时间日期
     * @return bool 如果是本月则返回True,否则返回False
     */
    public static function isThisMonth($datetime): bool
    {
        $timestamp = self::toTimestamp($datetime);
        if (date('Y-m', $timestamp) == date('Y-m')) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 判断日期是否为今年
     * @param string|int $datetime 时间日期
     * @return bool 如果是今年则返回True,否则返回False
     */
    public static function isThisYear($datetime): bool
    {
        $timestamp = self::toTimestamp($datetime);
        if (date('Y', $timestamp) == date('Y')) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 返回两个日期相差天数(如果只传入一个日期,则与当天时间比较)
     * @param int|string $datetime 要计算的时间
     * @param int|string $new_datetime 要比较的时间(默认为当前时间)
     * @return int 相差天数
     */
    public static function diffDays($datetime, $new_datetime = null): int
    {
        $datetime = date('Y-m-d', self::toTimestamp($datetime));
        if ($new_datetime) {
            $new_datetime = date('Y-m-d', self::toTimestamp($new_datetime));
        } else {
            $new_datetime = date('Y-m-d');
        }

        return date_diff(date_create($datetime), date_create($new_datetime))->days;
    }

    /**
     * 返回两个日期相差星期数(如果只传入一个日期,则与当天时间比较)
     * @param int|string $datetime 要计算的时间
     * @param int|string $new_datetime 要比较的时间(默认为当前时间)
     * @return int 相差星期数
     */
    public static function diffWeeks($datetime, $new_datetime = null): int
    {
        $datetime = date('Y-m-d', self::toTimestamp($datetime));
        if ($new_datetime) {
            $new_datetime = date('Y-m-d', self::toTimestamp($new_datetime));
        } else {
            $new_datetime = date('Y-m-d');
        }

        return date_diff(date_create($datetime), date_create($new_datetime))->days / 7;
    }

    /**
     * 返回两个日期相差月数(如果只传入一个日期,则与当天时间比较)
     * @param int|string $datetime 要计算的时间
     * @param int|string $new_datetime 要比较的时间(默认为当前时间)
     * @return int 相差月数
     */
    public static function diffMonths($datetime, $new_datetime = null): int
    {
        $datetime = date('Y-m-d', self::toTimestamp($datetime));
        if ($new_datetime) {
            $new_datetime = date('Y-m-d', self::toTimestamp($new_datetime));
        } else {
            $new_datetime = date('Y-m-d');
        }

        $diff = date_diff(date_create($datetime), date_create($new_datetime));
        return $diff->y * 12 + $diff->m;
    }

    /**
     * 返回两个日期相差年数(如果只传入一个日期,则与当前时间比较)
     * @param int|string $datetime 要计算的时间
     * @param int|string $new_datetime 要比较的时间(默认为当前时间)
     * @return int 相差年数
     */
    public static function diffYears($datetime, $new_datetime = null): int
    {
        $datetime = date('Y-m-d', self::toTimestamp($datetime));
        if ($new_datetime) {
            $new_datetime = date('Y-m-d', self::toTimestamp($new_datetime));
        } else {
            $new_datetime = date('Y-m-d');
        }

        return date_diff(date_create($datetime), date_create($new_datetime))->y;
    }

    /**
     * 返回N分钟前的时间戳,传入第二个参数,则从该时间开始计算
     * @param int $minute 分钟数(默认为1分钟)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function beforeMinute(int $minute = 1, $datetime = null): int
    {
        $date = new DateTime();
        if ($datetime !== null) {
            $date->setTimestamp(self::toTimestamp($datetime));
        }
        return $date->modify(sprintf('-%d minute', $minute))->getTimestamp();
    }

    /**
     * 返回N分钟后的时间戳,传入第二个参数,则从该时间开始计算
     * @param int $minute 分钟数(默认为1分钟)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function afterMinute(int $minute = 1, $datetime = null): int
    {
        $date = new DateTime();
        if ($datetime !== null) {
            $date->setTimestamp(self::toTimestamp($datetime));
        }
        return $date->modify(sprintf('+%d minute', $minute))->getTimestamp();
    }


    /**
     * 返回N小时前的时间戳,传入第二个参数,则从该时间开始计算
     * @param int $hour 小时数(默认为1小时)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function beforeHour(int $hour = 1, $datetime = null): int
    {
        $date = new DateTime();
        if ($datetime !== null) {
            $date->setTimestamp(self::toTimestamp($datetime));
        }
        return $date->modify(sprintf('-%d hour', $hour))->getTimestamp();
    }

    /**
     * 返回N小时后的时间戳,传入第二个参数,则从该时间开始计算
     * @param int $hour 小时数(默认为1小时)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function afterHour(int $hour = 1, $datetime = null): int
    {
        $date = new DateTime();
        if ($datetime !== null) {
            $date->setTimestamp(self::toTimestamp($datetime));
        }
        return $date->modify(sprintf('+%d hour', $hour))->getTimestamp();
    }


    /**
     * 返回N天前的时间戳,传入第二个参数,则从该时间开始计算
     * @param int $day 天数(默认为1天)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function beforeDay(int $day = 1, $datetime = null): int
    {
        $date = new DateTime();
        if ($datetime !== null) {
            $date->setTimestamp(self::toTimestamp($datetime));
        }
        return $date->modify(sprintf('-%d day', $day))->getTimestamp();
    }

    /**
     * 返回N天后的时间戳,传入第二个参数,则从该时间开始计算
     * @param int $day 天数(默认为1天)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function afterDay(int $day = 1, $datetime = null): int
    {
        $date = new DateTime();
        if ($datetime !== null) {
            $date->setTimestamp(self::toTimestamp($datetime));
        }
        return $date->modify(sprintf('+%d day', $day))->getTimestamp();
    }

    /**
     * 返回N星期前的时间戳,传入第二个参数,则从该时间开始计算
     * @param int $week 星期数(默认为1星期)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function beforeWeek(int $week = 1, $datetime = null): int
    {
        $date = new DateTime();
        if ($datetime !== null) {
            $date->setTimestamp(self::toTimestamp($datetime));
        }
        return $date->modify(sprintf('-%d week', $week))->getTimestamp();
    }

    /**
     * 返回N星期后的时间戳,传入第二个参数,则从该时间开始计算
     * @param int $week 星期数(默认为1星期)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function afterWeek(int $week = 1, $datetime = null): int
    {
        $date = new DateTime();
        if ($datetime !== null) {
            $date->setTimestamp(self::toTimestamp($datetime));
        }
        return $date->modify(sprintf('+%d week', $week))->getTimestamp();
    }

    /**
     * 返回N月前的时间戳,传入第二个参数,则从该时间开始计算
     * @param int $month 月数(默认为1个月)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function beforeMonth(int $month = 1, $datetime = null): int
    {
        $date = new DateTime();
        if ($datetime !== null) {
            $date->setTimestamp(self::toTimestamp($datetime));
        }
        return $date->modify(sprintf('-%d month', $month))->getTimestamp();
    }

    /**
     * 返回N月后的时间戳,传入第二个参数,则从该时间开始计算
     * @param int $month 月数(默认为1个月)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function afterMonth(int $month = 1, $datetime = null): int
    {
        $date = new DateTime();
        if ($datetime !== null) {
            $date->setTimestamp(self::toTimestamp($datetime));
        }
        return $date->modify(sprintf('+%d month', $month))->getTimestamp();
    }

    /**
     * 返回N年前的时间戳,传入第二个参数,则从该时间开始计算
     * @param int $year 年数(默认为1年)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function beforeYear(int $year = 1, $datetime = null): int
    {
        $date = new DateTime();
        if ($datetime !== null) {
            $date->setTimestamp(self::toTimestamp($datetime));
        }
        return $date->modify(sprintf('-%d year', $year))->getTimestamp();
    }

    /**
     * 返回N年后的时间戳,传入第二个参数,则从该时间开始计算
     * @param int $year 年数(默认为1年)
     * @param int|string $datetime 任意格式时间字符串或时间戳(默认为当前时间)
     * @return int 时间戳
     */
    public static function afterYear(int $year = 1, $datetime = null): int
    {
        $date = new DateTime();
        if ($datetime !== null) {
            $date->setTimestamp(self::toTimestamp($datetime));
        }
        return $date->modify(sprintf('+%d year', $year))->getTimestamp();
    }
}