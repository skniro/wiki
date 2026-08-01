# 发电

发电机产生能量（E），这些能量可以存储在电池/能量箱中，并被机器使用。

## 火力发电机

![coal_generator](../../../img/industrial_elixir/machines/coal_generator_front.png)

燃烧固体燃料（煤炭、木炭、废料和其他模组燃料）产生 **32 E/t**（1 级）。燃料以原版燃烧持续时间的一半燃烧。它最多向相邻方块推送 320 E/t，内部缓冲区为 40,000 E。

**使用：** 将固体燃料放入燃料槽。电池槽（槽 1）允许你为电池充放电。

## 流体发电机

![fluid_generator](../../../img/industrial_elixir/machines/fluid_generator_front.png)

燃烧流体产生能量。内部缓冲区：10,000 E。

| 流体 | 消耗 | 输出 |
|------|------|------|
| 熔岩 | 2 mB/t | 20 E/t |
| 水 | 1 mB/t | 1 E/t |
| 温泉 | 1 mB/t | 1 E/t |

**使用：** 通过流体管道供应流体，或将桶/单元放入输入槽。

## 太阳能发电机

太阳能发电机在白天被动产生能量（更高级别在夜晚也有少量输出）。它们不需要燃料。每台有 4 个电池槽，可向电池放电。

| 发电机 | 等级 | 白天功率 | 夜晚功率 | 容量 | 图片 |
|--------|------|----------|----------|------|------|
| 太阳能发电机 | 1 级 | 1 E/t | 0 E/t | 1,000 E | ![generator_solar_panel](../../../img/industrial_elixir/machines/generator_solar_panel_top.png) |
| 高级太阳能发电机 | 2 级 | 8 E/t | 1 E/t | 10,000 E | ![generator_advanced_solar_panel](../../../img/industrial_elixir/machines/generator_advanced_solar_panel_top.png) |
| 混合太阳能发电机 | 3 级 | 64 E/t | 8 E/t | 100,000 E | ![generator_hybrid_solar_panel](../../../img/industrial_elixir/machines/generator_hybrid_solar_panel_top.png) |
| 终极太阳能发电机 | 4 级 | 512 E/t | 64 E/t | 1,000,000 E | ![generator_ultimate_solar_panel](../../../img/industrial_elixir/machines/generator_ultimate_solar_panel_top.png) |
| 量子太阳能发电机 | 5 级 | 4096 E/t | 2048 E/t | 10,000,000 E | ![generator_quantum_solar_panel](../../../img/industrial_elixir/machines/generator_quantum_solar_panel_top.png) |

**使用：** 放置在暴露于天空的位置。连接电缆到输出端，或将电池放入电池槽。

## 风力发电机

![generator_wind_mill](../../../img/industrial_elixir/machines/generator_wind_mill_front.png)

根据风力强度发电。必须放置在 **Y=64 以上**。功率取决于：
- 高度（越高功率越大）
- 障碍物（以 9×9×7 区域内的方块计数）
- 天气（雷暴 > 降雨 > 晴天）

风力强度在 0 到 30 之间随机漂移。内部容量：100 E。

> ⚠️ **危险：** 如果风力 ≥ 15，则风力发电机有较小几率**损坏**并变身为火力发电机，掉落铁锭。

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
