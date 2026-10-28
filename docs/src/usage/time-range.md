---
order: 12
---

# 时间范围与周期边界

`TimeRange` 按 PHP 当前默认时区计算自然周期，返回秒级时间戳数组：

```php
use zjkal\TimeRange;

$range = TimeRange::month('2026-10-27');
// ['start' => 2026-10-01 00:00:00 的时间戳,
//  'end'   => 2026-11-01 00:00:00 的时间戳]
```

所有范围均为 **包含 start、不包含 end**。`end` 是下一周期的起点，不是当天或当月的最后一秒。

## 获取周期

| 方法 | 周期 | 起点 |
| --- | --- | --- |
| `day($datetime = null, $offset = 0)` | 日 | 当日零点 |
| `week($datetime = null, $offset = 0)` | 周 | 周一零点 |
| `month($datetime = null, $offset = 0)` | 月 | 当月 1 日零点 |
| `quarter($datetime = null, $offset = 0)` | 季度 | 1、4、7、10 月的 1 日零点 |
| `year($datetime = null, $offset = 0)` | 年 | 当年 1 月 1 日零点 |

`$datetime` 接收日期字符串或整数时间戳，省略时为当前时间。整数直接作为 Unix 时间戳，日期字符串沿用 `TimeHelper::toTimestamp()` 的宽松解析规则。
`$offset` 是周期偏移量：`-1` 上一周期、`0` 当前周期、`1` 下一周期。先归一到周期起点再偏移，不受月底日期溢出影响。

```php
TimeRange::day();                 // 今天
TimeRange::day(null, -1);         // 昨天
TimeRange::week();                // 本周
TimeRange::week(null, -1);        // 上周
TimeRange::month();               // 本月
TimeRange::month(null, -1);       // 上月
TimeRange::quarter('2026-01-31', -1); // 2025 年第四季度
TimeRange::year();                // 今年

// 通用入口，unit 仅支持 day/week/month/quarter/year
TimeRange::period('month', '2024-03-31', -1); // 2 月 1 日到 3 月 1 日
```

日历日不一定等于 86400 秒：在使用夏令时的时区，切换日可能是 23 或 25 小时。方法不会修改全局默认时区。

## SQL 查询

将起止值作为绑定参数传入；若数据库存日期字符串，可先用 `date()` 格式化，需确保数据库与 PHP 的时区约定一致。

```php
$range = TimeRange::month();
// 时间戳字段：WHERE created_at >= :start AND created_at < :end
$params = ['start' => $range['start'], 'end' => $range['end']];

// 仅在展示秒级“最后时刻”时减一，不用于有小数秒的数据库上界。
$lastSecond = date('Y-m-d H:i:s', $range['end'] - 1);
```

## 任意区间判断

```php
TimeRange::contains('2026-10-27', '2026-10-01', '2026-11-01'); // true
TimeRange::contains(10, 0, 10);              // false，默认排除终点
TimeRange::contains(10, 0, 10, true, true);  // true，两端均包含
TimeRange::contains(0, 0, 10, false, false); // false，两端均排除
```

签名：`contains($datetime, $start, $end, bool $includeStart = true, bool $includeEnd = false): bool`。
起点晚于终点或周期单位无效时抛出 `InvalidArgumentException`。起止相同的默认范围为空，两端均包含时只包含该时刻。
