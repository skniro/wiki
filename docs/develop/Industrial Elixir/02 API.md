# Industrial Elixir API

Industrial Elixir exposes a small public API under the `com.skniro.industrial_elixir.api` package. This page documents the main entry points for addon developers.

## Energy Tier

`com.skniro.industrial_elixir.api.energytier.EnergyTier`

An enum describing the EU-style energy tiers used throughout the mod.

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

| Tier | Max Input/Output |
|------|------------------|
| TIER1 | 32 E/t |
| TIER2 | 128 E/t |
| TIER3 | 512 E/t |
| TIER4 | 2048 E/t |
| TIER5 | 8192 E/t |
| INFINITE | `Integer.MAX_VALUE` |

## Tiered Energy Item

`com.skniro.industrial_elixir.api.item.TieredEnergyItem`

An interface for items that store energy and belong to an energy tier. Implementing it lets your item be charged by Charge Pads and recognized by the energy system.

```java
public interface TieredEnergyItem {
    EnergyTier getEnergyTier();
}
```

**Example:**
```java
public class MyBatteryItem extends Item implements TieredEnergyItem {
    @Override
    public EnergyTier getEnergyTier() {
        return EnergyTier.TIER2;
    }
}
```

## Replicator Value Map

`com.skniro.industrial_elixir.api.item.replicator.ReplicatorValueMap`

A registry that maps items to their replication cost (UU-matter mB + energy EU). The **Pattern Storage** scanner and the **Replicator** machine query this map.

```java
public static void register(Item item, int uuCost, long energyCost);
public static ReplicatorCost get(Item item);
public static boolean contains(Item item);
public static Map<Item, ReplicatorCost> getAll();
```

`ReplicatorCost` is a record:

```java
public record ReplicatorCost(int uuCost, long energyCost) {}
```

**Example — register your item for replication:**
```java
ReplicatorValueMap.register(ModItems.MY_INGOT, 25, 0);
```

Default costs are registered during mod init via `registerDefaults()` (e.g. Rubber 101 UU, Iridium Shard 13 UU, Iridium Plate 520 UU, Scrap 1 UU).

## Fuel Registry

`com.skniro.industrial_elixir.api.item.ModFuelRegistry`

Register custom fuels for the **Coal Generator** and **Solid Fuel Heater**.

```java
public static void registerFuel(Item item, int burnTime);
public static void registerFuel(TagKey<Item> tag, int burnTime);
```

Burn time is in ticks (like vanilla). The Coal Generator burns fuels at half the vanilla duration; mod fuels registered here are used directly.

**Example:**
```java
ModFuelRegistry.registerFuel(ModItems.MY_COAL, 1600);
ModFuelRegistry.registerFuel(TagKey.create(Registries.ITEM, ResourceLocation.parse("mymod:my_fuels")), 800);
```

## Machine Provider Interfaces

`com.skniro.industrial_elixir.api.block.MachineEnergyProvider`

Implemented by machines that want to expose their energy capacity and per-craft cost.

```java
public interface MachineEnergyProvider {
    long getMachineCapacity();
    long getCraftEnergyCost();
}
```

`com.skniro.industrial_elixir.api.block.MachineRecipeProvider`

A functional interface that returns the current recipe type of a machine.

```java
@FunctionalInterface
public interface MachineRecipeProvider {
    RecipeType<?> getCurrentRecipeType();
}
```

## Data Generation: Recipe Builders

The mod provides fluent builders for every machine recipe type under `com.skniro.industrial_elixir.api.data.recipe`. The base class `ModRecipeGenerator` (extends vanilla `RecipeProvider`) is the easiest way to use them.

Available builders:

| Builder | Recipe type |
|---------|-------------|
| `MaceratorRecipeJsonBuilder` | Macerator |
| `CompressorRecipeJsonBuilder` | Compressor |
| `ExtractorRecipeJsonBuilder` | Extractor |
| `MetalFormerRollingRecipeJsonBuilder` | Metal Former — Rolling |
| `MetalFormerCuttingRecipeJsonBuilder` | Metal Former — Cutting |
| `MetalFormerExtrudingRecipeJsonBuilder` | Metal Former — Extruding |
| `CuttingRecipeJsonBuilder` | Cutting Machine |
| `OreWashingRecipeJsonBuilder` | Ore Washing |
| `HeatCentrifugeRecipeJsonBuilder` | Heat Centrifuge |
| `ModBlastFurnaceRecipeJsonBuilder` | Blast Furnace |
| `MolecularTransformerRecipeJsonBuilder` | Molecular Transformer |
| `BrewReactorRecipeJsonBuilder` | Brew Reactor |
| `CoffeeMachineRecipeJsonBuilder` | Coffee Machine |
| `CropFarmRecipeJsonBuilder` | Crop Farm |

**Example — add a Macerator recipe in your own data generator:**
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

The Metal Former **Rolling** and **Cutting** builders automatically generate matching workbench recipes using the Hammer/Cutter items.

## Wood Set Helper

`ModRecipeGenerator.addWoodSet(...)` generates the four Cutting Machine recipes (log → planks, stripped log → planks, wood → planks, stripped wood → planks) for a full wood set.

```java
public void addWoodSet(RecipeOutput exporter,
                       ItemLike log, ItemLike strippedLog,
                       ItemLike wood, ItemLike strippedWood,
                       ItemLike planks, String name);
```

## Energy Tooltip Helper

`com.skniro.industrial_elixir.api.item.EnergyTooltipHelper`

A helper for drawing the cyan-blue energy tooltip on items that store energy. Use it when rendering tooltips for custom energy items.

<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>