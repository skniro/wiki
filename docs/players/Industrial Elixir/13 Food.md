# Food & Drinks

The mod's food content revolves around **coffee**. Grow coffee beans, brew coffee drinks, and enjoy temporary buffs.

## Coffee Beans

![coffee_beans](../../img/industrial_elixir/items/coffee_beans.png)

Coffee beans are a food (1 nutrition, 0.1 saturation) and also a **seed item** for the coffee crop.

**Usage:** Right-click on dirt, grass, podzol, sand, or farmland to plant a coffee crop. The crop grows through 4 stages (`age` 0–3). Harvesting a fully-grown crop drops **2–3 coffee beans** (stage 2 drops 1–2).

### Coffee Crop Growth

The coffee crop is a `CoffeeBlock` that you plant with coffee beans. It matures over time and can be harvested with the beans.


<AdUnit />

## Coffee Drinks

All coffee drinks are **drinks** (drink animation), stack to 1, are always edible, and place a decorative cup block when used. Each grants unique status effects.

| Drink | Nutrition / Sat | Effects | Photo |
|-------|-----------------|---------|-------|
| Americano (`coffee_black`) | 4 / 0.6 | Speed II (120s), Haste I (60s) |
| Cappuccino | 9 / 1.2 | Speed II (90s), Regeneration I (15s) |
| Latte | 7 / 1.0 | Speed I (60s) | ![latte](../../img/industrial_elixir/items/latte.png) |
| Mocha | 10 / 1.3 | Speed II (120s), Regeneration I (30s) |
| Hot Cocoa | 6 / 1.0 | Resistance I (20s), Regeneration I (30s) |

## Making Coffee

Use the **Coffee Machine** (see [Fluid Processing](./05%20Fluid%20Processing)) to brew drinks. Each recipe consumes 1000 mB of water.
> **Note:** see the machine recipe list.

## Vendor Machine Decorations

The **Vendor Machine** block model displays decorative food items on its shelves — sushi (salmon, cod roe, baked), dango (sanshoku, anko), fruit juices (chorus, sweet berries, glow berries), and milk. These are **decorative textures only**, not obtainable items in the mod.

<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>
