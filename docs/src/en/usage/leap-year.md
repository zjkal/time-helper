---
order: 8
---

# 🌐 Leap Year

::: tip
It is more convenient to use than the native method
:::

## isLeapYear()

### Determine whether the specified date is a leap year

#### Parameters

| Parameter |            Introduction             |                Require                 |
|:---------:|:-----------------------------------:|:--------------------------------------:|
| datetime  | Any format time string or timestamp | Optional, defaults to the current time |

#### Return Values

> 'true' if it's a leap year, 'false' if it's otherwise

#### Example code

```php
/* Determine whether the specified date is a leap year */
TimeHelper::isLeapYear('2020-3-2 10:15:33');
// true

/* Determine if this year is a leap year */
TimeHelper::isLeapYear();
// false
```

## daysInYear()

### Count the number of days in the year in which the specified date is located

#### Parameters

| Parameter |            Introduction             |                Require                 |
|:---------:|:-----------------------------------:|:--------------------------------------:|
| datetime  | Any format time string or timestamp | Optional, defaults to the current time |

#### Return Values

> Returns the number of days in the year in which the specified date is located

#### Example code

```php
/* Calculate the number of days in the current year for the following dates */
TimeHelper::daysInYear(1646360133);
// 365
```

## daysInMonth()

### Count the number of days in the month in which the specified date falls on

#### Parameters

| Parameter |            Introduction             |                Require                 |
|:---------:|:-----------------------------------:|:--------------------------------------:|
| datetime  | Any format time string or timestamp | Optional, defaults to the current time |

#### Return Values

> Returns the number of days in the month in which the specified date falls on

#### Example code

```php
/* Calculate the number of days in the month for the following dates */
TimeHelper::daysInMonth('2020-2-1');
// 29

/* Calculate the number of days in the month */
TimeHelper::daysInMonth();
// 31
```