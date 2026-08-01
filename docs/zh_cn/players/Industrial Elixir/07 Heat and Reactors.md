# 热量与反应堆

这些方块涉及**热量**系统和核能。加热器产生热量；热机器（如热高炉）消耗热量；反应堆产生能量且必须冷却。

## 热量系统

热量是与能量分开的一种资源。它由加热器产生，并推送到其前方的方块。热机器必须先完全加热才能工作。

## 电加热器

![electric_heater](../../../img/industrial_elixir/machines/electric_heater_front.png)

将**能量转化为热量**。4 级机器（容量 3000 E）。

**使用：** 将**线圈**物品放入 10 个线圈槽。每个线圈每 tick 将 **10 E 转化为 10 热量**。加热器从其朝向的一面将热量推送到相邻的热机器。

## 固体加热机

![solid_fuel_heater_generator](../../../img/industrial_elixir/machines/solid_fuel_heater_generator_front.png)

燃烧固体燃料产生 **10 热量/tick**（热量满时暂停）。1 级机器。

**使用：** 将固体燃料放入输入槽。灰烬作为副产物在输出槽中产生。将其朝向的一面推送热量。


<AdUnit />

## 热高炉

![blast_furnace](../../../img/industrial_elixir/machines/blast_furnace_front.png)

一台消耗热量和流体的熔炼炉。1 级机器。必须达到 **50,000 热度** 才能工作；接收放置在其前方的加热器传来的热量。每个配方消耗流体（例如压缩空气），最多输出 2 个槽。处理时间：6000 tick。

### 配方

| 输入 | 主要输出 | 次要输出 | 流体 |
|------|----------|----------|------|
| 铁锭 | 钢锭 | 炉渣 | 压缩空气（1000 mB） |
| 玻璃板 | 空容器 | — | 压缩空气（1000 mB） |

## 神圣反应堆

![sacred_generator](../../../img/industrial_elixir/machines/sacred_generator_front.png)

一个 3×3 的反应堆网格。3 级输出，容量 4096 E。

**使用：**
1. 需要**红石信号**和一根放在**中心槽**（索引 4）的燃料棒。
2. 每次脉冲产生 `燃料棒数量 × 128` E 并产生热量。
3. 8 个外围槽放置冷却组件（冷却单元、散热片、热交换器），它们散发热量并消耗耐久。
4. 4 个电池槽（10–13）。

> ⚠️ **危险：** 如果热量达到 **5000**，反应堆将以 100 格半径爆炸**熔毁**。请保持冷却！
> 
### 反应堆组件

| 组件 | 用途 | 图片 |
|------|------|------|
| 神圣石燃料棒 | 燃料棒（4 根），耐久 20000 | ![sacred_essence](../../../img/industrial_elixir/items/sacred_essence.png) |
| 神圣石碎片 | 燃料棒（8 根），耐久 20000 | ![sacred_shard](../../../img/industrial_elixir/items/sacred_shard.png) |
| 神圣核心 | 燃料棒（16 根），耐久 20000 | ![sacred_core](../../../img/industrial_elixir/items/sacred_core.png) |
| 10k冷却单元 | 冷却（12 冷却/t），耐久 10000 | ![coolant_cell_10k](../../../img/industrial_elixir/items/coolant_cell_10k.png) |
| 30k冷却单元 | 冷却（12 冷却/t），耐久 30000 | ![coolant_cell_30k](../../../img/industrial_elixir/items/coolant_cell_30k.png) |
| 60k冷却单元 | 冷却（12 冷却/t），耐久 60000 | ![coolant_cell_60k](../../../img/industrial_elixir/items/coolant_cell_60k.png) |
| 散热片 | 散热（6 冷却/t），耐久 1000 | ![heat_vent](../../../img/industrial_elixir/items/heat_vent.png) |
| 高级散热片 | 散热（12 冷却/t），耐久 1000 | ![advanced_heat_vent](../../../img/industrial_elixir/items/advanced_heat_vent.png) |
| 超频散热片 | 散热，耐久 1000 | ![overclocked_heat_vent](../../../img/industrial_elixir/items/overclocked_heat_vent.png) |


<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
