---
order: 2
---

# 🌈 Friendly Format

::: tip
It is generally used on social platforms, comments, forums, etc
:::

## toFriendly()

### Returns a friendly date format, such as N seconds ago or in N seconds

#### Parameters

| Parameter |               Introduction               |              Require              |
|:---------:|:----------------------------------------:|:---------------------------------:|
|   time    |   Any type of string time or timestamp   |             required              |
|   lang    | Language: zh for Chinese, en for English | Optional, the default value is zh |

#### Return Values

> Friendly date format

Past dates return text such as `2小时前` or `2 hours ago`. Future dates return `2小时后` or `in 2 hours`. A date in the same second returns `刚刚` or `just now`, depending on the selected language.

#### Example code

```php
/* Convert to a friendly date format */
TimeHelper::toFriendly('2022-3-2 10:15:33');
// 3天前

/* Convert to a friendly date format */
TimeHelper::toFriendly(1646186290, 'en');
// 6 hours ago

/* Convert a future time to a friendly date format */
TimeHelper::toFriendly(time() + 7500, 'en');
// in 2 hours

/* Convert a future time to a friendly date format (Chinese) */
TimeHelper::toFriendly(time() + 7500);
// 2小时后
```
