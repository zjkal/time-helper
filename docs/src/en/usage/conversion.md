---
order: 7
---

# 🍍 Conversion

::: tip
It is used to convert crawlers crawling web pages or third-party programs to connect with different time formats
:::

## format()

### Convert any format time to the specified format

#### Parameters

| Parameter |                            Introduction                            |                Require                 |
|:---------:|:------------------------------------------------------------------:|:--------------------------------------:|
|  format   | The date format is the same as that of the system function date(). |    Optional, default is Y-m-d H:i:s    |
| datetime  |                Any type of string time or timestamp                | Optional, defaults to the current time |

#### Return Values

> Specifies the format of the time string

#### Example code

```php
/* Convert the following dates to a date format commonly used in China */
TimeHelper::format('Y-m-d H:i:s','May 3, 2022 12:01:33');
// 2022-03-03 12:01:33

/* Convert timestamps to date formats commonly used in the West */
TimeHelper::format('F j, Y, g:i a',1698762509);
// October 31, 2023, 10:28 pm
```

## isTimestamp()

### Determines whether a string or number is a timestamp

#### Parameters

| Parameter |           Introduction            | Require  |
|:---------:|:---------------------------------:|:--------:|
| timestamp | The string or number to be judged | required |

#### Return Values

> 'true' if it's a timestamp, 'false' if it's otherwise

#### Example code

```php
/* Check whether the following strings are timestamps */
TimeHelper::isTimestamp('1646360133');
// true

/* Determine whether the following numbers are timestamps */
TimeHelper::isTimestamp(164636013);
// false
```

## toTimestamp()

### Arbitrary format time is converted to a timestamp

#### Parameters

| Parameter |             Introduction             |                Require                 |
|:---------:|:------------------------------------:|:--------------------------------------:|
| datetime  | Any type of string time or timestamp | Optional, defaults to the current time |

#### Return Values

> The timestamp after the conversion

#### Example code

```php
/* Convert the following dates to timestamps */
TimeHelper::toTimestamp('Apr 11, 2020');
// 1586534400

/* Convert irregular dates to timestamps */
TimeHelper::toTimestamp('2023年9月 5点');
// 1693515600
```