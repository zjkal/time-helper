---
order: 1
prev: /getting-started/installation.md
---

# 🕘 获取需要的秒数

::: tip
一般用于设置缓存时间,设置结束时间等
:::

## secondEndToday()

### 获取到今天晚上零点之前的秒数

#### 参数

> 无

#### 返回值

> 从此刻到今天晚上0点的秒数

#### 示例代码

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

#### 返回值

> N分钟的秒数

#### 示例代码

```php
/* 获取5分钟的秒数 */
TimeHelper::secondMinute(5);
// 300
```

## secondHour()

### 获取N小时的秒数

#### 参数

|  参数   |     描述     |   是否必须    |
|:-----:|:----------:|:---------:|
| hours | 要返回多少小时的秒数 | 可选, 默认值为1 |

#### 返回值

> N小时的秒数

#### 示例代码

```php
/* 获取10小时的秒数 */
TimeHelper::secondHour(10);
// 36000
```

## secondDay()

### 获取N天的秒数

#### 参数

|  参数  |    描述     |   是否必须    |
|:----:|:---------:|:---------:|
| days | 要返回多少天的秒数 | 可选, 默认值为1 |

#### 返回值

> N天的秒数

#### 示例代码

```php
/* 获取1天的秒数 */
TimeHelper::secondDay();
// 86400
```

## secondWeek()

### 获取N周的秒数

#### 参数

|  参数   |    描述     |   是否必须    |
|:-----:|:---------:|:---------:|
| weeks | 要返回多少周的秒数 | 可选, 默认值为1 |

#### 返回值

> N周的秒数

#### 示例代码

```php
/* 获取1周的秒数 */
TimeHelper::secondWeek(1);
// 604800
```