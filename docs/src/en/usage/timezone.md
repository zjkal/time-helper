---
order: 9
---

# 🍎 Timezone

::: tip
It mainly provides a way to get the time of different time zones and convert the time of different time zones
:::

## timezoneFormat()

### Time zone conversion

#### Parameters

|  Parameter   |                            Introduction                            |                                      Require                                      |
|:------------:|:------------------------------------------------------------------:|:---------------------------------------------------------------------------------:|
|  toTimezone  |                          Target time zone                          |                                     required                                      |
| fromTimezone |                         Original time zone                         | Optional, the default is the time zone set by the current PHP runtime environment |
|   datetime   |                any type of string time or timestamp                |                      Optional, defaults to the current time                       |
|    format    | The date format is the same as that of the system function date(). |                         Optional, default is Y-m-d H:i:s                          |

#### Return Values

> The return value is a time string for the target time zone

#### Example code

```php
/* Convert a specified time in the China time zone to London time */
TimeHelper::timezoneFormat('Europe/London', 'Asia/Shanghai', '2023-8-5 19:16:43', 'H:i:s');
// 11:16:43

/* Get the current time in Los Angeles */
TimeHelper::timezoneFormat('America/Los_Angeles');
// 04:16:43

/* Convert timestamps to London time */
TimeHelper::timezoneFormat('Europe/London', null, 1692097543);
// 11:19:03
```

::: info
For a list of supported time zones, refer to [List of PHP Supported Time Zones](https://www.php.net/manual/zh/timezones.php)
:::