# Fluid Processing

Fluid machines use and/or produce fluids. They each have a built-in fluid tank (about 16 buckets) plus slots for fluid cells. Most consume **1000 mB (1 bucket)** of fluid per craft.

See [Fluids](./10%20Fluids) for details on UU-Matter, Compressed Air, and Hot Spring.

## Ore Washing

![ore_washing_block](../../img/industrial_elixir/machines/ore_washing_block_front.png)

Washes **crushed ores** into **purified ores** using water. Tier 1 machine. Can output to 3 output slots.

**Usage:** Supply **water** (via a fluid pipe, cells, or bucket) and insert crushed ore. Consumes 1000 mB water per craft.

### Recipes

| Input | Primary Output | Secondary Output | Tertiary Output |
|-------|----------------|------------------|-----------------|
| Crushed Copper | Purified Copper | Small Copper Dust | Stone Dust |
| Crushed Gold | Purified Gold | Small Gold Dust | Stone Dust |
| Crushed Iron | Purified Iron | Small Iron Dust | Stone Dust |
| Crushed Lead | Purified Lead | Small Lead Dust | Stone Dust |
| Crushed Silver | Purified Silver | Small Silver Dust | Stone Dust |
| Crushed Tin | Purified Tin | Small Tin Dust | Stone Dust |
| Crushed Sacred | Purified Sacred | — | Stone Dust |

## Brew Reactor

![brew_reactor_tank](../../img/industrial_elixir/machines/brew_reactor_tank_front.png)

A two-input fluid-consuming recipe machine that brews powerful potions. Tier 1 machine.

**Usage:** Place a **glass bottle** plus the required ingredient, and supply **water** (1000 mB per craft). Some recipes use an **Empty Vessel** instead.


<AdUnit />

### Potion Recipes (require glass bottle + water)

| Ingredient | Output Potion |
|------------|---------------|
| Rabbit Foot | Super Leaping (Jump Boost IV) |
| Sugar | Super Swiftness (Speed IV) |
| Rabbit Foot | Super Slowness (Slowness VI) |
| Turtle Helmet | Super Turtle Master (Slowness VIII + Resistance VI) |
| Fermented Spider Eye | Super Healing (Instant Health IV) |
| Glistering Melon Slice | Super Harming (Instant Damage IV) |
| Spider Eye | Super Poison (Poison IV) |
| Ghast Tear | Super Regeneration (Regeneration IV) |
| Blaze Powder | Super Strength (Strength IV) |
| Breeze Rod | Wind Charged |
| Cobweb | Weaving |
| Slime Block | Oozing |
| Stone | Infested |

### Other Recipes

| Input 1 | Input 2 | Output |
|---------|---------|--------|
| Impure Sacred Stone | Empty Vessel | Sacred Essence |


<AdUnit />

## Coffee Machine

![coffee_machine_block](../../img/industrial_elixir/machines/coffee_machine_block_front.png)

Brews coffee drinks using **water**. Tier 1 machine.

**Usage:** Insert the ingredients and supply water (1000 mB per craft).

### Recipes

| Ingredient(s) | Output | Effects |
|---------------|--------|---------|
| Coffee Beans | Americano | Speed II (120s), Haste I (60s) |
| Milk Bucket + Coffee Beans + Sugar | Cappuccino | Speed II (90s), Regeneration I (15s) |
| Milk Bucket + Coffee Beans | Latte | Speed I (60s) |
| Coffee Beans + Cocoa Beans + Milk Bucket | Mocha | Speed II (120s), Regeneration I (30s) |
| Cocoa Beans | Hot Cocoa | Resistance I (20s), Regeneration I (30s) |

## Matter Generator

![matter_generator](../../img/industrial_elixir/machines/matter_generator_front.png)

Produces **UU-Matter** fluid from energy. Tier 3 machine.

**Usage:** Supply energy. The machine converts **1,000,000 E per 1 mB** of UU-Matter. Placing **Scrap** in the input slot boosts production by **5×** (up to 5000 scrap-amplifier). UU-Matter can be bottled into cells.

## Replicator

![replicator](../../img/industrial_elixir/machines/replicator_front.png)

Duplicates any item that has been scanned into a **Pattern Storage Crystal**. Tier 4 machine.

**Usage:**
1. Scan an item into a **Pattern Storage Crystal** first (see [Advanced Machines](./06%20Advanced%20Machines)).
2. Insert the crystal into the Replicator's crystal slot.
3. Supply **UU-Matter fluid** and energy; both are drawn continuously until the pattern's UU-cost and energy-cost are met.
4. Three modes are available: **STOP / SINGLE / LOOP** (toggle via GUI button).

Replication costs per item are defined by the mod's Replicator Value Map (e.g. Rubber 101 UU, Iridium Shard 13 UU, Iridium Plate 520 UU, Scrap 1 UU).

<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>
