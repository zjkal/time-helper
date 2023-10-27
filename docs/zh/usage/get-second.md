# 🐶 获取需要的秒数

{% hint style="info" %}
_一般用于设置缓存时间,设置结束时间等_
{% endhint %}

## secondEndToday

### 说明

获取到今天晚上零点之前的秒数

```php
secondEndToday(): int
```

### 参数

无

### 返回值

从此刻到今天晚上0点的秒数

### 示例

<pre class="language-php"><code class="lang-php">
<strong>//获取到今天晚上零点之前的秒数</strong>
<strong>TimeHelper::secondEndToday();</strong>
<strong>//返回 32811</strong>
</code></pre>