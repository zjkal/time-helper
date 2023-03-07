<?php
declare (strict_types=1);

namespace zjkal;

use DateTime;
use InvalidArgumentException;

/**
 * 这个类专门用于判断国内的节假日,比如:某天是否为工作日/节假日
 * Class ChinaHoliday
 * @package zjkal
 */
class ChinaHoliday
{
    //工作日中的休息日
    private static $holiday = [
        '2023' => ['0102', '0123', '0124', '0125', '0126', '0127', '0405', '0501', '0502', '0503', '0622', '0623', '0929', '1002', '1003', '1004', '1005', '1006']
    ];
    //休息日中的工作日
    private static $workday = [
        '2023' => ['0128', '0129', '0423', '0506', '0625', '1007', '1008']
    ];

    /**
     * 判断日期是否为本周
     * @param string|int $datetime 时间日期
     * @return bool 如果是本周则返回True,否则返回False
     */
    public static function isWorkday($datetime): bool
    {
        $timestamp = TimeHelper::toTimestamp($datetime);
        $week = TimeHelper::getWeekDay($timestamp);
        /*未完成*/
    }
}