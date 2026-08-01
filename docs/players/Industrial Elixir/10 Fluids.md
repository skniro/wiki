# Fluids

Industrial Elixir adds three fluids: **UU-Matter**, **Compressed Air**, and **Hot Spring**. All three behave like water (density 1000, viscosity 1000, temperature 300) and flow like normal liquids.

## UU-Matter

![fluid_uu_bucket](../../img/industrial_elixir/items/fluid_uu_bucket.png) UU-Matter Bucket

**UU-Matter** is an endgame fluid used to duplicate items. It is produced by the **Matter Generator** and consumed by the **Replicator**.

- **Production:** The Matter Generator converts **1,000,000 E per 1 mB** of UU-Matter. Adding **Scrap** to the input slot boosts production by **5×** (up to 5000 scrap amplifier).
- **Consumption:** The **Replicator** uses UU-Matter (plus energy) to duplicate any item that was scanned into a Pattern Storage Crystal.
- **Storage:** Can be stored in the UU-Matter Bucket or UU-Matter Cell (`uu_cell`, 1000 mB).

## Compressed Air

![fluid_air_bucket](../../img/industrial_elixir/items/fluid_air_bucket.png) Compressed Air Bucket

**Compressed Air** is a fluid used by the **Blast Furnace**. Each Blast Furnace recipe consumes 1000 mB of compressed air.

- **Storage:** Compressed Air Bucket or Air Cell (`air_cell`, 1000 mB).
- **Obtaining:** Can be bottled from an air fluid source, or made by compressing an Empty Cell in the Compressor (→ Air Cell).

## Hot Spring

![hot_spring_bucket](../../img/industrial_elixir/items/hot_spring_bucket.png) Hot Spring Bucket

![hot_spring_still](../../img/industrial_elixir/blocks/hot_spring_still.png)

**Hot Spring** water is a warm fluid that provides a healing effect.

- **Regeneration:** Standing inside a **source block** of hot spring water grants **Regeneration II for 3 seconds** (re-applied while you stay in it).
- **Source conversion:** The game rule `hot_spring_source_conversion` (default `true`) controls whether hot spring sources can generate infinitely. Set it with the command `/gamerule hot_spring_source_conversion true|false`. When `false`, hot spring source blocks no longer refill, so you cannot create an infinite hot-spring pool.
- **Storage:** Hot Spring Bucket or Hot Spring Cell (`hot_spring_cell`, 1000 mB).
- **Power:** The **Fluid Generator** burns hot spring at 1 mB/t to produce **1 E/t** (same as water).


<AdUnit />

## Fluid Cells & Buckets

All fluids can be stored and transported in **buckets** (stack of 1) or **cells** (stack of 16, 1000 mB each).

| Fluid | Bucket | Cell |
|-------|--------|------|
| UU-Matter | ![fluid_uu_bucket](../../img/industrial_elixir/items/fluid_uu_bucket.png) UU-Matter Bucket | ![uu_cell](../../img/industrial_elixir/items/uu_cell.png) UU-Matter Cell |
| Compressed Air | ![fluid_air_bucket](../../img/industrial_elixir/items/fluid_air_bucket.png) Compressed Air Bucket | ![air_cell](../../img/industrial_elixir/items/air_cell.png) Air Cell |
| Hot Spring | ![hot_spring_bucket](../../img/industrial_elixir/items/hot_spring_bucket.png) Hot Spring Bucket | ![hot_spring_cell](../../img/industrial_elixir/items/hot_spring_cell.png) Hot Spring Cell |

The mod also has cells for vanilla fluids:

| Cell | Fluid |
|------|-------|
| ![empty_cell](../../img/industrial_elixir/items/empty_cell.png) Empty Cell | Empty (can be filled) |
| ![water_cell](../../img/industrial_elixir/items/water_cell.png) Water Cell | Water |
| ![lava_cell](../../img/industrial_elixir/items/lava_cell.png) Lava Cell | Lava |

## Fluid Transport

Fluids are moved with **fluid pipes** (see [Energy System](./02%20Energy%20System)) and stored in the **Fluid Tank** (16 buckets). Fluid-processing machines each have a built-in 16-bucket tank and consume 1000 mB per craft.

### Fluid Generator

![fluid_generator](../../img/industrial_elixir/machines/fluid_generator_front.png)

| Fluid | Consumption | Output |
|-------|-------------|--------|
| Lava | 2 mB/t | 20 E/t |
| Water | 1 mB/t | 1 E/t |
| Hot Spring | 1 mB/t | 1 E/t |

## Hot Spring Waterlogging

Certain stairs (Rubber Stairs and Cobblestone Stairs "Hot spring") can be **waterlogged with hot spring water** in addition to normal water. Right-click a stair with a Hot Spring Bucket to fill it with hot spring; right-click with a water bucket for normal waterlogging.

<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>
