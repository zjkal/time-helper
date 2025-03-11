---
order: 10
next: /en/appendices/special-note.md
---

# ⛱️ China Holiday

::: tip
Specifically for China's holidays, it currently includes the holiday data of '2020-2024', and will continue to be updated in the future. In order to facilitate maintenance and use, a new class 'ChinaHoliday' was created
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