[![Latest Stable Version](http://poser.pugx.org/zjkal/time-helper/v)](https://packagist.org/packages/zjkal/time-helper)
[![Latest Unstable Version](http://poser.pugx.org/zjkal/time-helper/v/unstable)](https://packagist.org/packages/zjkal/time-helper)
[![Total Downloads](http://poser.pugx.org/zjkal/time-helper/downloads)](https://packagist.org/packages/zjkal/time-helper)
[![License](http://poser.pugx.org/zjkal/time-helper/license)](https://packagist.org/packages/zjkal/time-helper)
[![PHP Version Require](http://poser.pugx.org/zjkal/time-helper/require/php)](https://packagist.org/packages/zjkal/time-helper)
# TimeHelper

* 这是一个最方便的PHP时间助手类
* **所有方法都可以传入任意类型的时间日期格式或者时间戳**。
* 作者将长期维护并不断完善使用率比较高的助手函数。
* 使用过程中发现BUG或者希望添加其他助手函数，请直接提交Issues或者直接与我联系。
### ⭐ ⭐请不要吝啬你的小星星 ⭐ ⭐
# 通过Composer导入类库

```bash
composer require zjkal/time-helper
```

# 使用方法

首先在类中引用TimeHelper助手类

```php
use zjkal\TimeHelper;
```

### 1. 获取需要的秒数

*一般用于设置缓存时间,设置结束时间等*

```php
//返回到今天晚上零点之前的秒数
TimeHelper::secondEndToday();

//返回N天的秒数(默认为1天)
TimeHelper::secondDay(10);

//返回N周的秒数(默认为1周)
TimeHelper::secondWeek(4);
```

### 2. 返回友好的日期格式,比如刚刚、N秒前、昨天、N天前等等

*一般用于社交类平台,评论,论坛等*

```php
//一共4个参数:
//第1个参数传入字符串类型的时间或者时间戳都可以，
//第2个参数为多少天以上直接显示为日期格式（默认365天）
//第3个参数为显示日期的格式，与PHP自带的date函数的格式化规则一致(默认为Y-m-d)
//第4个参数为语言(默认为zh,即中文)

TimeHelper::friendly_date('2022-3-2 10:15:33');
TimeHelper::friendly_date(1646186290, 365, 'Y-m-d');

//也可以显示英文
TimeHelper::friendly_date('2022-3-2 10:15:33',lang:'en');//php>8.0的用法
TimeHelper::friendly_date('2022-3-2 10:15:33',365,'Y-m-d','en');//php<8.0需要写全参数
```

### 3. 判断时间范围

```php
//判断日期是否为今天
TimeHelper::isToday('2020-4-10 23:01:11');

//判断日期是否为本周
TimeHelper::isThisWeek('2020-5-1');

//判断日期是否为本月
TimeHelper::isThisMonth(1586451741);

//判断日期是否为今年
TimeHelper::isThisYear('Apr 11, 2020');
```

### 4. 计算两个时间相差值

*如果只传入一个参数,则与当前时间比较*

```php
//计算两个日期相差天数
TimeHelper::diffDays('2022-4-10 23:01:11','Apr 11, 2020');

//计算两个日期相差周数
TimeHelper::diffWeeks('2022-4-10 23:01:11');

//计算两个日期相差月数
TimeHelper::diffMonth(1586451741,'Apr 11, 2020');

//计算两个日期相差年数
TimeHelper::diffYears('2022-4-10 23:01:11','Apr 11, 2020');
```

### 5. 返回N小时/天/星期/月/年前或者后的时间戳

*只传入一个参数以当前时间计算,传入第二个参数则以该时间计算*

```php
//返回指定时间3分钟前的时间戳
TimeHelper::beforeMinute(3,'2022-3-2 10:15:33');

//返回当前时间5分钟后的时间戳
TimeHelper::afterMinute(5);

//返回指定时间1小时前的时间戳(请注意此用法为php8之后的用法)
TimeHelper::beforeHour(datetime:'Apr 11, 2020');

//返回2小时后的时间戳
TimeHelper::afterHour(2);

//返回指定时间15天前的时间戳
TimeHelper::beforeDay(15,'2022-7-11');

//返回15天后的时间戳
TimeHelper::afterDay(15);

//返回指定时间2星期前的时间戳
TimeHelper::beforeWeek(2,'2022-4-10 23:01:11');

//返回指定时间10星期后的时间戳
TimeHelper::afterWeek(10,1646360133);

//返回指定时间1个月前的时间戳(请注意此用法为php8之后的用法)
TimeHelper::beforeMonth(datetime:1646360133);

//返回5个月后的时间戳
TimeHelper::afterMonth(5);

//返回指定时间3年前的时间戳
TimeHelper::beforeYear(3,'2022-7-11');

//返回2年后的时间戳
TimeHelper::afterYear(2);
```

特别说明: 所有时间的方法都可以传入任意格式的时间或者时间戳, 但是有一点请注意 m/d/y 或 d-m-y 格式的日期，如果分隔符是斜线（/），则使用美洲的 m/d/y 格式。如果分隔符是横杠（-）或者点（.），则使用欧洲的 d-m-y 格式。为了避免潜在的错误，您应该尽可能使用 YYYY-MM-DD 格式或其他格式.

# 开源协议

### MIT