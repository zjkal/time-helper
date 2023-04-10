[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/zjkal/time-helper/.github/workflows/php.yml?branch=main)](https://github.com/zjkal/time-helper/actions)
[![PHP Version Require](http://poser.pugx.org/zjkal/time-helper/require/php)](https://packagist.org/packages/zjkal/time-helper)
[![Latest Stable Version](http://poser.pugx.org/zjkal/time-helper/v)](https://packagist.org/packages/zjkal/time-helper)
[![Latest Unstable Version](http://poser.pugx.org/zjkal/time-helper/v/unstable)](https://packagist.org/packages/zjkal/time-helper)
[![License](http://poser.pugx.org/zjkal/time-helper/license)](https://packagist.org/packages/zjkal/time-helper)
[![Total Downloads](http://poser.pugx.org/zjkal/time-helper/downloads)](https://packagist.org/packages/zjkal/time-helper)

**[中文文档](https://github.com/zjkal/time-helper/) | English Document**

# TimeHelper - the most convenient PHP time helper class library.

### ⭐ Please give me a star, it motivates me to keep going. ⭐

### Features:
1. ***Simplicity***: All methods can accept any type of date/time format or timestamp.
2. ***Efficient***: All operations can be achieved with just one static method.
3. ***Long-term***: The author is a freelancer who will maintain the project for a long time to ensure its continuous updates.

####  If you encounter any bugs or have any suggestions during use, please [submit issues](https://github.com/zjkal/time-helper/issues)

# Install via Composer.

```bash
composer require zjkal/time-helper
```

# Usage

import the TimeHelper helper class into your class.

```php
use zjkal\TimeHelper;
```

### 1. Get the required number of seconds.

*This is usually used for setting cache expiration time, setting end time, and so on.*

```php
//Return the number of seconds before midnight tonight.
TimeHelper::secondEndToday();

//Return the number of seconds for N minutes (default is 1 minute).
TimeHelper::secondMinute(5);

//Return the number of seconds for N hours (default is 1 hour).
TimeHelper::secondHour(2);

//Return the number of seconds for N days (default is 1 day).
TimeHelper::secondDay(10);

//Return the number of seconds for N weeks (default is 1 week).
TimeHelper::secondWeek(4);
```

### 2. Return a friendly date format, such as N seconds ago, N minutes ago, N hours ago, and so on.

*This is usually used for social media platforms, comments, forums, and so on.*

```php
//There are two parameters:
//The first parameter can be either a string representing a date/time or a timestamp.
//The second parameter is the language (default is Chinese; pass in "en" for English).
TimeHelper::toFriendly('2022-3-2 10:15:33');
//English
TimeHelper::toFriendly(1646186290, 'en');
```

### 3. Determine if a date/time falls within a certain range.

```php
//Determine if a date is today.
TimeHelper::isToday('2020-4-10 23:01:11');

// Determine if a date is this week.
TimeHelper::isThisWeek('2020-5-1');

// Determine if a date is this month.
TimeHelper::isThisMonth(1586451741);

// Determine if a date is this year.
TimeHelper::isThisYear('Apr 11, 2020');

// Determine the day of the week for a given time. If no time is passed in, the current time is used. Returns a value from 1 to 7, where 1 is Monday and 7 is Sunday.
TimeHelper::getWeek('2022-11-27');

// Determine if a given time is a weekday (Monday through Friday).
TimeHelper::isWeekday('2023-03-08');

// Determine if a given time is a weekend day (Saturday or Sunday).
TimeHelper::isWeekend(1586451741);


```

### 4. Calculate the difference between two dates/times.

*If only one parameter is passed in, it will be compared to the current time.*

```php
//Calculate the difference in days between two dates.
TimeHelper::diffDays('2022-4-10 23:01:11','Apr 11, 2020');

//Calculate the difference in weeks between two dates.
TimeHelper::diffWeeks('2022-4-10 23:01:11');

//Calculate the difference in months between two dates.
TimeHelper::diffMonths(1586451741,'Apr 11, 2020');

//Calculate the difference in years between two dates.
TimeHelper::diffYears('2022-4-10 23:01:11','Apr 11, 2020');
```

### 5. Return the timestamp of N hours/days/weeks/months/years ago or in the future.

*If only one argument is passed, the calculation will be based on the current time. If a second argument is passed, the calculation will be based on that time. If the third argument is set to true, the calculated time will be rounded to the nearest integer.*

```php
//Return the timestamp of 0 seconds 3 minutes ago from the specified time.
TimeHelper::beforeMinute(3,'2022-3-2 10:15:33',true);

//Return the timestamp of 5 minutes after the current time.
TimeHelper::afterMinute(5);

//Return the timestamp of 1 hour before the specified time (Note: This usage is only available in PHP 8 or later).
TimeHelper::beforeHour(datetime:'Apr 11, 2020');

//Return the timestamp of 2 hours later.
TimeHelper::afterHour(2);

//Return the timestamp of 0 o'clock 15 days ago.
TimeHelper::beforeDay(15,null,true);

//Return the timestamp of 15 days later.
TimeHelper::afterDay(15);

//Return the timestamp of 2 weeks ago from the specified time.
TimeHelper::beforeWeek(2,'2022-4-10 23:01:11');

//Return the timestamp for 10 weeks after the specified time
TimeHelper::afterWeek(10,1646360133);

//Return the timestamp of 1 month before the specified time (Note that this usage is for PHP 8 or later)
TimeHelper::beforeMonth(datetime:1646360133);

//Return the timestamp 5 months from now
TimeHelper::afterMonth(5);

//Return the timestamp of 3 years ago from the specified time.
TimeHelper::beforeYear(3,'2022-7-11');

//Return the timestamp of 2 years later.
TimeHelper::afterYear(2);
```

### 6.Get the current timestamp in seconds/milliseconds/microseconds/nanoseconds.

*Generating an order number or interfacing with other programming languages may require this.*

```php
//Get the timestamp in seconds. You can use time() instead.
TimeHelper::getTimestamp();

//Get the millisecond-level timestamp.
TimeHelper::getMilliTimestamp();

//Get microsecond-level timestamp.
TimeHelper::getMicroTimestamp();

//Get the timestamp in nanoseconds.
TimeHelper::getNanoTimestamp();
```

### 7.Date Conversion

*This function is used for converting date format when crawling web pages or integrating with third-party programs with inconsistent date formats.*

```php
//Convert any format of time to a specified format.
//The first parameter is the format of the time, consistent with the format of the system function date().
//The second parameter is the format of the time, which should be consistent with the format of the date() function. The second parameter is any format of the date and time. If not passed, it defaults to the current time, which can be replaced by the date() function.
TimeHelper::format('Y-m-d H:i:s','May 3, 2022');

//Check if a string is a timestamp, return true if it is, false if it is not.
TimeHelper::isTimestamp(1646360133);

//Convert any time string to a timestamp.
TimeHelper::toTimestamp('Apr 11, 2020');
```

### 8.Leap year calculation

*More convenient to use than native methods.*

```php
//Determine whether it is a leap year, return true if it is, false if it is not.
TimeHelper::isLeapYear('2020-3-2 10:15:33');

//Determine how many days the year of the given date has.
TimeHelper::daysInYear(1646360133);

//Determine how many days the current month of the given date has.
TimeHelper::daysInMonth('Apr 11, 2020');
```

### 9.Chinese holiday/workday related  🆕
*This is a function specifically designed for judging Chinese holidays. It currently includes holiday data from 2020 to 2023 and will be continuously updated in the future.*
*For the convenience of maintenance, a separate class ChinaHoliday is created, which can also accept any type of time format or timestamp as input.*
```php
use zjkal\ChinaHoliday;

//Determine if the specified date is a working day in China.
ChinaHoliday::isWorkday('2023-01-23');

//Determine if the specified date is a Chinese holiday.
ChinaHoliday::isHoliday(1646360133);
```

> **Special Notes**: All time-related methods can accept time in any format or timestamp. However, please note that for dates in the format of m/d/y or d-m-y, if the separator is a slash (/), the American m/d/y format is used. If the separator is a hyphen (-) or a dot (.), the European d-m-y format is used. To avoid potential errors, it is recommended to use the YYYY-MM-DD format or other formats as much as possible.

# Changelog

[UPDATE.md](https://github.com/zjkal/time-helper/blob/main/UPDATE.md)

# License
[MIT](https://github.com/zjkal/time-helper/blob/main/LICENSE)

