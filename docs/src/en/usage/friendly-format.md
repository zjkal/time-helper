---
order: 2
---

# 🌈 Friendly Format

::: tip
It is generally used on social platforms, comments, forums, etc
:::

## toFriendly()

### Returns a friendly date format, such as N seconds ago

#### Parameters

| Parameter |               Introduction               |              Require              |
|:---------:|:----------------------------------------:|:---------------------------------:|
|   time    |   Any type of string time or timestamp   |             required              |
|   lang    | Language: zh for Chinese, en for English | Optional, the default value is zh |

#### Return Values

> Friendly date format

#### Example code

```php
/* Convert to a friendly date format */
TimeHelper::toFriendly('2022-3-2 10:15:33');
// 3天前

/* Convert to a friendly date format */
TimeHelper::toFriendly(1646186290, 'en');
// 6 hours ago
```