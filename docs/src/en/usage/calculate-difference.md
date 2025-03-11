---
order: 4
---

# 🧮 Calculate Difference

## diffSeconds()

### Calculate the number of seconds between two dates

#### Parameters

|  Parameter   |                         Introduction                         |                Require                 |
|:------------:|:------------------------------------------------------------:|:--------------------------------------:|
|   datetime   | Time to be calculated (any type of string time or timestamp) |                required                |
| new_datetime |    Time to compare (any type of string time or timestamp)    | Optional, defaults to the current time |

#### Return Values

> The number of seconds between the two dates

#### Example code

```php
/* Calculate the number of seconds between the following two dates */
TimeHelper::diffSeconds('2023-9-1 12:00:00', 'Sep 9, 2023 12:00:00')
// 777600

/* Calculate the number of seconds in which the following time differs from the current time */
TimeHelper::diffSeconds(1717223549);
// 3072
```

## diffMinutes()

### Calculate the number of minutes between two dates

#### Parameters

|  Parameter   |                         Introduction                         |                Require                 |
|:------------:|:------------------------------------------------------------:|:--------------------------------------:|
|   datetime   | Time to be calculated (any type of string time or timestamp) |                required                |
| new_datetime |    Time to compare (any type of string time or timestamp)    | Optional, defaults to the current time |

#### Return Values

> The number of minutes between the two dates

#### Example code

```php
/* Calculate the number of minutes between the following two dates */
TimeHelper::diffMinutes('Sep 1, 2023 12:00:00', '2023-9-10 12:00:00');
// 12960

/* Calculate the number of minutes by which the following time differs from the current time */
TimeHelper::diffMinutes(1717223549);
// 30
```

## diffHours()

### Calculate the number of hours between two dates

#### Parameters

|  Parameter   |                         Introduction                         |                Require                 |
|:------------:|:------------------------------------------------------------:|:--------------------------------------:|
|   datetime   | Time to be calculated (any type of string time or timestamp) |                required                |
| new_datetime |    Time to compare (any type of string time or timestamp)    | Optional, defaults to the current time |

#### Return Values

> The number of hours between the two dates

#### Example code

```php
/* Calculate the number of hours between the following two dates */
TimeHelper::diffHours('2023-9-1 12:00:00', '2023-9-10 12:00:00');
// 216

/* Calculate the number of hours in which the following time differs from the current time */
TimeHelper::diffHours('2023-9-1 12:00:00');
// 36
```

## diffDays()

### Calculate the number of days between the two dates

#### Parameters

|  Parameter   |                         Introduction                         |                Require                 |
|:------------:|:------------------------------------------------------------:|:--------------------------------------:|
|   datetime   | Time to be calculated (any type of string time or timestamp) |                required                |
| new_datetime |    Time to compare (any type of string time or timestamp)    | Optional, defaults to the current time |

#### Return Values

> The number of days between the two dates

#### Example code

```php
/* Calculate the number of days between the following two dates */
TimeHelper::diffDays('2023-9-1 12:00:00', '2024-9-1 12:00:00');
// 366

/* Calculate the number of days in which the following time differs from the current time */
TimeHelper::diffDays('2023-9-1 12:00:00');
// 30
```

## diffWeeks()

### Calculate the number of weeks between two dates

#### Parameters

|  Parameter   |                         Introduction                         |                Require                 |
|:------------:|:------------------------------------------------------------:|:--------------------------------------:|
|   datetime   | Time to be calculated (any type of string time or timestamp) |                required                |
| new_datetime |    Time to compare (any type of string time or timestamp)    | Optional, defaults to the current time |

#### Return Values

> The number of weeks between the two dates

#### Example code

```php
/* Calculate the number of weeks between the following two dates */
TimeHelper::diffWeeks('2023-9-1 12:00:00', 'Sep 8, 2023');
// 1
```

## diffMonths()

### Calculate the number of months between two dates

#### Parameters

|  Parameter   |                         Introduction                         |                Require                 |
|:------------:|:------------------------------------------------------------:|:--------------------------------------:|
|   datetime   | Time to be calculated (any type of string time or timestamp) |                required                |
| new_datetime |    Time to compare (any type of string time or timestamp)    | Optional, defaults to the current time |

#### Return Values

> The number of months between the two dates

#### Example code

```php
/* Calculate the number of months between the following two dates */
TimeHelper::diffMonths(1693540800, '2024-9-1 12:00:00');
// 12
```

## diffYears()

### Calculate the number of years between the two dates

#### Parameters

|  Parameter   |                         Introduction                         |                Require                 |
|:------------:|:------------------------------------------------------------:|:--------------------------------------:|
|   datetime   | Time to be calculated (any type of string time or timestamp) |                required                |
| new_datetime |    Time to compare (any type of string time or timestamp)    | Optional, defaults to the current time |

#### Return Values

> The number of years between the two dates

#### Example code

```php
/* Calculate the number of years between the following two dates */
TimeHelper::diffYears(1693540800, 1756699200);
// 2
```

## compare()

### Compare the size of the two times

#### Parameters

|  Parameter   |                         Introduction                         |                Require                 |
|:------------:|:------------------------------------------------------------:|:--------------------------------------:|
|   datetime   | Time to be calculated (any type of string time or timestamp) |                required                |
| new_datetime |    Time to compare (any type of string time or timestamp)    | Optional, defaults to the current time |

#### Return Values

> If the first time is greater than the second time, it returns 1, less than -1, and if it is equal, it returns 0

#### Example code

```php
/* Compare the sizes of the following two times */
TimeHelper::compare('2023-9-1 12:00:00', '2023-8-1 12:00:00');
// 1

/* Calculate whether the following time is greater than the current time */
TimeHelper::compare('2023-9-1 12:00:00');
//-1
```