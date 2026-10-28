---
order: 13
---

# 严格日期解析与校验

现有 `toTimestamp()` 保持宽松解析，适合自然语言、相对时间和多种日期输入。
表单校验或格式必须确定时，使用新增的 `parseExact()` 和 `isValidDate()`。

## parseExact()

```php
use zjkal\TimeHelper;

TimeHelper::parseExact('2024-02-29', 'Y-m-d');
TimeHelper::parseExact('03/04/2026', 'd/m/Y'); // 2026 年 4 月 3 日
TimeHelper::parseExact('03/04/2026', 'm/d/Y'); // 2026 年 3 月 4 日
TimeHelper::parseExact('2026-10-27 12:30:00'); // 默认格式 Y-m-d H:i:s
TimeHelper::parseExact('1970-01-01 00:00:00', 'Y-m-d H:i:s', 'UTC'); // 0
```

签名：`parseExact(string $datetime, string $format = 'Y-m-d H:i:s', ?string $timezone = null): int`。

- 返回秒级时间戳，解析失败抛出 `InvalidArgumentException`。
- 格式使用 PHP 日期格式字符，例如 `Y-m-d`、`d/m/Y`、`Y-m-d H:i:s`、`Y年m月d日`。
- 输入必须与该格式重新输出的结果完全一致，`Y-m-d` 不接受 `2026-2-01`。
- 拒绝不存在的日期、时间自动进位、额外字符、空字节和空格式。
- 未指定的日期时间字段以 `1970-01-01 00:00:00` 为基准；仅输入日期时为零点，仅输入年月时为当月 1 日。
- 不传时区时使用 PHP 默认时区；显式时区不会修改全局设置。输入自身含时区偏移时，遵循该偏移。
- 格式应为可往返的输出格式，不使用 `!`、`|`、`+`、`*` 等仅供解析的控制符。
- 夏令时跳转中不存在的当地时间会被拒绝；重复出现的当地时间请在输入中使用明确的时区偏移。

## isValidDate()

```php
TimeHelper::isValidDate('2024-02-29'); // true
TimeHelper::isValidDate('2026-02-29'); // false，非闰年
TimeHelper::isValidDate('2026-02-31'); // false，不自动调整到三月
TimeHelper::isValidDate('2026-01-01 24:00:00', 'Y-m-d H:i:s'); // false
```

签名：`isValidDate(string $datetime, string $format = 'Y-m-d', ?string $timezone = null): bool`。
规则与 `parseExact()` 相同；日期、格式或时区无效时返回 `false`。
注意两个新方法的默认格式不同：解析默认包含时分秒，校验默认只检查日期。
