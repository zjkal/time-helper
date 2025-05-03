---
order: 11
next: /en/appendices/special-note.md
---

# 🧩 Get Parts of Time

::: tip
Used to get parts of a specified time, such as year, quarter, month, week, day, hour, minute, and second
:::

## getYear()

### Get the year of the specified time

#### Parameters

| Parameter | Description | Required |
| :------: | :--------------------------: | :------------------: |
| datetime | Any format time string or timestamp | Optional, defaults to current time |

#### Return Value

> Returns the year, e.g. 2023

#### Example Code

```php
/* Get the year of the specified time */
TimeHelper::getYear('2023-9-1 12:00:00');
// 2023
```

## getQuarter()

### Get the quarter of the specified time

#### Parameters

| Parameter | Description | Required |
| :------: | :--------------------------: | :------------------: |
| datetime | Any format time string or timestamp | Optional, defaults to current time |

#### Return Value

> Returns the quarter, e.g. 1,2,3,4

#### Example Code

```php
/* Get the quarter of the specified time */
TimeHelper::getQuarter('2023-9-1 12:00:00');
// 3
```

## getMonth()

### Get the month of the specified time

#### Parameters

| Parameter | Description | Required |
| :------: | :--------------------------: | :------------------: |
| datetime | Any format time string or timestamp | Optional, defaults to current time |

#### Return Value

> Returns the month, e.g. 1,2,3,4,5,6,7,8,9,10,11,12

#### Example Code

```php
/* Get the month of the specified time */
TimeHelper::getMonth('2023-9-1 12:00:00');
// 9
```

## getWeek()

### Get the week number of the year for the specified time

#### Parameters

| Parameter | Description | Required |
| :------: | :--------------------------: | :------------------: |
| datetime | Any format time string or timestamp | Optional, defaults to current time |

#### Return Value

> Returns the week number

#### Example Code

```php
/* Get the week number of the year for the specified time */
TimeHelper::getWeek('2023-9-1 12:00:00');
// 35
```

## getDay()

### Get the day of the month for the specified time

#### Parameters

| Parameter | Description | Required |
| :------: | :--------------------------: | :------------------: |
| datetime | Any format time string or timestamp | Optional, defaults to current time |

#### Return Value

> Returns the day of the month

#### Example Code

```php
/* Get the day of the month for the specified time */
TimeHelper::getDay('2023-9-1 12:00:00');
// 1
```

## getHour()

### Get the hour of the day for the specified time

#### Parameters

| Parameter | Description | Required |
| :------: | :--------------------------: | :------------------: |
| datetime | Any format time string or timestamp | Optional, defaults to current time |

#### Return Value

> Returns the hour of the day

#### Example Code

```php
/* Get the hour of the day for the specified time */
TimeHelper::getHour('2023-9-1 12:00:00');
// 12
```

## getMinute()

### Get the minute of the hour for the specified time

#### Parameters

| Parameter | Description | Required |
| :------: | :--------------------------: | :------------------: |
| datetime | Any format time string or timestamp | Optional, defaults to current time |

#### Return Value

> Returns the minute of the hour

#### Example Code

```php
/* Get the minute of the hour for the specified time */
TimeHelper::getMinute('2023-9-1 12:00:00');
// 0
```

## getSecond()

### Get the second of the minute for the specified time

#### Parameters

| Parameter | Description | Required |
| :------: | :--------------------------: | :------------------: |
| datetime | Any format time string or timestamp | Optional, defaults to current time |

#### Return Value

> Returns the second of the minute

#### Example Code

```php
/* Get the second of the minute for the specified time */
TimeHelper::getSecond('2023-9-1 12:00:00');
// 0
```
