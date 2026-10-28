---
order: 12
---

# 📅 Time Ranges

::: tip
`TimeRange` returns calendar period boundaries as Unix timestamps in seconds, using the current PHP default time zone. All ranges include the start and exclude the end: `[start, end)`.
:::

## period()

### Get a calendar period range

#### Parameters

| Parameter | Introduction | Require |
| --- | --- | --- |
| unit | `day`, `week`, `month`, `quarter`, or `year` | Required |
| datetime | Date string or integer timestamp | Optional, defaults to the current time |
| offset | Number of periods to move: `-1` for the previous period, `0` for the current period, `1` for the next period | Optional, default is 0 |

#### Return Values

> An array with `start` and `end` keys, both containing timestamps in seconds. `end` is the start of the next period, rather than the last second of the requested period.

The following methods provide the same parameters as `period()` without the `unit` parameter:

| Method | Period start | Period end (excluded) |
| --- | --- | --- |
| `day($datetime = null, $offset = 0)` | Midnight on the selected day | Midnight on the next day |
| `week($datetime = null, $offset = 0)` | Monday at midnight | Next Monday at midnight |
| `month($datetime = null, $offset = 0)` | First day of the month at midnight | First day of the next month at midnight |
| `quarter($datetime = null, $offset = 0)` | First day of January, April, July, or October at midnight | First day of the next quarter at midnight |
| `year($datetime = null, $offset = 0)` | January 1 at midnight | January 1 of the next year at midnight |

#### Example code

```php
use zjkal\TimeRange;

/* Get this month's range */
$range = TimeRange::month();

/* Get yesterday's range */
TimeRange::day(null, -1);

/* Get this week's and last week's ranges */
TimeRange::week();
TimeRange::week(null, -1);

/* Get last month's range */
TimeRange::month(null, -1);

/* Get the previous quarter: October 1, 2025 to January 1, 2026 */
TimeRange::quarter('2026-01-31', -1);

/* Get this year's range */
TimeRange::year();

/* Get February 1 to March 1, 2024, without month-end overflow */
TimeRange::period('month', '2024-03-31', -1);
```

Offsets are applied after moving to the start of the period, avoiding month-end overflow. Unsupported period units or dates that cannot be parsed throw `InvalidArgumentException`.

Integers are used directly as Unix timestamps. Date strings use the flexible parsing rules of `TimeHelper::toTimestamp()`. The same rules apply to `contains()`.

::: info
Calendar days are calculated in the current default time zone. A daylight saving transition day may contain 23 or 25 hours rather than 86400 seconds. These methods do not change the global default time zone.
:::

### Use in SQL queries

```php
$range = TimeRange::month();

/* Bind these parameters for a Unix timestamp column:
   WHERE created_at >= :start AND created_at < :end */
$params = ['start' => $range['start'], 'end' => $range['end']];

/* For displaying the last second only */
$lastSecond = date('Y-m-d H:i:s', $range['end'] - 1);
```

For date string columns, format the boundaries with `date()` and ensure that PHP and the database use consistent time zone conventions. Keep the exclusive end for queries involving fractional seconds instead of subtracting one second.

## contains()

### Check if a time is within a specified range

#### Parameters

| Parameter | Introduction | Require |
| --- | --- | --- |
| datetime | Date string or timestamp to check; `null` means the current time | Required |
| start | Range start as a date string or timestamp; `null` means the current time | Required |
| end | Range end as a date string or timestamp; `null` means the current time | Required |
| includeStart | Whether to include the start | Optional, default is true |
| includeEnd | Whether to include the end | Optional, default is false |

#### Return Values

> Returns `true` if the time is within the range, otherwise `false`.

An equal start and end form an empty range by default. When both endpoints are included, only that instant is included. A start later than the end, or a date that cannot be parsed, throws `InvalidArgumentException`.

#### Example code

```php
TimeRange::contains('2026-10-27', '2026-10-01', '2026-11-01'); // true
TimeRange::contains(10, 0, 10);              // false, end excluded
TimeRange::contains(10, 0, 10, true, true);  // true, both endpoints included
TimeRange::contains(0, 0, 10, false, false); // false, both endpoints excluded
```
