---
order: 13
---

# ✅ Strict Date Parsing

::: tip
`toTimestamp()` keeps its existing flexible parsing for natural language, relative times, and different date formats. Use `parseExact()` and `isValidDate()` when validating form input or requiring a specific format.
:::

## parseExact()

### Parse a date using an exact format

#### Parameters

| Parameter | Introduction | Require |
| --- | --- | --- |
| datetime | Date string to parse | Required |
| format | PHP date format, such as `Y-m-d`, `d/m/Y`, or `Y-m-d H:i:s` | Optional, default is Y-m-d H:i:s |
| timezone | Time zone used for parsing | Optional, defaults to the current PHP default time zone |

#### Return Values

> Returns a Unix timestamp in seconds. Invalid dates, formats, or time zones throw `InvalidArgumentException`.

#### Example code

```php
use zjkal\TimeHelper;

/* Parse a valid leap day */
TimeHelper::parseExact('2024-02-29', 'Y-m-d');

/* Resolve ambiguous date formats explicitly */
TimeHelper::parseExact('03/04/2026', 'd/m/Y'); // April 3, 2026
TimeHelper::parseExact('03/04/2026', 'm/d/Y'); // March 4, 2026

/* Use the default format */
TimeHelper::parseExact('2026-10-27 12:30:00');

/* Parse the Unix epoch in UTC */
TimeHelper::parseExact('1970-01-01 00:00:00', 'Y-m-d H:i:s', 'UTC'); // 0
```

### Parsing rules

- Input must exactly match the output of the specified format. For example, `Y-m-d` does not accept `2026-2-01`.
- Invalid dates, overflowing time fields, extra characters, null bytes, and empty formats are rejected. February 31 is not automatically adjusted to March.
- Unspecified fields start from `1970-01-01 00:00:00`. A date without a time uses midnight; a year and month without a day use the first day of that month.
- An explicit time zone does not change the global default. If the input itself specifies a time zone offset, that offset takes precedence.
- Use round-trip output formats. Do not use parsing-only controls such as `!`, `|`, `+`, or `*`.
- Nonexistent local times during a daylight saving transition are rejected. For local times that occur twice, include an explicit time zone offset in the input.

## isValidDate()

### Check if a date matches the specified format

#### Parameters

| Parameter | Introduction | Require |
| --- | --- | --- |
| datetime | Date string to validate | Required |
| format | PHP date format | Optional, default is Y-m-d |
| timezone | Time zone used for validation | Optional, defaults to the current PHP default time zone |

#### Return Values

> Returns `true` if the date matches the format, otherwise `false`. Invalid dates, formats, or time zones return `false`.

The same parsing rules as `parseExact()` apply.

#### Example code

```php
TimeHelper::isValidDate('2024-02-29'); // true
TimeHelper::isValidDate('2026-02-29'); // false, not a leap year
TimeHelper::isValidDate('2026-02-31'); // false, no automatic date adjustment
TimeHelper::isValidDate('2026-01-01 24:00:00', 'Y-m-d H:i:s'); // false
```

::: info
The default formats differ: `parseExact()` uses `Y-m-d H:i:s`, while `isValidDate()` uses `Y-m-d`.
:::
