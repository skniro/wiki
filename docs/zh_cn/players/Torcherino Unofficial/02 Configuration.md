# 配置

## 配置文件位置
```txt
./minecraft/config/sci4me/Torcherino.cfg
```

## 功能
```json
{
  "random_tick_rate": 4,
  "log_placement": false,
  "blacklisted_blocks": [],
  "blacklisted_blockentities": [],
  "tiers": [
    {
      "name": "normal",
      "max_speed": 4,
      "xz_range": 4,
      "y_range": 1
    },
    {
      "name": "compressed",
      "max_speed": 36,
      "xz_range": 4,
      "y_range": 1
    },
    {
      "name": "double_compressed",
      "max_speed": 324,
      "xz_range": 4,
      "y_range": 1
    }
  ],
  "online_mode": ""
}
```



- `random_tick_rate` (int)：由 torcherino 引起的随机方块刻速率的额外倍率
- `log_placement` (bool)：是否在 torcherino 放置到世界中时记录日志。对追踪卡顿的服务器管理员很有用
- `blacklisted_blocks` (列表)：不应被加速的方块标识符
- `blacklisted_blockentities` (列表)：不应被加速的方块实体标识符
- `online_mode` (string)：当设置为 ONLINE 时，Torcherino 仅在其所有者当前在线时运行。如果设置为 RESTART，则 Torcherino 将为自服务器启动以来登录过的任何人运行。任何其他值都允许它们在其区块加载时运行。
- `tiers` (列表)：要注册的额外 torcherino 等级。

等级定义格式：

- `name` (string)：将包含在注册名称中。必须唯一
- `max_speed` (int)：此等级引起的刻速度的最大倍率
- `xz_range` (int)：此等级生效的水平半径（以方块为单位）
- `y_range` (int)：此等级生效的垂直范围（以方块为单位）

您必须为您添加的任何非默认等级提供方块状态、模型、纹理、语言、战利品表和配方文件。所有生成的方块将自动添加到内部黑名单中，其标识符如下：

- 火把：`torcherino:NAME_torcherino`
- 灯笼：`torcherino:NAME_lantern`
- 南瓜灯：`torcherino:NAME_lanterino`

#### 特别感谢 lukegrahamlandry。此页面参考了 lukegrahamlandry 的网站。
<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
