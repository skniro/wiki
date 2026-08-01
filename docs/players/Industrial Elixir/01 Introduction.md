# Skniro's Industrial Elixir

**Skniro's Industrial Elixir** is a Minecraft tech mod for **Fabric** and **NeoForge** that adds a wide range of industrial machinery, an EU-style energy system, fluids, pipes, ore processing, and even farmable ores.

## Features

- **Energy System** – Multi-tier EU-style power with cables (tin, copper, gold, HV, glass fiber), batteries, transformers, and energy storage boxes (Energy Box, CESU, MFE, MFSU).
- **Power Generation** – Coal generators, fluid generators, wind mills, solar panels (up to quantum tier), nuclear reactors, sacred generators, and more.
- **Ore Processing** – Macerator, compressor, metal former, extractor, ore washing, heat centrifuge, induction furnace, blast furnace, and a full crushed/purified dust processing chain.
- **Fluids & Pipes** – Wood and stone fluid pipes, item pipes, fluid tanks, fluid generators, and automatic fluid transport.
- **Advanced Machines** – Molecular transformer, replicator, matter generator, recycler, cutting machine, chunk loader, crop farm, coffee machine, vendor machine, and a brewing/alchemy system.
- **Nuclear & Sacred Reactors** – Reactor components including fuel rods, coolant cells, heat vents, neutron reflectors, and plating.
- **Growable Ores** – Farm ore materials as crops instead of mining them.

## Energy Basics

Energy is measured in **EP** (the mod's EU-style unit). Different machines, cables, batteries, and generators operate on different **energy tiers**:

| Tier | Max Input/Output |
|------|------------------|
| Tier 1 | 32 E/t |
| Tier 2 | 128 E/t |
| Tier 3 | 512 E/t |
| Tier 4 | 2048 E/t |
| Tier 5 | 8192 E/t |
| Infinite | `Integer.MAX_VALUE` |

Every machine can be upgraded with up to four **upgrade modules** to change its speed, power tier, storage, or redstone behavior.

## Getting Started

1. **Smelt ore** to get copper, tin, lead, bronze, silver, and steel ingots.
2. **Build a Macerator** to turn ores into crushed ores, then use an **Ore Washing** machine and **Heat Centrifuge** to get pure dusts.
3. **Build a Metal Former** to roll ingots into plates and cut plates into cables.
4. **Make batteries and cables** to store and transport the energy produced by your first **Coal Generator**.
5. **Upgrade your power** with solar panels, wind mills, energy boxes, and finally the nuclear / sacred reactors.

## Contents

| Guide | Description |
|---|---|
| [Energy System](./02%20Energy%20System) | Cables, batteries, storage boxes, charge pads, transformers, pipes |
| [Power Generation](./03%20Power%20Generation) | Coal, fluid, solar, wind generators |
| [Processing Machines](./04%20Processing%20Machines) | Macerator, compressor, metal former, furnaces and more |
| [Fluid Processing](./05%20Fluid%20Processing) | Ore washing, brew reactor, coffee machine, replicator, matter generator |
| [Advanced Machines](./06%20Advanced%20Machines) | Molecular transformer, pattern storage, crop farm, vendor machine |
| [Heat & Reactors](./07%20Heat%20and%20Reactors) | Heaters, blast furnace, nuclear reactor, sacred reactor |
| [Items & Materials](./08%20Items%20and%20Materials) | Every item and what it does |
| [Crafting Recipes](./09%20Crafting%20Recipes) | All crafting-table recipes |
| [World Generation](./10%20World%20Generation) | Ores, rubber tree, structures, loot tables |
| [Fluids](./11%20Fluids) | UU-Matter, compressed air, hot spring |
| [Equipment](./12%20Equipment) | Bronze & quantum armor, tools, jetpack |
| [Food](./13%20Food) | Coffee beans and coffee drinks |

<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>
