<br/>
<p align="center">
    <img src="https://cdn.0x1.site/logo-time-helper.svg" alt="TimeHelper" width="180" />
    <br/>
    <br/>
    <a href="https://github.com/zjkal/time-helper/blob/main/README.md" target="_blank">中文</a> | English
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

`TimeHelper` is a simple and easy-to-use `PHP date and time helper library` that can quickly implement common date and time operations, such as getting seconds of a specified time, getting friendly time formats, judging time ranges, calculating time differences, returning timestamps N hours/days/weeks/months/years before or after, etc.

## 🧩 Features

- Simple and easy to use: No dependencies, `ready to use`
- Simplify complexity: All methods can accept `any type of date and time format` or `timestamp`
- Fast and efficient: All operations can be completed with just `one static method`
- Long-term maintenance: The author is a freelancer, ensuring `long-term stability` and `continuous updates`

## 🎁 Examples

```php
//Check if the specified date is a Chinese workday
ChinaHoliday::isWorkday('2023-01-23');

//Check if the specified date is a Chinese holiday
ChinaHoliday::isHoliday(1646360133);

//Return friendly time format, such as: just now, N seconds ago, N minutes ago, N hours ago, etc.
TimeHelper::toFriendly('2022-3-2 10:15:33');
//Return friendly time format (English)
TimeHelper::toFriendly(1646186290, 'en');

//Check if the date is today
TimeHelper::isToday('2020-4-10 23:01:11');

//Check if the date is a weekday (Monday to Friday)
TimeHelper::isWeekday('2023-03-08');

//Calculate the number of days between two dates
TimeHelper::diffDays('2022-4-10 23:01:11','Apr 11, 2020');

//Return timestamp of 15 days ago at 0:00
TimeHelper::beforeDay(15,null,true);

//Return timestamp of 15 days later
TimeHelper::afterDay(15);

//Return timestamp of 5 months later
TimeHelper::afterMonth(5);

//Convert any format time to specified format
TimeHelper::format('Y-m-d H:i:s','May 3, 2022');

//Convert any time type string to timestamp
TimeHelper::toTimestamp('Apr 11, 2020');

//Get current time
TimeHelper::now();
```

## 🚀 Installation

Import the library via Composer

```bash
composer require zjkal/time-helper
```

## 🌈 Documentation

View [Documentation](https://time.0x1.site/en/)

## 📃 Changelog

View [Changelog](https://time.0x1.site/en/appendices/chang-log.html)

## 😎 Developers

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
                    <sub><b>Li Yunlong</b></sub>
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

## ❤️ Sponsor

Many thanks to Jetbrains for providing me with an IDE open source license, allowing me to complete this project and other open source projects.

[![](https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg)](https://www.jetbrains.com/)

## 📖 License

TimeHelper follows the [MIT License](https://github.com/zjkal/time-helper/blob/main/LICENSE), which means you can freely use TimeHelper in your projects without any authorization.
