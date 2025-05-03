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

`TimeHelper` 是一个简单易用的`PHP时间日期助手类库`,可以快速实现常用的时间日期操作,比如获取指定时间的秒数,获取友好的时间格式,判断时间范围,计算两个时间相差值,返回 N 小时/天/星期/月/年前或者后的时间戳等等

## 🧩 特性

- 简单易用: 不依赖任何扩展,`开箱即用`
- 化繁为简: 所有方法都可以传入`任意类型的时间日期格式`或`时间戳`
- 快捷高效: 所有操作只需要`一个静态方法`即可完成
- 长期维护: 作者为自由职业者,保证项目的`长期稳定`和`持续更新`

## 🎁 示例代码

```php

//判断指定日期是否为国内的工作日
ChinaHoliday::isWorkday('2023-01-23');

//判断指定日期是否为国内的节假日
ChinaHoliday::isHoliday(1646360133);

//返回友好的时间格式,如:刚刚,N秒前,N分钟前,N小时前等等
TimeHelper::toFriendly('2022-3-2 10:15:33');
//返回友好的时间格式(英文)
TimeHelper::toFriendly(1646186290, 'en');

//判断日期是否为今天
TimeHelper::isToday('2020-4-10 23:01:11');

//判断日期是否为工作日(周一到周五)
TimeHelper::isWeekday('2023-03-08');

//计算两个日期相差天数
TimeHelper::diffDays('2022-4-10 23:01:11','Apr 11, 2020');

//返回15天前0点的时间戳
TimeHelper::beforeDay(15,null,true);

//返回15天后的时间戳
TimeHelper::afterDay(15);

//返回5个月后的时间戳
TimeHelper::afterMonth(5);

//将任意格式的时间转换为指定格式
TimeHelper::format('Y-m-d H:i:s','May 3, 2022');

//将任意时间类型的字符串转为时间戳
TimeHelper::toTimestamp('Apr 11, 2020');

//获取当前时间
TimeHelper::now();
```

## 🚀 安装

通过 Composer 导入类库

```bash
composer require zjkal/time-helper
```

## 🌈 使用文档

查看[使用文档](https://time.0x1.site/)

## 📃 更新日志

查看[更新日志](https://time.0x1.site/appendices/chang-log.html)

## 😎 开发者们

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
            <td align="center">
                <a href="https://github.com/wolf-leo">
                    <img src="https://avatars.githubusercontent.com/u/37436228?v=4" width="100;" alt="wolf-leo"/>
                    <br />
                    <sub><b>wolfcode</b></sub>
                </a>
            </td>
		</tr>
	<tbody>
</table>
<!-- readme: contributors -end -->

## ❤️ 由 JetBrains 赞助

非常感谢 Jetbrains 为我提供的 IDE 开源许可，让我完成此项目和其他开源项目上的开发工作。

[![](https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg)](https://www.jetbrains.com/)

## 🐧 扫以下二维码加入 QQ 频道

<a href="https://pd.qq.com/s/7h2hvcuxs">
  <img src="https://cdn.0x1.site/qrcode-qqpd.png"  alt="QQ频道-世界上最好的编程语言"/>
</a>

## 📖 开源协议

TimeHelper 遵循[MIT 开源协议](https://github.com/zjkal/time-helper/blob/main/LICENSE), 意味着您无需任何授权, 即可免费将 TimeHelper 应用到您的项目中
