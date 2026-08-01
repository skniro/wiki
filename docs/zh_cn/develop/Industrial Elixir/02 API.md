# 工业灵药 API

工业灵药在 `com.skniro.industrial_elixir.api` 包下公开了一个小型公共 API。本页为附加组件开发者记录主要入口点。

## 能量等级

`com.skniro.industrial_elixir.api.energytier.EnergyTier`

一个描述整个模组中使用的 EU 风格能量等级的枚举。

```java
public enum EnergyTier {
    TIER1(32, 32),
    TIER2(128, 128),
    TIER3(512, 512),
    TIER4(2048, 2048),
    TIER5(8192, 8192),
    INFINITE(Integer.MAX_VALUE, Integer.MAX_VALUE);

    public int getMaxInput();
    public int getMaxOutput();
}
```

| 等级 | 最大输入/输出 |
|------|--------------|
| TIER1 | 32 E/t |
| TIER2 | 128 E/t |
| TIER3 | 512 E/t |
| TIER4 | 2048 E/t |
| TIER5 | 8192 E/t |
| INFINITE | `Integer.MAX_VALUE` |

## 分等级能量物品

`com.skniro.industrial_elixir.api.item.TieredEnergyItem`

一个用于存储能量并属于某个能量等级的物品接口。实现它可以让你的物品被充电板充电并被能量系统识别。

```java
public interface TieredEnergyItem {
    EnergyTier getEnergyTier();
}
```

**示例：**
```java
public class MyBatteryItem extends Item implements TieredEnergyItem {
    @Override
    public EnergyTier getEnergyTier() {
        return EnergyTier.TIER2;
    }
}
```


<AdUnit />

## 复制价值表

`com.skniro.industrial_elixir.api.item.replicator.ReplicatorValueMap`

一个将物品映射到其复制成本（UU物质 mB + 能量 EU）的注册表。**模式存储机**扫描器和**复制机**机器都会查询此表。

```java
public static void register(Item item, int uuCost, long energyCost);
public static ReplicatorCost get(Item item);
public static boolean contains(Item item);
public static Map<Item, ReplicatorCost> getAll();
```

`ReplicatorCost` 是一个 record：

```java
public record ReplicatorCost(int uuCost, long energyCost) {}
```

**示例——为你的物品注册复制：**
```java
ReplicatorValueMap.register(ModItems.MY_INGOT, 25, 0);
```

默认成本在模组初始化时通过 `registerDefaults()` 注册（例如橡胶 101 UU、铱碎片 13 UU、强化铱板 520 UU、废料 1 UU）。

## 燃料注册表

`com.skniro.industrial_elixir.api.item.ModFuelRegistry`

为**火力发电机**和**固体加热机**注册自定义燃料。

```java
public static void registerFuel(Item item, int burnTime);
public static void registerFuel(TagKey<Item> tag, int burnTime);
```

燃烧时间以 tick 为单位（与原版相同）。火力发电机以原版持续时间的一半燃烧燃料；此处注册的模组燃料直接使用。

**示例：**
```java
ModFuelRegistry.registerFuel(ModItems.MY_COAL, 1600);
ModFuelRegistry.registerFuel(TagKey.create(Registries.ITEM, ResourceLocation.parse("mymod:my_fuels")), 800);
```

## 机器提供者接口

`com.skniro.industrial_elixir.api.block.MachineEnergyProvider`

由想要暴露其能量容量和每次制造成本的机器实现。

```java
public interface MachineEnergyProvider {
    long getMachineCapacity();
    long getCraftEnergyCost();
}
```

`com.skniro.industrial_elixir.api.block.MachineRecipeProvider`

一个返回机器当前配方类型的函数式接口。

```java
@FunctionalInterface
public interface MachineRecipeProvider {
    RecipeType<?> getCurrentRecipeType();
}
```


<AdUnit />

## 数据生成：配方构建器

模组在 `com.skniro.industrial_elixir.api.data.recipe` 下为每种机器配方类型提供流畅的构建器。基础类 `ModRecipeGenerator`（继承原版 `RecipeProvider`）是使用它们的最简单方式。

可用的构建器：

| 构建器 | 配方类型 |
|---------|----------|
| `MaceratorRecipeJsonBuilder` | 粉碎机 |
| `CompressorRecipeJsonBuilder` | 压缩机 |
| `ExtractorRecipeJsonBuilder` | 提取机 |
| `MetalFormerRollingRecipeJsonBuilder` | 金属成型机 — 压板 |
| `MetalFormerCuttingRecipeJsonBuilder` | 金属成型机 — 切割 |
| `MetalFormerExtrudingRecipeJsonBuilder` | 金属成型机 — 挤压 |
| `CuttingRecipeJsonBuilder` | 方块切割机 |
| `OreWashingRecipeJsonBuilder` | 洗矿机 |
| `HeatCentrifugeRecipeJsonBuilder` | 热能离心机 |
| `ModBlastFurnaceRecipeJsonBuilder` | 热高炉 |
| `MolecularTransformerRecipeJsonBuilder` | 分子转换机 |
| `BrewReactorRecipeJsonBuilder` | 酿造反应器 |
| `CoffeeMachineRecipeJsonBuilder` | 咖啡机 |
| `CropFarmRecipeJsonBuilder` | 作物种植机 |

**示例——在你自己的数据生成器中添加一个粉碎机配方：**
```java
public class MyRecipeGenerator extends ModRecipeGenerator {
    // ...
    @Override
    public void buildRecipes() {
        createMacerator(MyItems.MY_DUST, 2)
            .input(MyItems.MY_ORE)
            .save(output);
    }
}
```

金属成型机的**压板**和**切割**构建器会自动生成使用锻造锤/板材切割剪刀物品的对应工作台配方。

## 木材套装助手

`ModRecipeGenerator.addWoodSet(...)` 为一个完整的木材套装生成四条方块切割机配方（原木 → 木板、去皮原木 → 木板、木头 → 木板、去皮木头 → 木板）。

```java
public void addWoodSet(RecipeOutput exporter,
                       ItemLike log, ItemLike strippedLog,
                       ItemLike wood, ItemLike strippedWood,
                       ItemLike planks, String name);
```

## 能量工具提示助手

`com.skniro.industrial_elixir.api.item.EnergyTooltipHelper`

一个用于在存储能量的物品上绘制青蓝色能量工具提示的助手。在为自定义能量物品渲染工具提示时使用它。

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
