---
order: 5
---

# ⚓ Timestamp Before or After

## beforeMinute()

### Gets the timestamp N minutes before the specified time

#### Parameters

| Parameter |                                                   Introduction                                                   |                 Require                 |
| :-------: | :--------------------------------------------------------------------------------------------------------------: | :-------------------------------------: |
|  minute   |                                                     minutes                                                      | Optional, the default value is 1 minute |
| datetime  |                        Starts at a specified time (any type of string time or timestamp)                         | Optional, defaults to the current time  |
|   round   | If true, the whole number is rounded up or not, and if true, the calculation starts from 0 seconds of the minute |       Optional, defaults to false       |

#### Return Values

> The timestamp is calculated from the specified time between N minutes ago

#### Example code

```php
/* Obtain the timestamp of 0 seconds before the specified time of 3 minutes */
TimeHelper::beforeMinute(3,'2022-3-2 10:15:33',true);
// 1646187120

/* Obtain the timestamp 10 minutes before the specified time */
TimeHelper::beforeMinute(10,'2022-3-2 10:15:33');
// 1646186733

/* Get a timestamp from 5 minutes ago */
TimeHelper::beforeMinute(5);
// 1698734495
```

## afterMinute()

### Obtain the timestamp after the specified time N minutes

#### Parameters

| Parameter |                                                   Introduction                                                   |                 Require                 |
| :-------: | :--------------------------------------------------------------------------------------------------------------: | :-------------------------------------: |
|  minute   |                                                     minutes                                                      | Optional, the default value is 1 minute |
| datetime  |                        Starts at a specified time (any type of string time or timestamp)                         | Optional, defaults to the current time  |
|   round   | If true, the whole number is rounded up or not, and if true, the calculation starts from 0 seconds of the minute |       Optional, defaults to false       |

#### Return Values

> The timestamp is calculated from the specified time between N minutes

#### Example code

```php
/* Obtain the timestamp 20 minutes after the specified time */
TimeHelper::afterMinute(20,'2022-3-2 10:15:33');
// 1646188533

/* Get the timestamp after 1 minute */
TimeHelper::afterMinute();
// 1698734495
```

## beforeHour()

### Obtain the timestamp N hours before the specified time

#### Parameters

| Parameter |                           Introduction                            |                Require                 |
| :-------: | :---------------------------------------------------------------: | :------------------------------------: |
|   hour    |                               hours                               | Optional, the default value is 1 hour  |
| datetime  | Starts at a specified time (any type of string time or timestamp) | Optional, defaults to the current time |
|   round   |      If true, the whole is calculated from 0:00 of the hour       |      Optional, defaults to false       |

#### Return Values

> The timestamp is calculated from the specified time between N hours ago

#### Example code

```php
/* Obtain the timestamp that started at 0:00 3 hours ago */
TimeHelper::beforeHour(3,null,true);
// 1698734495

/* Get the timestamp 1 hour before the specified time (note that this is the usage after php 8) */
TimeHelper::beforeHour(datetime:'Apr 11, 2020');
// 1586534400
```

## afterHour()

### Obtain the timestamp after the specified time N hours

#### Parameters

| Parameter |                           Introduction                            |                Require                 |
| :-------: | :---------------------------------------------------------------: | :------------------------------------: |
|   hour    |                               hours                               | Optional, the default value is 1 hour  |
| datetime  | Starts at a specified time (any type of string time or timestamp) | Optional, defaults to the current time |
|   round   |      If true, the whole is calculated from 0:00 of the hour       |      Optional, defaults to false       |

#### Return Values

> The timestamp is calculated from the specified time between N hours

#### Example code

```php
/* Returns a timestamp 2 hours later */
TimeHelper::afterHour(2);
// 1698734495
```

## beforeDay()

### Get the timestamp N days before the specified time

#### Parameters

| Parameter |                           Introduction                            |                Require                 |
| :-------: | :---------------------------------------------------------------: | :------------------------------------: |
|    day    |                               days                                |  Optional, the default value is 1 day  |
| datetime  | Starts at a specified time (any type of string time or timestamp) | Optional, defaults to the current time |
|   round   |  If true, the whole value is calculated from 0:00:00 on that day  |      Optional, defaults to false       |

#### Return Values

> The timestamp is calculated from N days ago between the specified

#### Example code

```php
/* Get the timestamp of 0:00 15 days ago */
TimeHelper::beforeDay(15,null,true);
// 1698734495

/* Obtain the timestamp 3 days before the specified time */
TimeHelper::beforeDay(3,1698734495);
// 1698475295
```

## afterDay()

### Obtain the timestamp after N days of the specified time

#### Parameters

| Parameter |                           Introduction                            |                Require                 |
| :-------: | :---------------------------------------------------------------: | :------------------------------------: |
|    day    |                               days                                |  Optional, the default value is 1 day  |
| datetime  | Starts at a specified time (any type of string time or timestamp) | Optional, defaults to the current time |
|   round   |  If true, the whole value is calculated from 0:00:00 on that day  |      Optional, defaults to false       |

#### Return Values

> The timestamp is calculated from the specified time between N days

#### Example code

```php
/* Get the timestamp after 15 days */
TimeHelper::afterDay(15);
// 1698483295
```

## beforeWeek()

### Get the timestamp N weeks before the specified time

#### Parameters

| Parameter |                                Introduction                                 |                Require                 |
| :-------: | :-------------------------------------------------------------------------: | :------------------------------------: |
|   week    |                                    weeks                                    |      Optional, default is 1 week       |
| datetime  |      Starts at a specified time (any type of string time or timestamp)      | Optional, defaults to the current time |
|   round   | If true, the rounding is calculated from 00:00:00 on the Monday of the week |      Optional, defaults to false       |

#### Return Values

> The timestamp is calculated from the specified time between N weeks ago

#### Example code

```php
/* Obtain the timestamp 2 weeks before the specified time */
TimeHelper::beforeWeek(2,'2022-4-24 23:01:11');
// 1649602871

/* Obtain the timestamp 2 weeks before the specified time, starting from 00:00:00 on the Monday */
TimeHelper::beforeWeek(2,null,true);
// 1649602871
```

## afterWeek()

### Gets the timestamp after N weeks of the specified time

#### Parameters

| Parameter |                                Introduction                                 |                Require                 |
| :-------: | :-------------------------------------------------------------------------: | :------------------------------------: |
|   week    |                                    weeks                                    |      Optional, default is 1 week       |
| datetime  |      Starts at a specified time (any type of string time or timestamp)      | Optional, defaults to the current time |
|   round   | If true, the rounding is calculated from 00:00:00 on the Monday of the week |      Optional, defaults to false       |

#### Return Values

> The timestamp is calculated from the specified time between N weeks

#### Example code

```php
/* Get a timestamp one week later */
TimeHelper::afterWeek();
// 1698734495
```

## beforeMonth()

### Obtain the timestamp of the specified time N months ago

#### Parameters

| Parameter |                               Introduction                                |                Require                 |
| :-------: | :-----------------------------------------------------------------------: | :------------------------------------: |
|   month   |                                  months                                   | Optional, the default value is 1 month |
| datetime  |     Starts at a specified time (any type of string time or timestamp)     | Optional, defaults to the current time |
|   round   | If true, the rounding is calculated from 00:00:00 on the 1st of the month |      Optional, defaults to false       |

#### Return Values

> The timestamp from N months ago is calculated from the specified period

#### Example code

```php
/* Get the timestamp 1 month ago for the following time (note that this is the usage after php 8) */
TimeHelper::beforeMonth(datetime:1646360133);
// 1643940933

/* Get the timestamp of 00:00 on the 1st day 2 months ago */
TimeHelper::beforeMonth(2,null,true);
// 1698734495

/* Get a timestamp from 3 months ago */
TimeHelper::beforeMonth(3);
// 1698624481
```

## afterMonth()

### Obtain the timestamp after N months of the specified time

#### Parameters

| Parameter |                               Introduction                                |                Require                 |
| :-------: | :-----------------------------------------------------------------------: | :------------------------------------: |
|   month   |                                  months                                   | Optional, the default value is 1 month |
| datetime  |     Starts at a specified time (any type of string time or timestamp)     | Optional, defaults to the current time |
|   round   | If true, the rounding is calculated from 00:00:00 on the 1st of the month |      Optional, defaults to false       |

#### Return Values

> The timestamp after N months is calculated from the specified period

#### Example code

```php
/* Get the timestamp after 5 months */
TimeHelper::afterMonth(5);
// 1698734495

/* Get the timestamp of 0:00 on the 1st of the following month (note that this is the usage after php 8) */
TimeHelper::afterMonth(round:true);
// 1643940933
```

## beforeYear()

### Obtain the timestamp of the specified time N years ago

#### Parameters

| Parameter |                                Introduction                                |                Require                 |
| :-------: | :------------------------------------------------------------------------: | :------------------------------------: |
|   year    |                                   years                                    |      Optional, default is 1 year       |
| datetime  |     Starts at a specified time (any type of string time or timestamp)      | Optional, defaults to the current time |
|   round   | If true, the rounding is calculated from 00:00:00 on January 1 of the year |      Optional, defaults to false       |

#### Return Values

> The timestamp is calculated from the specified time between N years ago

#### Example code

```php
/* Obtain a timestamp from 3 years ago to the specified time */
TimeHelper::beforeYear(3,'2022-7-11');
// 1562774400

/* Get the timestamp of 00:00:00 on January 1 next year */
TimeHelper::beforeYear(0,null,true);
// 1640995200
```

## afterYear()

### Obtain the timestamp after the specified time N years later

#### Parameters

| Parameter |                                Introduction                                |                Require                 |
| :-------: | :------------------------------------------------------------------------: | :------------------------------------: |
|   year    |                                   years                                    |      Optional, default is 1 year       |
| datetime  |     Starts at a specified time (any type of string time or timestamp)      | Optional, defaults to the current time |
|   round   | If true, the rounding is calculated from 00:00:00 on January 1 of the year |      Optional, defaults to false       |

#### Return Values

> The timestamp is calculated from the specified time between years and N years later

#### Example code

```php
/* Get a timestamp after 2 years */
TimeHelper::afterYear(2);
// 1698734495
```
