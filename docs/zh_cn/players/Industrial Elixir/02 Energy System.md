# 能量系统

工业灵药使用多等级 EU 风格的能量系统。能量存储在电池和能量箱中，通过电缆传输，并由发电机生产。

## 电缆

电缆在发电机、存储设备和机器之间传输能量。未绝缘电缆在通电时**可能会电击你**；绝缘电缆则安全。

| 电缆 | 传输速率 | 等级 | 绝缘? | 图片 |
|------|----------|------|--------|------|
| 锡电缆 | 32 E/t | 1 级 | 否（电击） | ![tin_cable](../../../img/industrial_elixir/cables/tin_cable.png) |
| 铜电缆 | 128 E/t | 2 级 | 否（电击） | ![copper_cable](../../../img/industrial_elixir/cables/copper_cable.png) |
| 金电缆 | 512 E/t | 3 级 | 否（电击） | ![gold_cable](../../../img/industrial_elixir/cables/gold_cable.png) |
| 高压电缆 | 2048 E/t | 4 级 | 否（电击） | ![hv_cable](../../../img/industrial_elixir/cables/hv_cable.png) |
| 玻璃纤维电缆 | 8192 E/t | 5 级 | 是 | ![glassfiber_cable](../../../img/industrial_elixir/cables/glassfiber_cable.png) |
| 绝缘锡电缆 | 32 E/t | 1 级 | 是 | ![insulated_tin_cable](../../../img/industrial_elixir/cables/insulated_tin_cable.png) |
| 绝缘铜电缆 | 128 E/t | 2 级 | 是 | ![insulated_copper_cable](../../../img/industrial_elixir/cables/insulated_copper_cable.png) |
| 绝缘金电缆 | 512 E/t | 3 级 | 是 | ![insulated_gold_cable](../../../img/industrial_elixir/cables/insulated_gold_cable.png) |
| 绝缘高压电缆 | 2048 E/t | 4 级 | 是 | ![insulated_hv_cable](../../../img/industrial_elixir/cables/insulated_hv_cable.png) |

**使用：** 放置电缆连接发电机、电池、能量箱和机器。所有相同传输速率的电缆在网络中共享统一能量池，因此电力会自动平衡。每根电缆可以缓冲 `传输速率 × 4` 的能量。

## 电池

电池存储能量，可以在发电机、能量箱和充电板中充电。它们也为手持工具和护甲供电。

| 电池 | 容量 | 等级 | 图片 |
|------|------|------|------|
| 充电电池 | 10,000 E | 1 级 | ![re_battery](../../../img/industrial_elixir/items/re_battery_4.png) |
| 高级充电电池 | 100,000 E | 2 级 | ![advanced_re_battery](../../../img/industrial_elixir/items/advanced_re_battery_4.png) |
| 能量水晶 | 1,000,000 E | 3 级 | ![energy_crystal](../../../img/industrial_elixir/items/energy_crystal_4.png) |
| 拉普顿水晶 | 10,000,000 E | 4 级 | ![lapotron_crystal](../../../img/industrial_elixir/items/lapotron_crystal_4.png) |

电池会显示一条青蓝色的能量耐久条。将它们放入机器的**电池槽**为其供电，或放入充电板进行无线充电。

## 能量箱

能量箱存储大量能量，并可为电池充放电。**正面只接受能量**；其他面输出能量。

| 方块 | 容量 | 等级 | 图片 |
|------|------|------|------|
| 储能箱 | 40,000 E | 1 级 | ![energy_box](../../../img/industrial_elixir/machines/energy_box_front.png) |
| CESU | 300,000 E | 2 级 | ![cesu](../../../img/industrial_elixir/machines/cesu_front.png) |
| MFE | 4,000,000 E | 3 级 | ![mfe](../../../img/industrial_elixir/machines/mfe_front.png) |
| MFSU | 40,000,000 E | 4 级 | ![mfsu](../../../img/industrial_elixir/machines/mfsu_front.png) |

## 充电板

充电板的行为类似能量箱，但还会**无线充电**站在其上方玩家物品栏中的任何能量物品（电池、喷气背包、量子护甲等）。充电板只能为等级等于或低于其自身等级的物品充电。

| 方块 | 容量 | 等级 | 图片 |
|------|------|------|------|
| 充电板 | 40,000 E | 1 级 | ![charge_pad](../../../img/industrial_elixir/machines/charge_pad_front.png) |
| CESU 充电板 | 300,000 E | 2 级 | ![charge_pad_cesu](../../../img/industrial_elixir/machines/charge_pad_cesu_front.png) |
| MFE 充电板 | 4,000,000 E | 3 级 | ![charge_pad_mfe](../../../img/industrial_elixir/machines/charge_pad_mfe_front.png) |
| MFSU 充电板 | 40,000,000 E | 4 级 | ![charge_pad_mfsu](../../../img/industrial_elixir/machines/charge_pad_mfsu_front.png) |

## 变压器

LV、MV、HV 和 EV 变压器目前是**装饰方块**——它们有正常的前面模型，但还没有能量转换逻辑。

| 方块 | 等级 | 图片 |
|------|------|------|
| 低压变压器 | 1 级 | ![lv_transformer](../../../img/industrial_elixir/machines/lv_transformer_front.png) |
| 中压变压器 | 2 级 | ![mv_transformer](../../../img/industrial_elixir/machines/mv_transformer_front.png) |
| 高压变压器 | 3 级 | ![hv_transformer](../../../img/industrial_elixir/machines/hv_transformer_front.png) |
| 超高压变压器 | 4 级 | ![ev_transformer](../../../img/industrial_elixir/machines/ev_transformer_front.png) |

## 升级模块

大多数处理机器有 **4 个升级槽**。安装升级模块来改变行为。

| 升级 | 效果 | 图片 |
|------|------|------|
| 超频升级 | 每个速度 **−30%**，电力 **+60%** | ![overclocker](../../../img/industrial_elixir/items/overclocker.png) |
| 储能升级 | 每个增加 **+10,000 E** 存储 | ![energy_storage](../../../img/industrial_elixir/items/energy_storage.png) |
| 高压升级 | 每个将能量等级提升 **+1** | ![transformer](../../../img/industrial_elixir/items/transformer.png) |
| 红石反相升级 | 反转红石信号 | ![redstone_inverter](../../../img/industrial_elixir/items/redstone_inverter.png) |

## 流体管道

流体管道在储罐和流体机器之间输送流体。

| 管道 | 功能 | 图片 |
|------|------|------|
| 木制流体管道 | **抽取**储罐/机器中的流体，以及流体源方块 | ![pipe_wooden_fluid](../../../img/industrial_elixir/pipes/pipe_wooden_fluid.png) |
| 石制流体管道 | **运输**流体；不抽取 | ![pipe_stone_fluid](../../../img/industrial_elixir/pipes/pipe_stone_fluid.png) |

## 流体储罐

![fluid_tank](../../../img/industrial_elixir/machines/fluid_tank_front.png)

流体储罐存储 **16 桶（16,000 mB）** 的单一流体。右键使用桶（例如水或熔岩）来填充，倒空桶来排出。它通过其物品栏自动填充和排空流体单元和桶。GUI 显示填充比例。

参见 [流体](./11%20Fluids) 了解模组的三种自定义流体。

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
