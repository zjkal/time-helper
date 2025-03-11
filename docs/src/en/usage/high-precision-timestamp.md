---
order: 6
---

# 🎯 High Precision Timestamp

::: tip
It may be used to generate order numbers or to interface with other programming languages
:::

## getTimestamp()

### To obtain a timestamp in seconds, you can use the system function time() instead

#### Parameters

> noting

#### Return Values

> Timestamp in the current seconds

#### Example code

```php
/* Gets the timestamp of the current second */
TimeHelper::getTimestamp();
// 1698762509
```

## getMilliTimestamp()

### Get millisecond timestamps

#### Parameters

> noting

#### Return Values

> The timestamp of the current millisecond level

#### Example code

```php
/* Obtain the timestamp of the current millisecond */
TimeHelper::getMilliTimestamp();
// 1698762509279
```

## getMicroTimestamp()

### Get microsecond timestamps

#### Parameters

> noting

#### Return Values

> The current microsecond timestamp

#### Example code

```php
/* Get the current microsecond timestamp */
TimeHelper::getMicroTimestamp();
// 1698762509279645
```

## getNanoTimestamp()

### Get nanosecond timestamps

#### Parameters

> noting

#### Return Values

> The timestamp of the current nanosecond

#### Example code

```php
/* Obtain the current nanosecond timestamp */
TimeHelper::getNanoTimestamp();
// 1698762509279645820
```