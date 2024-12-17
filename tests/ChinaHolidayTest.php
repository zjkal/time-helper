<?php

namespace zjkal\tests;
date_default_timezone_set('Asia/Shanghai');

use PHPUnit\Framework\TestCase;
use zjkal\ChinaHoliday;

class ChinaHolidayTest extends TestCase
{

    public function testIsWorkday()
    {
        $this->expectOutputString(false);
        print ChinaHoliday::isWorkday('2025-01-01 00:00:00');
    }

    public function testIsHoliday()
    {
        $this->expectOutputString(true);
        print ChinaHoliday::isHoliday('1735660800');
    }
}
