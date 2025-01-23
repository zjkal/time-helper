<br/>
<p align="center">
    <img src="https://cdn.0x1.site/logo-time-helper.svg" alt="TimeHelper" width="180" />
    <br/>
    <br/>
    中文 | <a href="https://github.com/zjkal/time-helper/blob/main/README_EN.md" target="_blank">English</a>
</p>
<p align="center">
    <a href="https://github.com/zjkal/time-helper/blob/main/LICENSE" target="_blank">
        <img src="https://poser.pugx.org/zjkal/time-helper/license" alt="License">
    </a>
    <a href="https://github.com/zjkal/time-helper" target="_blank">
        <img src="https://poser.pugx.org/zjkal/time-helper/require/php" alt="PHP Version Require">
    </a>
    <a href="https://github.com/zjkal/time-helper" target="_blank">
        <img src="https://poser.pugx.org/zjkal/time-helper/v" alt="Latest Stable Version">
    </a>
    <a href="https://packagist.org/packages/zjkal/time-helper" target="_blank">
        <img src="https://poser.pugx.org/zjkal/time-helper/downloads" alt="Total Downloads">
    </a>
    <a href="https://github.com/zjkal/time-helper" target="_blank">
        <img src="https://img.shields.io/github/actions/workflow/status/zjkal/time-helper/.github/workflows/composer.yml?branch=main" alt="GitHub Workflow Status">
    </a>
</p>

`TimeHelper` 是一个简单易用的`PHP时间日期助手类库`,可以快速实现常用的时间日期操作,比如获取指定时间的秒数,获取友好的时间格式,判断时间范围,计算两个时间相差值,返回N小时/天/星期/月/年前或者后的时间戳等等

## 🧩特性

- 简单易用: 不依赖任何扩展,`开箱即用`
- 化繁为简: 所有方法都可以传入`任意类型的时间日期格式`或`时间戳`
- 快捷高效: 所有操作只需要`一个静态方法`即可完成
- 长期维护: 作者为自由职业者,保证项目的`长期稳定`和`持续更新`

## 🚀安装

通过Composer导入类库

```bash
composer require zjkal/time-helper
```

## 🌈使用文档

查看[使用文档](https://time.0x1.site/)或阅读以下简要说明

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

//判断日期是否为昨天
TimeHelper::isYesterday('2020-4-10 23:01:11');

//判断日期是否为明天
TimeHelper::isTomorrow('2020-4-10 23:01:11');

//判断日期是否为本周
TimeHelper::isThisWeek('2020-5-1');

//判断日期是否为本月
TimeHelper::isThisMonth(1586451741);

//判断日期是否为今年
TimeHelper::isThisYear('Apr 11, 2020');

//判断指定时间是星期几,不传默认为当前时间. 返回值为1-7,1为星期一,7为星期日
TimeHelper::getWeekDay('2022-11-27');

//判断指定时间是否为平常日(周一到周五)
TimeHelper::isWeekday('2023-03-08');

//判断指定时间是否为周末(周六和周日)
TimeHelper::isWeekend(1586451741);


```

### 4. 计算两个时间相差值

*如果只传入一个参数,则与当前时间比较*

```php
//计算两个日期相差的秒数
TimeHelper::diffSeconds('2022-4-10 23:01:11',1586451741)

//计算两个日期相差的分钟数
TimeHelper::diffMinutes('Apr 11, 2020 11:51:21','Apr 11, 2020 11:31:21')

//计算两个日期相差的小时数
TimeHelper::diffHours(1586451741,1586491741)

//计算两个日期相差天数
TimeHelper::diffDays('2022-4-10 23:01:11','Apr 11, 2020');

//计算两个日期相差周数
TimeHelper::diffWeeks('2022-4-10 23:01:11');

//计算两个日期相差月数
TimeHelper::diffMonths(1586451741,'Apr 11, 2020');

//计算两个日期相差年数
TimeHelper::diffYears('2022-4-10 23:01:11','Apr 11, 2020');

//比较两个时间的大小,如果第二个参数为空,则与当前时间比较
//第一个时间大于第二个时间则返回1,小于则返回-1,相等时则返回0
TimeHelper::compare('2022-4-10 23:01:11','Apr 11, 2020');
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

*生成订单号或者与其他编程语言对接时可能会用到*

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

//根据日期字符串, 修改指定时间, 并返回修改后的时间戳
TimeHelper::modifyTimestamp('+1 day', '2023-9-1 12:00:00');

//获取当前时间(默认格式为Y-m-d H:i:s)
TimeHelper::now();
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

### 9.时区相关 🆕

*主要提供获取不同时区的时间和转换不同时区的时间的方法*

```php
//将任意格式的时间或时间戳转换为指定时区的时间
//第一个参数为要转换的目标时区
//第二个参数为原时区,不传则默认为当前时区
//第三个参数为任意格式的时间或时间戳,不传则默认为当前时间
//第四个参数为时间格式,与系统函数date()的格式保持一致,不传则默认为Y-m-d H:i:s
TimeHelper::timezoneFormat('Europe/London', 'Asia/Shanghai', '2023-8-15 19:16:43', 'H:i:s');
//获得当前洛杉矶的时间
TimeHelper::timezoneFormat('America/Los_Angeles');
//将洛杉矶时间转换为伦敦时间
TimeHelper::timezoneFormat('Europe/London', 'America/Los_Angeles', 'Aug 15, 2023 10:15:33', 'H:i:s');
//将时间戳转换为伦敦时间
TimeHelper::timezoneFormat('Europe/London', null, 1692097543);
```

所支持的时区列表请参考[时区列表](https://www.php.net/manual/zh/timezones.php)

### 10.国内节假日/工作日相关 🔥

*专门针对国内的节假日进行判断,目前包含2020年-2024年的节假日数据,后续也会持续更新.*
*为了便于维护,另起了一个类ChinaHoliday,同样可以传入任意类型的时间格式或时间戳*

```php
use zjkal\ChinaHoliday;

//判断指定日期是否为国内的工作日
ChinaHoliday::isWorkday('2023-01-23');

//判断指定日期是否为国内的节假日
ChinaHoliday::isHoliday(1646360133);
```

> **特别说明**: 所有时间的方法都可以传入任意格式的时间或者时间戳, 但是有一点请注意 m/d/y 或 d-m-y 格式的日期，如果分隔符是斜线（/），则使用美洲的 m/d/y 格式。如果分隔符是横杠（-）或者点（.），则使用欧洲的 d-m-y 格式。为了避免潜在的错误，您应该尽可能使用 YYYY-MM-DD 格式或其他格式.

## 📃更新日志

> v1.1.11 2024年12月17日
> * 修复了由于PHP运行环境的时区设置差异, 可能引起的节假日数据计算错误的BUG

> v1.1.10 2024年11月16日
> * 增加了2025年的中国节假日数据

> v1.1.9 2024年7月2日
> * 增加了获取当前时间的方法now()

> v1.1.8 2024年6月6日
> * 修复了获取友好时间的错误

> v1.1.7 2024年6月1日
> * 增加了计算两个日期相差秒数的方法diffSeconds()
> * 增加了计算两个日期相差分钟数的方法diffMinutes()
> * 增加了计算两个日期相差小时数的方法diffHours()
> * 增加了根据日期字符串, 修改指定时间的方法modifyTimestamp()
> * 精简代码

> v1.1.6 2024年4月25日
> * 增加了判断是否为昨天的方法isYesterday()
> * 增加了判断是否为明天的方法isTomorrow()

<details><summary>点击查看更多</summary>

> v1.1.5 2024年2月5日
> * 精简和优化代码

> v1.1.4 2023年10月25日
> * 增加了2024年国内节假日的数据

> v1.1.3 2023年10月19日
> * 提升了toTimestamp()方法的兼容性,可以转换一些特殊格式的时间了

> v1.1.2 2023年9月16日
> * 增加了比较两个时间早晚的方法compare()

> v1.1.1 2023年8月15日
> * 增加了时区相关的方法,可以将任意格式的时间或时间戳转换为指定时区的时间

> v1.1.0 2023年3月19日
> * 增加了ChinaHoliday类,专门用于维护国内节假日相关的方法
> * 增加了判断是否为国内工作日的方法isWorkday()
> * 增加了判断是否为国内节假日的方法isHoliday()

> v1.0.10 2023年3月13日
> * 增加判断指定日期是否为平常日的方法isWeekday()
> * 增加判断指定日期是否为周末的方法isWeekend()

> v1.0.9 2023年3月8日
> * 修改toTimestamp()方法不传参数或传入空参数时,不再抛出异常,而是返回当前时间戳
> * 增加了判断是否是闰年的方法isLeapYear()
> * 增加了获取该日期当年的天数的方法daysInYear()
> * 增加了获取该日期当月的天数的方法daysInMonth()

> v1.0.8 2023年2月21日
> * 增加了判断指定时间是星期几的方法getWeekDay()

> v1.0.7 2023年2月8日
> * 增加了将任意格式的时间转换为指定格式的方法format()
> * 删除废弃方法friendly_date(),请使用toFriendly()代替

> v1.0.6 2023年1月27日
> * 修复BUG

> v1.0.5 2023年1月16日
> * 优化了友好的时间显示算法

> v1.0.4 2023年1月8日
> * 修复了变量类型的BUG

> v1.0.3 2023年1月7日
> * 增加了判断一个字符串是否为时间戳的方法
> * 增加了将任意时间类型的字符串转为时间戳的方法
> * 增加了获取秒级/毫秒级/微秒级/纳秒级的时间戳的方法

> v1.0.2 2023年1月5日
> * 增加了返回N分钟/小时的秒数的方法

> v1.0.1 2023年1月4日
> * 返回N分钟/小时/天/月/年前或后的时间戳所有方法,增加了是否取整的参数.

> v1.0.0 2022年8月25日
> * 从tp-helper的时间类中独立出来
</details>

## 😎开发者们

<!-- readme: contributors -start -->
<table>
	<tbody>
		<tr>
            <td align="center">
                <a href="https://github.com/zjkal">
                    <img src="https://avatars.githubusercontent.com/u/15082976?v=4" width="100;" alt="zjkal"/>
                    <br />
                    <sub><b>zjkal</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/miss-sugar">
                    <img src="https://avatars.githubusercontent.com/u/121731951?v=4" width="100;" alt="miss-sugar"/>
                    <br />
                    <sub><b>miss-sugar</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/iuyes">
                    <img src="https://avatars.githubusercontent.com/u/2977219?v=4" width="100;" alt="iuyes"/>
                    <br />
                    <sub><b>李云龙</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/ageChen">
                    <img src="https://avatars.githubusercontent.com/u/71121939?v=4" width="100;" alt="ageChen"/>
                    <br />
                    <sub><b>ageChen</b></sub>
                </a>
            </td>
            <td align="center">
                <a href="https://github.com/dkoin">
                    <img src="https://avatars.githubusercontent.com/u/5207234?v=4" width="100;" alt="dkoin"/>
                    <br />
                    <sub><b>dkoin</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: contributors -end -->

## ❤️由 JetBrains 赞助

非常感谢 Jetbrains 为我提供的 IDE 开源许可，让我完成此项目和其他开源项目上的开发工作。

[![](https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg)](https://www.jetbrains.com/)

## 🐧扫以下二维码加入QQ频道

<a href="https://pd.qq.com/s/7h2hvcuxs">
  <img src="https://cdn.0x1.site/qrcode-qqpd.png"  alt="QQ频道-世界上最好的编程语言"/>
</a>

## 📖开源协议

TimeHelper遵循[MIT开源协议](https://github.com/zjkal/time-helper/blob/main/LICENSE), 意味着您无需任何授权, 即可免费将TimeHelper应用到您的项目中
