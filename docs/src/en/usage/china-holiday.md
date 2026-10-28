---
order: 10
next: /en/usage/get-part-of-time.md
---

# ⛱️ China Holiday

::: tip
Specifically for China's holidays, it currently includes holiday data for 2020–2026. Years without data fall back to Monday–Friday workdays and weekends off; this does not account for official holiday adjustments. A separate class, `ChinaHoliday`, provides these checks.
:::

## isWorkday()

### Determine whether the date is a working day in China

#### Parameters

| Parameter |             Introduction             |                Require                 |
|:---------:|:------------------------------------:|:--------------------------------------:|
| datetime  | Any type of string time or timestamp | Optional, defaults to the current time |

#### Return Values

> 'true' if it's a working day, 'false' if it's otherwise

#### Example code

```php
/* Determine whether the following dates are working days in China */
ChinaHoliday::isWorkday('2023-01-29');
// true

/* Determine whether today is a Chinese working day */
ChinaHoliday::isWorkday();
// true
```

## isHoliday()

### Determine whether the date is a Chinese holiday

#### Parameters

| Parameter |             Introduction             |                Require                 |
|:---------:|:------------------------------------:|:--------------------------------------:|
| datetime  | Any type of string time or timestamp | Optional, defaults to the current time |

#### Return Values

> 'true' if it's a holiday, 'false' if it's otherwise

#### Example code

```php
/* Determine whether the following dates are Chinese holidays */
ChinaHoliday::isHoliday('2023-01-28');
// false
```
