# Equipment

Industrial Elixir adds bronze armor and tools, powerful quantum armor, and an electric jetpack.

## Bronze Equipment

Bronze is an early-mid tier material (iron harvest level).

### Bronze Tools

| Tool | Durability | Attack Damage | Speed | Photo |
|------|-----------|---------------|-------|-------|
| Bronze Sword | 340 | 5.0 | −2.4 | ![bronze_sword](../../img/industrial_elixir/items/bronze_sword.png) |
| Bronze Shovel | 340 | 3.5 | −3.0 | ![bronze_shovel](../../img/industrial_elixir/items/bronze_shovel.png) |
| Bronze Pickaxe | 340 | 3.0 | −2.8 | ![bronze_pickaxe](../../img/industrial_elixir/items/bronze_pickaxe.png) |
| Bronze Axe | 340 | 8.0 | −3.1 | ![bronze_axe](../../img/industrial_elixir/items/bronze_axe.png) |
| Bronze Hoe | 340 | 0.0 | −1.0 | ![bronze_hoe](../../img/industrial_elixir/items/bronze_hoe.png) |

- **Tool material stats:** durability 340, mining speed 6.0, attack damage bonus 2.0, enchantability 14, iron harvest level.
- Repaired with bronze ingots (`bronze_tool_materials` tag).

### Bronze Armor

| Piece | Defense | Photo |
|-------|---------|-------|
| Bronze Helmet | 2 | ![bronze_helmet](../../img/industrial_elixir/items/bronze_helmet.png) |
| Bronze Chestplate | 6 | ![bronze_chestplate](../../img/industrial_elixir/items/bronze_chestplate.png) |
| Bronze Leggings | 5 | ![bronze_leggings](../../img/industrial_elixir/items/bronze_leggings.png) |
| Bronze Boots | 2 | ![bronze_boots](../../img/industrial_elixir/items/bronze_boots.png) |

- **Armor material stats:** durability multiplier 15, enchantability 9, no toughness, no knockback resistance.
- Repaired with bronze ingots (`repairs_bronze_armor` tag).


<AdUnit />

## Quantum Armor

The **Quantum Suit** is the top-tier powered armor. Each piece stores **10,000,000 E**, charges at **Tier 5 (8192 E/t)**, and is unbreakable. Its cyan durability bar shows its energy level.

| Piece | Base Defense | Photo |
|-------|--------------|-------|
| Quantum Helmet | 4 | ![quantum_helmet](../../img/industrial_elixir/items/quantum_helmet.png) |
| Quantum Chestplate | 10 | ![quantum_chestplate](../../img/industrial_elixir/items/quantum_chestplate.png) |
| Quantum Leggings | 7 | ![quantum_leggings](../../img/industrial_elixir/items/quantum_leggings.png) |
| Quantum Boots | 4 | ![quantum_boots](../../img/industrial_elixir/items/quantum_boots.png) |

- **Armor material stats:** durability multiplier 37, enchantability 25, toughness 5.0, knockback resistance 0.1, full-set armor 37.
- When powered, each piece grants bonus armor/toughness/knockback attributes; the Leggings also grant **+0.15 movement speed**.

### Piece Abilities

| Piece | Ability | Energy Cost |
|-------|---------|-------------|
| Helmet | Refills underwater air when low | 1,000 E per refill |
| Helmet | Refills hunger when ≤ 7 shanks | 10,000 E |
| Helmet | Removes Poison | 10,000 × (amplifier+1) E |
| Helmet | Removes Wither | 25,000 × (amplifier+1) E |
| Helmet | Toggleable Night Vision | 25,000 E to activate |
| Chestplate | Jetpack flight / hover | 25 E/t flight, 37 E/t hover |
| Chestplate | Clears fire | free |
| Leggings | Sprint speed ×3 (×9 on ice) | passive (needs power) |
| Leggings | Dolphin's Grace while swimming | passive (needs power) |
| Boots | Boosted jump | 1,000 E |
| Boots | Negates fall damage | (fallDist − 12) × 900 E |

### Damage Absorption

When powered, the armor absorbs incoming damage, spending energy instead of health. Each piece reduces damage (Helmet 15%, Chestplate 44%, Leggings 30%, Boots 15%) — the full set is effectively immune while energy lasts. Cost: `900 + 30 × damage` per piece.

## Electric Jetpack

![electric_jetpack](../../img/industrial_elixir/items/electric_jetpack.png)

A powered chestplate that lets you fly.

- **Capacity:** 300,000 E, **Tier 3** (512 E/t input), unbreakable.
- **Flight:** Hold jump to fly (25 E/t), double-tap for hover mode (37 E/t).
- Clears fire for free.
- Uses the same flight physics as the Quantum Chestplate (thrust up 0.30, forward 0.08, hover mode).


<AdUnit />

## Keybinds & Controls

The mod adds an **Industrial Elixir** category to the Controls menu (Options → Controls… → Key Binds). It registers three keys, all used as *modifiers* for powered-armor abilities:

| Key Bind | Default Key | Description |
|----------|-------------|-------------|
| Mode Switch Key | `M` | Modifier for armor abilities |
| ALT Key | `Left Alt` | Modifier for armor abilities |
| Boost Key | `Left Control` | Modifier for armor abilities |

### Key Combinations

| Combination | Action | Requires |
|-------------|--------|----------|
| Hold `M` + press `Left Alt` | Toggle Night Vision on/off | Quantum Helmet (25,000 E) |
| Hold `Left Ctrl` + press `Space` | Boost Jump | Quantum Boots (1,000 E) |
| Hold `M` + press `Space` | Toggle Hover mode on/off | Quantum Chestplate / Electric Jetpack |
| Hold `Space` / `W` / `A` / `D` | Jetpack thrust / forward / strafe | Quantum Chestplate / Electric Jetpack |

While wearing the Quantum Chestplate or Electric Jetpack, holding `Space` (jump) thrusts you upward, `W` moves you forward, and `A`/`D` strafe — these inputs are sent to the server to drive the flight physics.

## Boats & Signs

The mod adds rubber wood water vehicles and signs:

| Item | Use | Photo |
|------|-----|-------|
| Rubber Boat | Regular boat | ![rubber_boat](../../img/industrial_elixir/items/rubber_boat.png) |
| Rubber Chest Boat | Boat with chest | ![rubber_chest_boat](../../img/industrial_elixir/items/rubber_chest_boat.png) |
| Rubber Sign | Placeable sign | ![rubber_sign](../../img/industrial_elixir/items/rubber_sign.png) |
| Rubber Hanging Sign | Hanging sign | ![rubber_hanging_sign](../../img/industrial_elixir/items/rubber_hanging_sign.png) |

## Hand Tools

| Item | Use | Photo |
|------|-----|-------|
| Hammer | Rolling operation (durability 80) | ![tool_rolling](../../img/industrial_elixir/items/tool_rolling.png) |
| Cutter | Cutting operation (durability 80) | ![tool_cutting](../../img/industrial_elixir/items/tool_cutting.png) |

<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>
