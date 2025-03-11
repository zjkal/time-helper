---
order: 3
---

# 📅 Determine Range

## isToday()

### Determine whether the date is today

#### Parameters

| Parameter |             Introduction             | Require  |
|:---------:|:------------------------------------:|:--------:|
| datetime  | Any type of string time or timestamp | required |

#### Return Values

> Result of Bool type: 'true' or 'false'

#### Example code

```php
/* Determine whether the date is today */
TimeHelper::isToday('2020-4-10 23:01:11');
// false
```

## isYesterday()

### Determine whether the date is yesterday

#### Parameters

| Parameter |             Introduction             | Require  |
|:---------:|:------------------------------------:|:--------:|
| datetime  | Any type of string time or timestamp | required |

#### Return Values

> Result of Bool type: 'true' or 'false'

#### Example code

```php
/* Determine whether the date is yesterday */
TimeHelper::isYesterday('2020-4-10 23:01:11');
// false
```

## isTomorrow()

### Determine whether the date is tomorrow

#### Parameters

| Parameter |             Introduction             | Require  |
|:---------:|:------------------------------------:|:--------:|
| datetime  | Any type of string time or timestamp | required |

#### Return Values

> Result of Bool type: 'true' or 'false'

#### Example code

```php
/* Determine whether the date is tomorrow */
TimeHelper::isTomorrow('2020-4-10 23:01:11');
// false
```

## isThisWeek()

### Determine if the date is this week

#### Parameters

| Parameter |             Introduction             | Require  |
|:---------:|:------------------------------------:|:--------:|
| datetime  | Any type of string time or timestamp | required |

#### Return Values

> Result of Bool type: 'true' or 'false'

#### Example code

```php
/* Determine if the date is this week */
TimeHelper::isThisWeek('2020-5-1');
// false
```

## isThisMonth()

### Determine whether the date is this month

#### Parameters

| Parameter |             Introduction             | Require  |
|:---------:|:------------------------------------:|:--------:|
| datetime  | Any type of string time or timestamp | required |

#### Return Values

> Result of Bool type: 'true' or 'false'

#### Example code

```php
/* Determine whether the date is this month */
TimeHelper::isThisMonth(1586451741);
// false
```

## isThisYear()

### Determine if the date is this year

#### Parameters

| Parameter |             Introduction             | Require  |
|:---------:|:------------------------------------:|:--------:|
| datetime  | Any type of string time or timestamp | required |

#### Return Values

> Result of Bool type: 'true' or 'false'

#### Example code

```php
/* Determine if the date is this year */
TimeHelper::isThisYear('Apr 11, 2023');
// true
```

## getWeekDay()

### The date of the week is determined

#### Parameters

| Parameter |             Introduction             |                     Require                     |
|:---------:|:------------------------------------:|:-----------------------------------------------:|
| datetime  | Any type of string time or timestamp | Optional, the default value is the current date |

#### Return Values

> The return value is 1-7, 1 is Monday... 7 is Sunday

#### Example code

```php
/* Determine the day of the week when the specified time is determined */
TimeHelper::getWeekDay('2023-10-01 12:31:01');
// 7

/* Judge what day of the week it is */
TimeHelper::getWeekDay();
// 3
```

## isWeekday()

### Determine whether the date is a normal day

#### Parameters

| Parameter |             Introduction             |                     Require                     |
|:---------:|:------------------------------------:|:-----------------------------------------------:|
| datetime  | Any type of string time or timestamp | Optional, the default value is the current date |

#### Return Values

> Results for Bool type: 'true' from Monday to Friday, 'false' from Saturday to Sunday

#### Example code

```php
/* Determines whether the specified time is a normal day */
TimeHelper::isWeekday('Mar 8, 2023');
// true
```

## isWeekend()

### Determine if the date is a weekend

#### Parameters

| Parameter |             Introduction             |                     Require                     |
|:---------:|:------------------------------------:|:-----------------------------------------------:|
| datetime  | Any type of string time or timestamp | Optional, the default value is the current date |

#### Return Values

> Results of Bool type: 'true' on Saturday and Sunday, 'false' on Monday to Friday

#### Example code

```php
/* Check whether the specified time is a weekend */
TimeHelper::isWeekend(1698516612);
// true
```