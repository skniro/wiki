# Heat & Reactors

These blocks deal with the **Heat** system and nuclear power. Heaters produce Heat; heat machines (like the Blast Furnace) consume it; reactors generate energy and must be cooled.

## Heat System

Heat is a separate resource from energy. It is produced by heaters and pushed to the block in front of them. Heat machines must be fully heated before they work.

## Electric Heater

![electric_heater](../../img/industrial_elixir/machines/electric_heater_front.png)

Converts **energy into Heat**. Tier 4 machine (capacity 3000 E).

**Usage:** Insert **Coil** items into the 10 coil slots. Each Coil converts **10 E → 10 Heat per tick**. The heater pushes heat out its facing side to an adjacent heat machine.

## Solid Fuel Heater

![solid_fuel_heater_generator](../../img/industrial_elixir/machines/solid_fuel_heater_generator_front.png)

Burns solid fuel to produce **10 Heat/tick** (pauses when heat is full). Tier 1 machine.

**Usage:** Put solid fuel in the input slot. Ashes are produced as a byproduct in the output slot. Pushes heat out its facing side.


<AdUnit />

## Blast Furnace

![blast_furnace](../../img/industrial_elixir/machines/blast_furnace_front.png)

A heat + fluid-consuming smelter. Tier 1 machine. Must reach **50,000 Heat** to work; receives heat from a heater placed in front of it. Consumes fluid per recipe (e.g. compressed air) and outputs up to 2 slots. Process time: 6000 ticks.

### Recipes

| Input | Primary Output | Secondary Output | Fluid |
|-------|----------------|------------------|-------|
| Iron Ingot | Steel Ingot | Slag | Compressed Air (1000 mB) |
| Glass Pane | Empty Vessel | — | Compressed Air (1000 mB) |

## Sacred Generator (Sacred Reactor)

![sacred_generator](../../img/industrial_elixir/machines/sacred_generator_front.png)

A 3×3 reactor grid. Tier 3 output, capacity 4096 E.

**Usage:**
1. Needs a **redstone signal** and a fuel rod in the **center slot** (index 4).
2. Produces `rodCount × 128` E per pulse and generates heat.
3. The 8 outer slots hold cooling components (coolant cells, heat vents, heat exchangers) that dissipate heat and take durability.
4. 4 battery slots (10–13).

> ⚠️ **Danger:** If heat reaches **5000** the reactor **melts down** with a 100-radius explosion. Keep it cooled!

### Reactor Components

| Component | Purpose | Photo |
|-----------|---------|-------|
| Sacred Essence | Fuel rod (4 rods), durability 20000 | ![sacred_essence](../../img/industrial_elixir/items/sacred_essence.png) |
| Sacred Shard | Fuel rod (8 rods), durability 20000 | ![sacred_shard](../../img/industrial_elixir/items/sacred_shard.png) |
| Sacred Core | Fuel rod (16 rods), durability 20000 | ![sacred_core](../../img/industrial_elixir/items/sacred_core.png) |
| 10k Coolant Cell | Cooling (12 cooling/t), durability 10000 | ![coolant_cell_10k](../../img/industrial_elixir/items/coolant_cell_10k.png) |
| 30k Coolant Cell | Cooling (12 cooling/t), durability 30000 | ![coolant_cell_30k](../../img/industrial_elixir/items/coolant_cell_30k.png) |
| 60k Coolant Cell | Cooling (12 cooling/t), durability 60000 | ![coolant_cell_60k](../../img/industrial_elixir/items/coolant_cell_60k.png) |
| Heat Vent | Venting (6 cooling/t), durability 1000 | ![heat_vent](../../img/industrial_elixir/items/heat_vent.png) |
| Advanced Heat Vent | Venting (12 cooling/t), durability 1000 | ![advanced_heat_vent](../../img/industrial_elixir/items/advanced_heat_vent.png) |
| Overclocked Heat Vent | Venting, durability 1000 | ![overclocked_heat_vent](../../img/industrial_elixir/items/overclocked_heat_vent.png) |

<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>
