---
order: 9
---

# ✈️ 时区相关

::: tip
主要提供获取不同时区的时间和转换不同时区的时间的方法
:::

## timezoneFormat()

### 时区转换

#### 参数

|      参数      |          描述           |          是否必须          |
|:------------:|:---------------------:|:----------------------:|
|  toTimezone  |         目标时区          |           必须           |
| fromTimezone |          原时区          | 可选, 默认为当前PHP运行环境所设置的时区 |
|   datetime   |    任意格式的时间字符串或时间戳     |      可选, 默认为当前时间       |
|    format    | 日期格式,用法与系统函数date()的一致 |   可选, 默认为Y-m-d H:i:s   |

#### 返回值

> 返回值为目标时区的时间字符串

#### 示例代码

```php
/* 将中国时区的指定时间转换为伦敦时间 */
TimeHelper::timezoneFormat('Europe/London', 'Asia/Shanghai', '2023-8-5 19:16:43', 'H:i:s');
// 11:16:43

/* 获取当前洛杉矶的时间 */
TimeHelper::timezoneFormat('America/Los_Angeles');
// 04:16:43

/* 将时间戳转换为伦敦时间 */
TimeHelper::timezoneFormat('Europe/London', null, 1692097543);
// 11:19:03
```

::: info
支持时区列表请参考[PHP支持的时区列表](https://www.php.net/manual/zh/timezones.php)
:::