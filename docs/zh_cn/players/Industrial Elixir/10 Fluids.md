# 流体

工业灵药添加了三种流体：**UU物质**、**压缩空气**和**温泉**。这三种流体都像水一样（密度 1000、粘度 1000、温度 300），并像普通液体一样流动。

## UU物质

![fluid_uu_bucket](../../../img/industrial_elixir/items/fluid_uu_bucket.png) UU物质桶

**UU物质**是一种用于复制物品的终局流体。它由**物质生成机**生产，并被**复制机**消耗。

- **生产：** 物质生成机将 **1,000,000 E 转化为 1 mB** 的 UU物质。在输入槽中添加**废料**可将产量提升 **5×**（最多 5000 废料增幅）。
- **消耗：** **复制机**使用 UU物质（加上能量）来复制任何已扫描进模式存储水晶的物品。
- **存储：** 可以存储在 UU物质桶或 UU物质单元（`uu_cell`，1000 mB）中。

## 压缩空气

![fluid_air_bucket](../../../img/industrial_elixir/items/fluid_air_bucket.png) 压缩空气桶

**压缩空气**是一种由**热高炉**使用的流体。每个热高炉配方消耗 1000 mB 压缩空气。

- **存储：** 压缩空气桶或压缩空气单元（`air_cell`，1000 mB）。
- **获取：** 可以从空气流体源装瓶，或者通过在压缩机中压缩空单元（→ 压缩空气单元）获得。

## 温泉

![hot_spring_bucket](../../../img/industrial_elixir/items/hot_spring_bucket.png) 温泉桶

**温泉**水是一种温暖的流体，提供治疗效果。

- **再生：** 站在温泉水的**源方块**中获得**再生 II，持续 3 秒**（留在其中时持续生效）。
- **源转换：** 游戏规则 `hot_spring_source_conversion`（默认 `true`）控制温泉源是否可以无限生成。使用命令 `/gamerule hot_spring_source_conversion true|false` 设置。当为 `false` 时，温泉源方块不再补充，因此你无法创建无限温泉池。
- **存储：** 温泉桶或温泉单元（`hot_spring_cell`，1000 mB）。
- **电力：** **流体发电机**以 1 mB/t 燃烧温泉，产生 **1 E/t**（与水相同）。

## 流体单元与桶

所有流体都可以存储在**桶**（堆叠 1 个）或**单元**（堆叠 16 个，每个 1000 mB）中。

| 流体 | 桶 | 单元 |
|------|------|------|
| UU物质 | ![fluid_uu_bucket](../../../img/industrial_elixir/items/fluid_uu_bucket.png) UU物质桶 | ![uu_cell](../../../img/industrial_elixir/items/uu_cell.png) UU物质单元 |
| 压缩空气 | ![fluid_air_bucket](../../../img/industrial_elixir/items/fluid_air_bucket.png) 压缩空气桶 | ![air_cell](../../../img/industrial_elixir/items/air_cell.png) 压缩空气单元 |
| 温泉 | ![hot_spring_bucket](../../../img/industrial_elixir/items/hot_spring_bucket.png) 温泉桶 | ![hot_spring_cell](../../../img/industrial_elixir/items/hot_spring_cell.png) 温泉单元 |

模组也有原版流体的单元：

| 单元 | 流体 |
|------|------|
| ![empty_cell](../../../img/industrial_elixir/items/empty_cell.png) 空单元 | 空（可以填充） |
| ![water_cell](../../../img/industrial_elixir/items/water_cell.png) 水单元 | 水 |
| ![lava_cell](../../../img/industrial_elixir/items/lava_cell.png) 熔岩单元 | 熔岩 |

## 流体运输

流体通过**流体管道**运输（参见 [能量系统](./02%20Energy%20System)），并存储在**流体储罐**（16 桶）中。流体处理机器各有一个内置的 16 桶储罐，每次制造消耗 1000 mB。

### 流体发电机

![fluid_generator](../../../img/industrial_elixir/machines/fluid_generator_front.png)

| 流体 | 消耗 | 输出 |
|------|------|------|
| 熔岩 | 2 mB/t | 20 E/t |
| 水 | 1 mB/t | 1 E/t |
| 温泉 | 1 mB/t | 1 E/t |

## 温泉填充

某些楼梯（橡胶木楼梯和圆石楼梯（温泉版））除了普通水之外，还可以**用温泉填充**。用温泉桶右键点击楼梯，将其填充为温泉；用水桶则进行普通填充。

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
