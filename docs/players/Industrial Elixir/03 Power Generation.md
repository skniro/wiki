# Power Generation

Generators produce energy (E) that can be stored in batteries / energy boxes and used by machines.

## Coal Generator

![coal_generator](../../img/industrial_elixir/machines/coal_generator_front.png)

Burns solid fuel (coal, charcoal, scrap, and other mod fuels) to generate **32 E/t** (Tier 1). Fuel burns at half the vanilla burn duration. It pushes up to 320 E/t to neighboring blocks and has an internal buffer of 40,000 E.

**Usage:** Put solid fuel in the fuel slot. The battery slot (slot 1) lets you charge/discharge a battery.

## Fluid Generator

![fluid_generator](../../img/industrial_elixir/machines/fluid_generator_front.png)

Burns fluids to produce energy. Internal buffer: 10,000 E.

| Fluid | Consumption | Output |
|-------|-------------|--------|
| Lava | 2 mB/t | 20 E/t |
| Water | 1 mB/t | 1 E/t |
| Hot Spring | 1 mB/t | 1 E/t |

**Usage:** Supply the fluid via a fluid pipe or by placing a bucket/cell in the input slot.


<AdUnit />

## Solar Panels

Solar panels produce energy passively during the day (and some at night for higher tiers). They have no fuel requirement. Each has 4 battery slots to discharge into batteries.

| Panel | Tier | Day Power | Night Power | Capacity | Photo |
|-------|------|-----------|-------------|----------|-------|
| Solar Panel | Tier 1 | 1 E/t | 0 E/t | 1,000 E | ![generator_solar_panel](../../img/industrial_elixir/machines/generator_solar_panel_top.png) |
| Advanced Solar Panel | Tier 2 | 8 E/t | 1 E/t | 10,000 E | ![generator_advanced_solar_panel](../../img/industrial_elixir/machines/generator_advanced_solar_panel_top.png) |
| Hybrid Solar Panel | Tier 3 | 64 E/t | 8 E/t | 100,000 E | ![generator_hybrid_solar_panel](../../img/industrial_elixir/machines/generator_hybrid_solar_panel_top.png) |
| Ultimate Solar Panel | Tier 4 | 512 E/t | 64 E/t | 1,000,000 E | ![generator_ultimate_solar_panel](../../img/industrial_elixir/machines/generator_ultimate_solar_panel_top.png) |
| Quantum Solar Panel | Tier 5 | 4096 E/t | 2048 E/t | 10,000,000 E | ![generator_quantum_solar_panel](../../img/industrial_elixir/machines/generator_quantum_solar_panel_top.png) |

**Usage:** Place in a location exposed to the sky. Connect cables to the output, or place batteries in the battery slots.

## Wind Mill

![generator_wind_mill](../../img/industrial_elixir/machines/generator_wind_mill_front.png)

Generates power based on wind strength. Must be placed **above Y=64**. Power scales with:
- Height (higher = more power)
- Obstacles (blocks counted in a 9×9×7 area)
- Weather (thunder > rain > clear)

Wind strength drifts randomly between 0 and 30. Internal capacity: 100 E.

> ⚠️ **Danger:** If wind power is ≥ 15 there is a small chance the wind mill **breaks** and transforms into a Coal Generator, dropping iron ingots.

<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>
