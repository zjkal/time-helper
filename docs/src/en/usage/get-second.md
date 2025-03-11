---
order: 1
prev: /en/getting-started/installation.md
---

# 🕘 Get Second

::: tip
This is usually used for setting cache expiration time, setting end time, and so on.
:::

## secondEndToday()

### Get the number of seconds until midnight tonight

#### Parameters

> nothing

#### Return Values

> The number of seconds between this moment and 0:00 tonight

#### Example code

```php
/* Get the number of seconds until midnight tonight */
TimeHelper::secondEndToday(); 
// 32811
```

## secondMinute()

### Get the number of seconds for N minutes

* Parameter

| Parameter |                     Introduction                     |             Require              |
|:---------:|:----------------------------------------------------:|:--------------------------------:|
|  minutes  | The number of seconds for how many minutes to return | Optional, the default value is 1 |

#### Return Values

> N minutes of seconds

#### Example code

```php
/* Get 5 minutes of seconds */
TimeHelper::secondMinute(5);
// 300
```

## secondHour()

### Get the number of seconds for N hours

#### Parameters

| Parameter |                    Introduction                    |             Require              |
|:---------:|:--------------------------------------------------:|:--------------------------------:|
|   hours   | The number of seconds for how many hours to return | Optional, the default value is 1 |

#### Return Values

> The number of seconds for N hours

#### Example code

```php
/* Get 10 hours of seconds */
TimeHelper::secondHour(10);
// 36000
```

## secondDay()

### Get the number of seconds for N days

#### Parameters

| Parameter |                   Introduction                   |             Require              |
|:---------:|:------------------------------------------------:|:--------------------------------:|
|   days    | The number of seconds of how many days to return | Optional, the default value is 1 |

#### Return Values

> The number of seconds in N days

#### Example code

```php
/* Get the number of seconds in 1 day */
TimeHelper::secondDay();
// 86400
```

## secondWeek()

### Get the number of seconds for N weeks

#### Parameters

| Parameter |                   Introduction                    |             Require              |
|:---------:|:-------------------------------------------------:|:--------------------------------:|
|   weeks   | The number of seconds of how many weeks to return | Optional, the default value is 1 |

#### Return Values

> N weeks of seconds

#### Example code

```php
/* Get the seconds for 1 week */
TimeHelper::secondWeek(1);
// 604800
```