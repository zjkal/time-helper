<?php
require '../vendor/autoload.php';

echo '是否为国内的工作日:' . PHP_EOL;
var_dump(\zjkal\ChinaHoliday::isWorkday('2023-01-29'));
echo '是否为国内的节假日:' . PHP_EOL;
var_dump(\zjkal\ChinaHoliday::isHoliday('2023-01-28'));