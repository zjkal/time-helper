<br/>
<p align="center">
    <img src="https://github.com/zjkal/time-helper/raw/main/logo.svg" alt="TimeHelper" width="180" />
    <br/>
    <br/>
    <a href="https://github.com/zjkal/time-helper/blob/main/README.md" target="_blank">中文文档</a> | English Document
</p>
<p align="center">
    <a href="https://github.com/zjkal/time-helper/blob/main/LICENSE" target="_blank">
        <img src="https://poser.pugx.org/zjkal/time-helper/license" alt="License">
    </a>
    <a href="https://github.com/zjkal/time-helper" target="_blank">
        <img src="https://poser.pugx.org/zjkal/time-helper/require/php" alt="PHP Version Require">
    </a>
    <a href="https://github.com/zjkal/time-helper" target="_blank">
        <img src="https://poser.pugx.org/zjkal/time-helper/v" alt="Latest Stable Version">
    </a>
    <a href="https://packagist.org/packages/zjkal/time-helper" target="_blank">
        <img src="https://poser.pugx.org/zjkal/time-helper/downloads" alt="Total Downloads">
    </a>
    <a href="https://github.com/zjkal/time-helper" target="_blank">
        <img src="https://img.shields.io/github/actions/workflow/status/zjkal/time-helper/.github/workflows/php.yml?branch=main" alt="GitHub Workflow Status">
    </a>
</p>

`TimeHelper` is a simple and user-friendly `PHP Date and Time Helper Library` that enables quick implementation of common date and time operations. It includes functionalities such as getting the number of seconds from a specified time, obtaining a user-friendly time format, checking time ranges, calculating the difference between two times, and providing timestamps for N hours/days/weeks/months/years ago or in the future, among other features.

## 🧩Features

- Easy to use: It does not rely on any extensions and is ready to use out of the box.
- Simplicity through complexity reduction: All methods can accept `either arbitrary date and time formats` or `timestamps`.
- Quick and efficient: All operations can be accomplished with just `one static method` for each.
- Long-term maintenance: The author is a freelancer committed to ensuring the project's `long-term stability` and `continuous updates`.

## 🚀Installation

Install via Composer.

```bash
composer require zjkal/time-helper
```

## 🌈Usage

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
TimeHelper::getWeekDay('2022-11-27');

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

//Compare two times. If the second parameter is empty, compare it with the current time.
//If the first time is greater than the second time, 1 is returned, if it is less than -1, and if they are equal, 0 is returned.
TimeHelper::compare('2022-4-10 23:01:11','Apr 11, 2020');
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

### 9.Time zone related 🆕

*It mainly provides methods for obtaining time in different time zones and converting time in different time zones*

```php
//Converts a time or timestamp in any format to a time in the specified time zone
//The first parameter is the target time zone to convert
//The second parameter is the original time zone, if not passed, it defaults to the current time zone
//The third parameter is a time or timestamp in any format, if not passed, it defaults to the current time
//The fourth parameter is the time format, which is consistent with the format of the system function date(). If not passed, the default is Y-m-d H:i:s
TimeHelper::timezoneFormat('Europe/London', 'Asia/Shanghai', '2023-8-15 19:16:43', 'H:i:s');
//Get the current time in Los Angeles
TimeHelper::timezoneFormat('America/Los_Angeles');
//Convert Los Angeles Time to London Time
TimeHelper::timezoneFormat('Europe/London', 'America/Los_Angeles', 'Aug 15, 2023 10:15:33', 'H:i:s');
//Convert timestamp to London time
TimeHelper::timezoneFormat('Europe/London', null, 1692097543);
```

For the list of supported time zones, please refer
to [List of Supported Timezones](https://www.php.net/manual/en/timezones.php)

### 10.Chinese holiday/workday related 🔥

*This is a function specifically designed for judging Chinese holidays. It currently includes holiday data from 2020 to 2024 and will be continuously updated in the future.*
*For the convenience of maintenance, a separate class ChinaHoliday is created, which can also accept any type of time format or timestamp as input.*

```php
use zjkal\ChinaHoliday;

//Determine if the specified date is a working day in China.
ChinaHoliday::isWorkday('2023-01-23');

//Determine if the specified date is a Chinese holiday.
ChinaHoliday::isHoliday(1646360133);
```

> **Special Notes**: All time-related methods can accept time in any format or timestamp. However, please note that for dates in the format of m/d/y or d-m-y, if the separator is a slash (/), the American m/d/y format is used. If the separator is a hyphen (-) or a dot (.), the European d-m-y format is used. To avoid potential errors, it is recommended to use the YYYY-MM-DD format or other formats as much as possible.

## 📃Changelog

> v1.1.4 Oct 25, 2023
> * Added data for Chinese holidays in 2024

> v1.1.3 Oct 19, 2023
> * Improved the compatibility of the toTimestamp() method and can convert time in some special formats

> v1.1.2 Sep 16, 2023
> * Added method compare() to compare two times sooner or later

> v1.1.1 Aug 15, 2023
> * Added time zone-related methods, which can convert time or timestamp in any format to the time in the specified time zone

> v1.1.0 Mar 19, 2023
> * The ChinaHoliday class has been added, which is specially used to maintain methods related to Chinese holidays
> * Added the method isWorkday() to judge whether it is a Chinese working day
> * Added the method isHoliday() to judge whether it is a Chinese holiday

<details><summary>Click to read more</summary>

> v1.0.10 Mar 13, 2023
> * Add the method isWeekday() to judge whether the specified date is a normal day
> * Add the method isWeekend() to judge whether the specified date is a weekend

> v1.0.9 Mar 8, 2023
> * Modify the toTimestamp() method to return the current timestamp instead of throwing an exception when no parameter is passed or an empty parameter is passed in
> * Added the method isLeapYear() to judge whether it is a leap year
> * Added the method daysInYear() to get the number of days in the current year
> * Added the method daysInMonth() to get the number of days in the month of the date

> v1.0.8 Feb 21, 2023
> * Added the method getWeekDay() to judge the day of the week for the specified time

> v1.0.7 Feb 8, 2023
> * Added the method format() to convert time in any format to a specified format
> * Delete the obsolete method friendly_date(), please use toFriendly() instead

> v1.0.6 Jan 27, 2023
> * fix bugs

> v1.0.5 Jan 16, 2023
> * Optimized friendly time display algorithm

> v1.0.4 Jan 8, 2023
> * Fixed the BUG of variable type

> v1.0.3 Jan 7, 2023
> * Added a method to judge whether a string is a timestamp
> * Added a method to convert a string of any time type into a timestamp
> * Added a method to obtain timestamps at the second/millisecond/microsecond/nanosecond level

> v1.0.2 Jan 5, 2023
> * Added method to return seconds for N minutes/hours

> v1.0.1 Jan 4, 2023
> * For all methods that return timestamps of N minutes/hours/days/months/years ago or later, the parameter of rounding up is added.

> v1.0.0 Aug 25, 2022
> * Separate from tp-helper's time class
</details>

## 💖sponsor me

Your recognition is the motivation to move on, if you think `TimeHelper` is helpful to you, please [🙏support me](https://zjkal.cn/sponsor), thank you!

## 📖License

The MIT License (MIT). Please see [License File](https://github.com/zjkal/time-helper/blob/main/LICENSE) for more information.
