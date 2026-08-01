# Energy System

Industrial Elixir uses a multi-tier EU-style energy system. Energy is stored in batteries and energy boxes, transported through cables, and produced by generators.

## Cables

Cables transport energy between generators, storage, and machines. Uninsulated cables **can electrocute you** when running power; insulated cables are safe.

| Cable | Transfer Rate | Tier | Insulated? | Photo |
|-------|---------------|------|------------|-------|
| Tin Cable | 32 E/t | Tier 1 | No (shocks) | ![tin_cable](../../img/industrial_elixir/cables/tin_cable.png) |
| Copper Cable | 128 E/t | Tier 2 | No (shocks) | ![copper_cable](../../img/industrial_elixir/cables/copper_cable.png) |
| Gold Cable | 512 E/t | Tier 3 | No (shocks) | ![gold_cable](../../img/industrial_elixir/cables/gold_cable.png) |
| HV Cable | 2048 E/t | Tier 4 | No (shocks) | ![hv_cable](../../img/industrial_elixir/cables/hv_cable.png) |
| Glass Fiber Cable | 8192 E/t | Tier 5 | Yes | ![glassfiber_cable](../../img/industrial_elixir/cables/glassfiber_cable.png) |
| Insulated Tin Cable | 32 E/t | Tier 1 | Yes | ![insulated_tin_cable](../../img/industrial_elixir/cables/insulated_tin_cable.png) |
| Insulated Copper Cable | 128 E/t | Tier 2 | Yes | ![insulated_copper_cable](../../img/industrial_elixir/cables/insulated_copper_cable.png) |
| Insulated Gold Cable | 512 E/t | Tier 3 | Yes | ![insulated_gold_cable](../../img/industrial_elixir/cables/insulated_gold_cable.png) |
| Insulated HV Cable | 2048 E/t | Tier 4 | Yes | ![insulated_hv_cable](../../img/industrial_elixir/cables/insulated_hv_cable.png) |

**Usage:** Place cables to connect generators, batteries, energy boxes, and machines. All cables of the same transfer rate share a unified energy pool across the network, so power is balanced automatically. Each cable can buffer `transferRate × 4` energy.

## Batteries

Batteries store energy and can be charged in generators, energy boxes, and charge pads. They also power handheld tools and armor.

| Battery | Capacity | Tier | Photo |
|---------|----------|------|-------|
| RE Battery | 10,000 E | Tier 1 | ![re_battery](../../img/industrial_elixir/items/re_battery_4.png) |
| Advanced RE Battery | 100,000 E | Tier 2 | ![advanced_re_battery](../../img/industrial_elixir/items/advanced_re_battery_4.png) |
| Energy Crystal | 1,000,000 E | Tier 3 | ![energy_crystal](../../img/industrial_elixir/items/energy_crystal_4.png) |
| Lapotron Crystal | 10,000,000 E | Tier 4 | ![lapotron_crystal](../../img/industrial_elixir/items/lapotron_crystal_4.png) |

Batteries show a cyan-blue energy durability bar. Place them in a machine's **battery slot** to power it, or in a charge pad to recharge them wirelessly.


<AdUnit />

## Energy Boxes

Energy boxes store large amounts of energy and charge/discharge batteries. The **front face accepts energy only**; the other faces output energy.

| Block | Capacity | Tier | Photo |
|-------|----------|------|-------|
| Energy Box | 40,000 E | Tier 1 | ![energy_box](../../img/industrial_elixir/machines/energy_box_front.png) |
| CESU | 300,000 E | Tier 2 | ![cesu](../../img/industrial_elixir/machines/cesu_front.png) |
| MFE | 4,000,000 E | Tier 3 | ![mfe](../../img/industrial_elixir/machines/mfe_front.png) |
| MFSU | 40,000,000 E | Tier 4 | ![mfsu](../../img/industrial_elixir/machines/mfsu_front.png) |

## Charge Pads

Charge pads behave like energy boxes but **also wirelessly charge** any energy item (battery, jetpack, quantum armor, etc.) in the inventory of a player standing on top. The pad only charges items of a tier equal to or lower than the pad's tier.

| Block | Capacity | Tier | Photo |
|-------|----------|------|-------|
| Charge Pad | 40,000 E | Tier 1 | ![charge_pad](../../img/industrial_elixir/machines/charge_pad_front.png) |
| Charge Pad (CESU) | 300,000 E | Tier 2 | ![charge_pad_cesu](../../img/industrial_elixir/machines/charge_pad_cesu_front.png) |
| Charge Pad (MFE) | 4,000,000 E | Tier 3 | ![charge_pad_mfe](../../img/industrial_elixir/machines/charge_pad_mfe_front.png) |
| Charge Pad (MFSU) | 40,000,000 E | Tier 4 | ![charge_pad_mfsu](../../img/industrial_elixir/machines/charge_pad_mfsu_front.png) |

## Transformers

LV, MV, HV, and EV transformers are currently **decorative blocks** — they have a working front face model but no energy-transformation logic yet.

| Block | Tier | Photo |
|-------|------|-------|
| LV Transformer | Tier 1 | ![lv_transformer](../../img/industrial_elixir/machines/lv_transformer_front.png) |
| MV Transformer | Tier 2 | ![mv_transformer](../../img/industrial_elixir/machines/mv_transformer_front.png) |
| HV Transformer | Tier 3 | ![hv_transformer](../../img/industrial_elixir/machines/hv_transformer_front.png) |
| EV Transformer | Tier 4 | ![ev_transformer](../../img/industrial_elixir/machines/ev_transformer_front.png) |


<AdUnit />

## Upgrade Modules

Most processing machines have **4 upgrade slots**. Install upgrade modules to modify behavior.

| Upgrade | Effect | Photo |
|---------|--------|-------|
| Overclocker Upgrade | Speed **−30%** per item, Power **+60%** per item | ![overclocker](../../img/industrial_elixir/items/overclocker.png) |
| Energy Storage Upgrade | Adds **+10,000 E** storage per item | ![energy_storage](../../img/industrial_elixir/items/energy_storage.png) |
| Transformer Upgrade | Raises the energy tier by **+1** per item | ![transformer](../../img/industrial_elixir/items/transformer.png) |
| Redstone Inverter Upgrade | Inverts the redstone signal | ![redstone_inverter](../../img/industrial_elixir/items/redstone_inverter.png) |

## Fluid Pipes

Fluid pipes move fluids between tanks and fluid machines.

| Pipe | Function | Photo |
|------|----------|-------|
| Wooden Fluid Pipe | **Extracts** fluids from tanks/machines and from fluid source blocks | ![pipe_wooden_fluid](../../img/industrial_elixir/pipes/pipe_wooden_fluid.png) |
| Stone Fluid Pipe | **Transports** fluids; does not extract | ![pipe_stone_fluid](../../img/industrial_elixir/pipes/pipe_stone_fluid.png) |

## Fluid Tank

![fluid_tank](../../img/industrial_elixir/machines/fluid_tank_front.png)

The Fluid Tank stores **16 buckets (16,000 mB)** of a single fluid. Right-click with a bucket (e.g. water or lava) to fill it, and empty a bucket to drain it. It automatically fills and empties fluid cells and buckets through its inventory slots. The GUI shows the fill ratio.

See [Fluids](./11%20Fluids) for the mod's three custom fluids.

<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>
