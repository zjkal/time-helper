[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/zjkal/time-helper/.github/workflows/php.yml?branch=main)](https://github.com/zjkal/time-helper/actions)
[![PHP Version Require](http://poser.pugx.org/zjkal/time-helper/require/php)](https://packagist.org/packages/zjkal/time-helper)
[![Latest Stable Version](http://poser.pugx.org/zjkal/time-helper/v)](https://packagist.org/packages/zjkal/time-helper)
[![Latest Unstable Version](http://poser.pugx.org/zjkal/time-helper/v/unstable)](https://packagist.org/packages/zjkal/time-helper)
[![License](http://poser.pugx.org/zjkal/time-helper/license)](https://packagist.org/packages/zjkal/time-helper)
[![Total Downloads](http://poser.pugx.org/zjkal/time-helper/downloads)](https://packagist.org/packages/zjkal/time-helper)

# TimeHelper

### ⭐ 请不要吝啬你的小星星 ⭐

* 这是一个最方便的PHP时间助手类
* **所有方法都可以传入任意类型的时间日期格式或者时间戳**
* 作者将**长期维护**并不断完善使用率比较高的助手函数
* 使用过程中发现BUG或者任何建议，请提交Issues 或[点击此处](https://jq.qq.com/?_wv=1027&k=pI1Ky6fD)加入QQ群

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

//返回N分钟的秒数(默认为1分钟)
TimeHelper::secondMinute(5);

//返回N小时的秒数(默认为1小时)
TimeHelper::secondHour(2);

//返回N天的秒数(默认为1天)
TimeHelper::secondDay(10);

//返回N周的秒数(默认为1周)
TimeHelper::secondWeek(4);
```

### 2. 返回友好的日期格式,比如N秒前,N分钟前,N小时前等等

*一般用于社交类平台,评论,论坛等*

```php
//一共2个参数:
//第1个参数传入字符串类型的时间或者时间戳都可以，
//第2个参数为语言(默认为中文,需要英文请传入en)
TimeHelper::toFriendly('2022-3-2 10:15:33');
//英文
TimeHelper::toFriendly(1646186290, 'en');
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

//判断指定时间是星期几,不传默认为当前时间. 返回值为1-7,1为星期一,7为星期日
TimeHelper::getWeek('2022-11-27');

//判断指定时间是否为平常日(周一到周五)
TimeHelper::isWeekday('2023-03-08');

//判断指定时间是否为周末(周六和周日)
TimeHelper::isWeekend(1586451741);


```

### 4. 计算两个时间相差值

*如果只传入一个参数,则与当前时间比较*

```php
//计算两个日期相差天数
TimeHelper::diffDays('2022-4-10 23:01:11','Apr 11, 2020');

//计算两个日期相差周数
TimeHelper::diffWeeks('2022-4-10 23:01:11');

//计算两个日期相差月数
TimeHelper::diffMonths(1586451741,'Apr 11, 2020');

//计算两个日期相差年数
TimeHelper::diffYears('2022-4-10 23:01:11','Apr 11, 2020');
```

### 5. 返回N小时/天/星期/月/年前或者后的时间戳

*只传入1个参数以当前时间计算,传入第2个参数则以该时间计算,传入第3个参数为true,则时间取整*

```php
//返回指定时间3分钟前0秒的时间戳
TimeHelper::beforeMinute(3,'2022-3-2 10:15:33',true);

//返回当前时间5分钟后的时间戳
TimeHelper::afterMinute(5);

//返回指定时间1小时前的时间戳(请注意此用法为php8之后的用法)
TimeHelper::beforeHour(datetime:'Apr 11, 2020');

//返回2小时后的时间戳
TimeHelper::afterHour(2);

//返回15天前0点的时间戳
TimeHelper::beforeDay(15,null,true);

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

### 6.获取当前秒级/毫秒级/微秒级/纳秒级的时间戳

*,生成订单号或者与其他编程语言对接时可能会用到*

```php
//获取秒级的时间戳,可用time()代替
TimeHelper::getTimestamp();

//获取毫秒级的时间戳
TimeHelper::getMilliTimestamp();

//获取微秒级的时间戳
TimeHelper::getMicroTimestamp();

//获取纳秒级的时间戳
TimeHelper::getNanoTimestamp();
```

### 7.日期转换

*用于爬虫爬取网页或第三方程序对接时,时间格式不统一的转换*

```php
//将任意格式的时间转换为指定格式
//第一个参数是时间格式,与系统函数date()的格式保持一致
//第二个参数则是任意格式的时间日期,不传则默认为当前时间,可用系统函数date()代替
TimeHelper::format('Y-m-d H:i:s','May 3, 2022');

//判断一个字符串是否为时间戳,是返回true,否返回false
TimeHelper::isTimestamp(1646360133);

//将任意时间类型的字符串转为时间戳
TimeHelper::toTimestamp('Apr 11, 2020');
```

### 8.平闰年相关

*比原生方法使用起来更方便*

```php
//判断是否为闰年,是返回true,否返回false
TimeHelper::isLeapYear('2020-3-2 10:15:33');

//判断该日期的当年有多少天
TimeHelper::daysInYear(1646360133);

//判断该日期的当月有多少天
TimeHelper::daysInMonth('Apr 11, 2020');
```

### 9.国内节假日/工作日相关  🆕
*专门针对国内的节假日进行判断,目前包含2020年-2023年的节假日数据,后续也会持续更新.*
*为了便于维护,另起了一个类ChinaHoliday,同样可以传入任意类型的时间格式或时间戳*
```php
use zjkal\ChinaHoliday;

//判断指定日期是否为国内的工作日
ChinaHoliday::isWorkday('2023-01-23');

//判断指定日期是否为国内的节假日
ChinaHoliday::isHoliday(1646360133);
```

> **特别说明**: 所有时间的方法都可以传入任意格式的时间或者时间戳, 但是有一点请注意 m/d/y 或 d-m-y 格式的日期，如果分隔符是斜线（/），则使用美洲的 m/d/y 格式。如果分隔符是横杠（-）或者点（.），则使用欧洲的 d-m-y 格式。为了避免潜在的错误，您应该尽可能使用 YYYY-MM-DD 格式或其他格式.

# 更新日志

[UPDATE.md](UPDATE.md)

# 开源协议

[MIT](LICENSE)