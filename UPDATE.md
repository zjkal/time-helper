
> Version 1.1.0
> * 增加了ChinaHoliday类,专门用于维护国内节假日相关的方法
> * 增加了判断是否为国内工作日的方法isWorkday()
> * 增加了判断是否为国内节假日的方法isHoliday()

> Version 1.0.10
> * 增加判断指定日期是否为平常日的方法isWeekday()
> * 增加判断指定日期是否为周末的方法isWeekend()

> Version 1.0.9
> * 修改toTimestamp()方法不传参数或传入空参数时,不再抛出异常,而是返回当前时间戳
> * 增加了判断是否是闰年的方法isLeapYear()
> * 增加了获取该日期当年的天数的方法daysInYear()
> * 增加了获取该日期当月的天数的方法daysInMonth()

> Version 1.0.8
> * 增加了判断指定时间是星期几的方法getWeekDay()

> Version 1.0.7
> * 增加了将任意格式的时间转换为指定格式的方法format()
> * 删除废弃方法friendly_date(),请使用toFriendly()代替

> Version 1.0.6
> * 修复BUG

> Version 1.0.5
> * 优化了友好的时间显示算法

> Version 1.0.4
> * 修复了变量类型的BUG

> Version 1.0.3
> * 增加了判断一个字符串是否为时间戳的方法
> * 增加了将任意时间类型的字符串转为时间戳的方法
> * 增加了获取秒级/毫秒级/微秒级/纳秒级的时间戳的方法

> Version 1.0.2
> * 增加了返回N分钟/小时的秒数的方法

> Version 1.0.1
> * 返回N分钟/小时/天/月/年前或后的时间戳所有方法,增加了是否取整的参数.

> Version 1.0.0
> * 从tp-helper的时间类中独立出来
