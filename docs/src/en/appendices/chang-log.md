---
order: 2
---

# 📄 Changelog

> v1.1.5 Feb 5, 2024
> * Streamline and optimize your code

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