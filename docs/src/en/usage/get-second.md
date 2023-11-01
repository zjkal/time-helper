---
order: 1
prev: /en/getting-started/installation.md
---

# 🍇 Get Second

::: tip
This is usually used for setting cache expiration time, setting end time, and so on.
:::

## secondEndToday()

### 获取到今天晚上零点之前的秒数

#### Parameters

> 无

#### Return Values

> 从此刻到今天晚上0点的秒数

#### Example code

```php
/* 获取到今天晚上零点之前的秒数 */
TimeHelper::secondEndToday(); 
// 32811
```

## secondMinute()

### 获取N分钟的秒数

* 参数

|   参数    |     描述     |   是否必须    |
|:-------:|:----------:|:---------:|
| minutes | 要返回多少分钟的秒数 | 可选, 默认值为1 |

#### Return Values

> N分钟的秒数

#### Example code

```php
/* 获取5分钟的秒数 */
TimeHelper::secondMinute(5);
// 300
```

## secondHour()

### 获取N小时的秒数

#### Parameters

|  参数   |     描述     |   是否必须    |
|:-----:|:----------:|:---------:|
| hours | 要返回多少小时的秒数 | 可选, 默认值为1 |

#### Return Values

> N小时的秒数

#### Example code

```php
/* 获取10小时的秒数 */
TimeHelper::secondHour(10);
// 36000
```

## secondDay()

### 获取N天的秒数

#### Parameters

|  参数  |    描述     |   是否必须    |
|:----:|:---------:|:---------:|
| days | 要返回多少天的秒数 | 可选, 默认值为1 |

#### Return Values

> N天的秒数

#### Example code

```php
/* 获取1天的秒数 */
TimeHelper::secondDay();
// 86400
```

## secondWeek()

### 获取N周的秒数

#### Parameters

|  参数   |    描述     |   是否必须    |
|:-----:|:---------:|:---------:|
| weeks | 要返回多少周的秒数 | 可选, 默认值为1 |

#### Return Values

> N周的秒数

#### Example code

```php
/* 获取1周的秒数 */
TimeHelper::secondWeek(1);
// 604800
```