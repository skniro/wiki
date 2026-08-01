# Advanced Machines

These machines provide advanced automation and high-tier functionality.

## Molecular Transformer

![molecular_transformer_block](../../img/industrial_elixir/machines/molecular_transformer_block_front.png)

A high-tier energy sink that transforms items into other items by accumulating raw energy. Tier 5 machine.

**Usage:** Unlike normal machines, the Molecular Transformer does **not** use tick-based progress. It accumulates energy until the recipe's required energy is reached, then outputs the result. Insert the input item and supply enough energy.

### Recipes

| Input | Output | Energy Required |
|-------|--------|-----------------|
| Tin Ingot | Silver Ingot | 500,000 E |
| Wither Skeleton Skull | Nether Star | 250,000,000 E |
| Netherrack | Gunpowder ×2 | 70,000 E |
| Glowstone Dust | Luminite Component | 1,000,000 E |
| Iron Ingot | Iridium Ore | 9,000,000 E |
| Red Wool | Redstone Block | 500,000 E |
| Blue Wool | Lapis Block | 500,000 E |
| Industrial Diamond | Diamond | 1,000,000 E |
| Charcoal | Coal | 60,000 E |
| Coal | Industrial Diamond | 9,000,000 E |
| Silver Ingot | Gold Ingot | 500,000 E |
| Dirt | Clay | 50,000 E |
| Sand | Gravel | 50,000 E |
| Yellow Wool | Glowstone | 500,000 E |


<AdUnit />

## Pattern Storage

![pattern_storage](../../img/industrial_elixir/machines/pattern_storage_front.png)

Scans an item into a **Pattern Storage Crystal** so it can be duplicated by the Replicator. Tier 2 machine.

**Usage:**
1. Place a **Raw Pattern Storage Crystal** in the input slot and the item to scan in the item slot.
2. The machine writes the item's data plus its UU-matter cost and energy cost into the crystal.
3. The scan takes 120 ticks and costs 64 E/t.
4. The crystal can also be used to copy existing patterns.

## Chunk Loader

![chunk_loader](../../img/industrial_elixir/machines/chunk_loader_top.png)

Force-loads chunks so machines keep running when you are away. Tier 2 machine.

**Usage:** Place the Chunk Loader and open its GUI. Toggle which chunks in the 5×5 grid around it are loaded (the center chunk is always loaded). Cost: **1 E/t per loaded chunk**.


<AdUnit />

## Crop Farm

![crop_farm](../../img/industrial_elixir/machines/crop_farm_front.png)

Automatically grows and harvests crops. Tier 3 machine. Recipe-driven; can output to 3 output slots.

**Usage:** Insert a seed/crop in the input slot and power the machine. It produces a steady stream of the crop and byproducts. The recipe's process time sets the speed.

### Recipes

| Input | Primary Output | Secondary Output | Tertiary Output | Process Time |
|-------|----------------|------------------|-----------------|--------------|
| Wheat Seeds | Wheat ×3 | Wheat Seeds | — | 600 |
| Carrot | Carrot ×3 | — | — | 600 |
| Potato | Potato ×3 | — | — | 600 |
| Beetroot Seeds | Beetroot ×3 | Beetroot Seeds | — | 600 |
| Sugar Cane | Sugar Cane ×2 | — | — | 2400 |
| Cactus | Cactus ×1 | — | — | 2400 |
| Bamboo | Bamboo ×9 | — | — | 1800 |
| Cocoa Beans | Cocoa Beans ×3 | — | — | 800 |
| Pumpkin Seeds | Pumpkin ×1 | Pumpkin Seeds | — | 1200 |
| Melon Seeds | Melon Seeds ×1 | Melon Slice ×9 | — | 1200 |
| Nether Wart | Nether Wart ×3 | — | — | 800 |
| Bronze Ore Cane | Bronze Ore Cane | — | — | 2400 |
| Steel Ore Cane | Steel Ore Cane | — | — | 3000 |
| Silver Ore Cane | Silver Ore Cane | — | — | 2400 |
| Tin Ore Cane | Tin Ore Cane | — | — | 2400 |
| Sacred Ore Cane | Sacred Ore Cane | — | — | 2400 |
| Lead Ore Cane | Lead Ore Cane | — | — | 2400 |
| Oak Sapling | Oak Sapling | Oak Log ×5 | Apple ×1 | 1600 |
| Pale Oak Sapling | Pale Oak Sapling | Pale Oak Log ×5 | Resin Clump ×1 | 1600 |
| Spruce Sapling | Spruce Sapling | Spruce Log ×6 | — | 1600 |
| Birch Sapling | Birch Sapling | Birch Log ×5 | — | 1600 |
| Jungle Sapling | Jungle Sapling | Jungle Log ×6 | — | 1000 |
| Acacia Sapling | Acacia Sapling | Acacia Log ×5 | — | 1000 |
| Dark Oak Sapling | Dark Oak Sapling ×2 | Dark Oak Log ×10 | — | 1000 |
| Mangrove Propagule | Mangrove Propagule | Mangrove Log ×6 | — | 1000 |
| Cherry Sapling | Cherry Sapling | Cherry Log ×6 | — | 1000 |
| Crimson Fungus | Crimson Fungus | Crimson Stem ×8 | — | 1000 |
| Warped Fungus | Warped Fungus | Warped Stem ×8 | — | 1000 |
| Chorus Flower | Chorus Flower | Chorus Fruit ×4 | — | 1200 |
| Torchflower Seeds | Torchflower Seeds | Torchflower ×1 | — | 600 |
| Pitcher Pod | Pitcher Pod | Pitcher Plant ×1 | — | 600 |
| Rubber Sapling | Rubber ×3 | Rubber Log ×6 | Rubber Sapling | 600 |

## Vendor Machine

A villager-style **Merchant** block that trades mod items for **emeralds**. It does not require energy.

**Usage:** Right-click to open the trade menu. The machine generates 20 random weighted trades from a large pool of mod items. Spend emeralds to buy items.

<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>
