# 装备

工业灵药添加了青铜护甲和工具、强大的量子护甲，以及一个电力喷气背包。

## 青铜装备

青铜是一种中前期等级的材料（铁级采集等级）。

### 青铜工具

| 工具 | 耐久度 | 攻击伤害 | 速度 | 图片 |
|------|--------|----------|------|------|
| 青铜剑 | 340 | 5.0 | −2.4 | ![bronze_sword](../../../img/industrial_elixir/items/bronze_sword.png) |
| 青铜锹 | 340 | 3.5 | −3.0 | ![bronze_shovel](../../../img/industrial_elixir/items/bronze_shovel.png) |
| 青铜镐 | 340 | 3.0 | −2.8 | ![bronze_pickaxe](../../../img/industrial_elixir/items/bronze_pickaxe.png) |
| 青铜斧 | 340 | 8.0 | −3.1 | ![bronze_axe](../../../img/industrial_elixir/items/bronze_axe.png) |
| 青铜锄 | 340 | 0.0 | −1.0 | ![bronze_hoe](../../../img/industrial_elixir/items/bronze_hoe.png) |

- **工具材料属性：** 耐久度 340、挖掘速度 6.0、攻击伤害加成 2.0、附魔能力 14、铁级采集等级。
- 用青铜锭修复（`bronze_tool_materials` 标签）。

### 青铜护甲

| 部件 | 防御 | 图片 |
|------|------|------|
| 青铜头盔 | 2 | ![bronze_helmet](../../../img/industrial_elixir/items/bronze_helmet.png) |
| 青铜胸甲 | 6 | ![bronze_chestplate](../../../img/industrial_elixir/items/bronze_chestplate.png) |
| 青铜护腿 | 5 | ![bronze_leggings](../../../img/industrial_elixir/items/bronze_leggings.png) |
| 青铜靴 | 2 | ![bronze_boots](../../../img/industrial_elixir/items/bronze_boots.png) |

- **护甲材料属性：** 耐久度倍率 15、附魔能力 9、无护甲韧性、无击退抗性。
- 用青铜锭修复（`repairs_bronze_armor` 标签）。


<AdUnit />

## 量子护甲

**量子套装**是顶级带电护甲。每件存储 **10,000,000 E**，以 **5 级（8192 E/t）** 充电，且不可破坏。其青色耐久条显示能量水平。

| 部件 | 基础防御 | 图片 |
|------|----------|------|
| 量子头盔 | 4 | ![quantum_helmet](../../../img/industrial_elixir/items/quantum_helmet.png) |
| 量子胸甲 | 10 | ![quantum_chestplate](../../../img/industrial_elixir/items/quantum_chestplate.png) |
| 量子护腿 | 7 | ![quantum_leggings](../../../img/industrial_elixir/items/quantum_leggings.png) |
| 量子靴子 | 4 | ![quantum_boots](../../../img/industrial_elixir/items/quantum_boots.png) |

- **护甲材料属性：** 耐久度倍率 37、附魔能力 25、护甲韧性 5.0、击退抗性 0.1、全套护甲 37。
- 带电时，每件提供额外的护甲/韧性/击退抗性属性；护腿还提供 **+0.15 移动速度**。

### 部件能力

| 部件 | 能力 | 能量消耗 |
|------|------|----------|
| 头盔 | 氧气低时补充水下空气 | 每次补充 1,000 E |
| 头盔 | 饥饿 ≤ 7 格时补充饥饿 | 10,000 E |
| 头盔 | 清除中毒 | 10,000 ×（增幅+1）E |
| 头盔 | 清除 Wither | 25,000 ×（增幅+1）E |
| 头盔 | 可切换夜视 | 25,000 E 激活 |
| 胸甲 | 喷气背包飞行/悬停 | 飞行 25 E/t，悬停 37 E/t |
| 胸甲 | 灭火 | 免费 |
| 护腿 | 冲刺速度 ×3（冰上 ×9） | 被动（需要电力） |
| 护腿 | 游泳时获得海豚的恩惠 | 被动（需要电力） |
| 靴子 | 增强跳跃 | 1,000 E |
| 靴子 | 免疫摔落伤害 | （摔落距离 − 12）× 900 E |

### 伤害吸收

带电时，护甲吸收受到的伤害，消耗能量而不是生命值。每件减少部分伤害（头盔 15%、胸甲 44%、护腿 30%、靴子 15%）——在能量充足期间，全套实际上免疫。消耗：每件 `900 + 30 × 伤害`。

## 电力喷气背包

![electric_jetpack](../../../img/industrial_elixir/items/electric_jetpack.png)

一个带电的胸甲，让你能够飞行。

- **容量：** 300,000 E，**3 级**（512 E/t 输入），不可破坏。
- **飞行：** 按住跳跃键飞行（25 E/t），双击进入悬停模式（37 E/t）。
- 免费灭火。
- 使用与量子胸甲相同的飞行物理（向上推力 0.30、向前 0.08、悬停模式）。


<AdUnit />

## 快捷键与控制

模组在控制菜单中添加了**工业灵药**分类（选项 → 控制… → 快捷键）。它注册了三个按键，都用作带电护甲能力的*修饰键*：

| 按键绑定 | 默认按键 | 描述 |
|----------|----------|------|
| 模式切换键 | `M` | 护甲能力修饰键 |
| ALT键 | `左 Alt` | 护甲能力修饰键 |
| 加速键 | `左 Ctrl` | 护甲能力修饰键 |

### 按键组合

| 组合 | 动作 | 需要 |
|------|------|------|
| 按住 `M` + 按 `左 Alt` | 开关夜视 | 量子头盔（25,000 E） |
| 按住 `左 Ctrl` + 按 `空格` | 增强跳跃 | 量子靴子（1,000 E） |
| 按住 `M` + 按 `空格` | 开关悬停模式 | 量子胸甲 / 电力喷气背包 |
| 按住 `空格` / `W` / `A` / `D` | 喷气背包推力 / 前进 / 侧移 | 量子胸甲 / 电力喷气背包 |

穿着量子胸甲或电力喷气背包时，按住 `空格`（跳跃）向上推力，`W` 前进，`A`/`D` 侧移——这些输入会发送到服务器以驱动飞行物理。

## 船与告示牌

模组添加了橡胶木水上载具和告示牌：

| 物品 | 用途 | 图片 |
|------|------|------|
| 橡胶船 | 普通船 | ![rubber_boat](../../../img/industrial_elixir/items/rubber_boat.png) |
| 橡胶箱船 | 带箱子的船 | ![rubber_chest_boat](../../../img/industrial_elixir/items/rubber_chest_boat.png) |
| 橡胶木告示牌 | 可放置的告示牌 | ![rubber_sign](../../../img/industrial_elixir/items/rubber_sign.png) |
| 悬挂式橡胶木告示牌 | 悬挂告示牌 | ![rubber_hanging_sign](../../../img/industrial_elixir/items/rubber_hanging_sign.png) |

## 手持工具

| 物品 | 用途 | 图片 |
|------|------|------|
| 锻造锤 | 压板操作（耐久 80） | ![tool_rolling](../../../img/industrial_elixir/items/tool_rolling.png) |
| 板材切割剪刀 | 切割操作（耐久 80） | ![tool_cutting](../../../img/industrial_elixir/items/tool_cutting.png) |

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
