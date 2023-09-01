<?php

namespace zjkal\tests;

use PHPUnit\Framework\TestCase;
use zjkal\ChinaHoliday;

class ChinaHolidayTest extends TestCase
{

    public function testIsWorkday()
    {
        $this->expectOutputString(true);
        print ChinaHoliday::isWorkday('2023-01-29');
    }

    public function testIsHoliday()
    {
        $this->expectOutputString(false);
        print ChinaHoliday::isHoliday('2023-01-28');
    }
}
