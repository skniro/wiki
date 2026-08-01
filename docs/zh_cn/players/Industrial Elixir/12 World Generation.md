# 世界生成

工业灵药在主世界添加了三种新矿石、一棵橡胶树和一个温泉建筑。

## 矿石

模组在主世界添加了**锡**、**铅**和**神圣石**矿石。每种都有石头变体（位于上层）和深板岩变体（位于深层）。所有矿石在采集时掉落其原材料（带精准采集/时运时），并给予 **2–4 点经验**。

| 矿石 | 石头变体 | 深板岩变体 | 每区块矿脉数 | 矿脉大小 | 高度范围 |
|------|----------|------------|-------------|----------|----------|
| 锡 | ![tin_ore](../../../img/industrial_elixir/blocks/tin_ore.png) 锡矿石 | ![deepslate_tin_ore](../../../img/industrial_elixir/blocks/deepslate_tin_ore.png) 深板岩锡矿石 | 10 / 12 | 10 | 0–40 / −64–0 |
| 铅 | ![lead_ore](../../../img/industrial_elixir/blocks/lead_ore.png) 铅矿石 | ![deepslate_lead_ore](../../../img/industrial_elixir/blocks/deepslate_lead_ore.png) 深板岩铅矿石 | 8 / 10 | 8 | 0–63 / −64–0 |
| 神圣石 | ![sacred_ore](../../../img/industrial_elixir/blocks/sacred_ore.png) 神圣石矿石 | ![deepslate_sacred_ore](../../../img/industrial_elixir/blocks/deepslate_sacred_ore.png) 深板岩神圣石矿石 | 6 / 8 | 6 | 0–64 / −64–0 |

- **石头**变体只替换普通石头。
- **深板岩**变体替换深板岩和其他可被深板岩矿石替换的方块。

### 粗矿块

粗矿可以压缩成粗金属块以便紧凑存储：

| 方块 | 图片 | | 方块 | 图片 |
|------|------|---|---|------|
| 粗锡块 | ![raw_tin_block](../../../img/industrial_elixir/blocks/raw_tin_block.png) | | 粗铅块 | ![raw_lead_block](../../../img/industrial_elixir/blocks/raw_lead_block.png) |
| 粗神圣矿石块 | ![raw_sacred_block](../../../img/industrial_elixir/blocks/raw_sacred_block.png) | | | |


<AdUnit />

## 橡胶树

橡胶树自然生成在**森林**生物群系中。它们是**粘性树脂**的来源，树脂可被提取为**橡胶**。

| 方块 | 图片 |
|------|------|
| 橡胶木 | ![rubber_log](../../../img/industrial_elixir/blocks/rubber_log.png) |
| 橡胶树树叶 | ![rubber_leaves](../../../img/industrial_elixir/blocks/rubber_leaves.png) |
| 橡胶树树苗 | ![rubber_sapling](../../../img/industrial_elixir/blocks/rubber_sapling.png) |

**生长：** 橡胶树高 4–6 格，带有团状树冠。每棵树在树干中有 **1–2 根产胶木**（`rubber_rubber_log`），树生成时它们已经成熟。

### 收获橡胶胶乳

**产胶木**是一种特殊的类作物原木，分三个阶段生长（0 → 1 → 2）。它会随时间成熟（随机刻，需要光照 ≥ 9），也可以使用骨粉加速。

![rubber_rubber_log_stage0](../../../img/industrial_elixir/blocks/rubber_rubber_log_stage0.png) → ![rubber_rubber_log_stage1](../../../img/industrial_elixir/blocks/rubber_rubber_log_stage1.png) → ![rubber_rubber_log_stage2](../../../img/industrial_elixir/blocks/rubber_rubber_log_stage2.png)

**使用：** 右键点击完全成熟（阶段 2）的产胶木，收获 **1 个粘性树脂**。这会将产胶木重置回阶段 0，之后它会重新生长。

## 温泉浴场建筑

模组生成一个单一结构：**`industrial_elixir_hot_spring_baths`** —— 一座主要由橡胶木和深板岩砖建造的温泉浴场。
![hot_spring_baths1.png](../../../img/industrial_elixir/hot_spring_baths1.png)
![hot_spring_baths2.png](../../../img/industrial_elixir/hot_spring_baths2.png)
![hot_spring_baths3.png](../../../img/industrial_elixir/hot_spring_baths3.png)

**生成位置：**
- 生物群系：**樱花树林**（主世界）
- 放置方式：随机散布，间距 34 区块，间隔 8

**内部包含：**
- 一座 19×12×40 的建筑，由橡胶木板/楼梯、圆石楼梯（带温泉填充）和深板岩砖建成。
- 浴场周围散布着温泉流体方块。
- **4 台自动售货机**（点亮）——它们充当村民风格的商人，出售大量模组物品以换取绿宝石。
- 床、工作台、音符盒、花盆、灯笼以及货架上的装饰性食物物品。

**注意：** 结构内的箱子和木桶生成时是空的；真正的战利品来自自动售货机的随机交易。


<AdUnit />

## 战利品表

工业灵药向**许多原版箱子战利品表**添加了模组物品。每个受影响的箱子最多会获得 4 个额外的战利品池，每个池都有几率包含一个随机物品。

### 战利品池内容

| 池 | 物品（随机抽取 1 个） |
|------|----------------------|
| 青铜护甲 | 青铜头盔、青铜胸甲、青铜护腿、青铜靴 |
| 粉末 | 青铜/黏土/煤/铜/钻石/能量/金/铁/青金石/铅/锂/黑曜石/二氧化硅/银/石/硫磺/锡粉 |
| 铱矿石 | 铱矿石 |
| 铱碎片 | 铱碎片 |

### 箱子几率

| 箱子 | 护甲 | 粉末 | 铱矿石 | 铱碎片 |
|-------|------|------|--------|--------|
| 远古城市 | 35% | 55% | 10% | 5% |
| 堡垒遗迹藏宝室 | 35% | 55% | 10% | 5% |
| 末地城藏宝室 | 35% | 55% | 10% | 5% |
| 堡垒遗迹桥 | 20% | 35% | 6% | 3% |
| 堡垒遗迹其他 | 20% | 35% | 6% | 3% |
| 林地府邸 | 25% | 35% | 6% | 3% |
| 下界要塞 | 20% | 35% | 6% | 3% |
| 堡垒遗迹疣猪兽棚 | 18% | 30% | 5% | 2% |
| 要塞走廊 | 18% | 30% | 5% | 2% |
| 要塞交叉口 | 18% | 30% | 5% | 2% |
| 沙漠神殿 | 12% | 25% | 4% | 2% |
| 丛林神庙 | 12% | 25% | 4% | 2% |
| 丛林神庙发射器 | 12% | 25% | 4% | 2% |
| 掠夺者前哨站 | 12% | 25% | 4% | 2% |
| 废弃传送门 | 12% | 25% | 4% | 2% |
| 普通地牢 | 12% | 25% | 4% | 2% |
| 雪屋箱子 | 8% | 18% | 3% | 1% |
| 废弃矿井 | 8% | 18% | 3% | 1% |
| 埋藏的宝藏 | 8% | 18% | 3% | 1% |
| 海底废墟（小型） | 8% | 18% | 3% | 1% |
| 海底废墟（大型） | 8% | 18% | 3% | 1% |
| 沉船地图 | 8% | 18% | 3% | 1% |
| 沉船补给 | 8% | 18% | 3% | 1% |
| 沉船宝藏 | 8% | 18% | 3% | 1% |

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
