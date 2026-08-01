# Crafting Recipes

This page lists all crafting-table recipes in Industrial Elixir. Pattern letters map to the ingredients listed below each recipe.

## Machines

### Coal Generator
```
 E
SSS
 G
```
- E = RE Battery, G = Iron Furnace (or Furnace), S = Iron Plate

### Solar Panel
```
EGE
GEG
CSC
```
- G = Glass, E = Coal Dust, S = Coal Generator, C = Circuit

### Wind Mill
```
G G
 S
G G
```
- G = Iron Ingot, S = Coal Generator

### Compressor
```
G G
GSG
GCG
```
- G = Stone, S = Machine, C = Circuit

### Extractor
```
   
GSG
GCG
```
- G = Sticky Resin, S = Machine, C = Circuit

### Iron Furnace
```
 G
G G
GCG
```
- G = Iron Plate, C = Furnace

### Macerator
```
FFF
GSG
 C
```
- F = Flint, G = Stone, S = Machine, C = Circuit

### Metal Former
```
 C
GSG
FFF
```
- C = Circuit, G = Bronze Casing, S = Machine, F = Coil

### Electric Furnace
```
   
 C
RGR
```
- C = Circuit, R = Redstone, G = Iron Furnace

### Induction Furnace
```
CAC
EAE
CMC
```
- C = Copper Plate, A = Advanced Circuit, E = Electric Furnace, M = Advanced Machine

### Recycler
```
 C
DGD
RDR
```
- C = Glowstone Dust, D = Dirt, G = Compressor, R = Iron Ingot

### Cutting Block
```
 C
 G
 R
```
- C = Circuit, G = Machine, R = Electric Motor

### Ore Washing Block
```
III
BGB
RCR
```
- I = Iron Plate, B = Bucket, G = Machine, R = Electric Motor, C = Circuit

### Brew Reactor Tank
```
III
IGI
ICI
```
- I = Iron Casing, G = Brewing Stand, C = Circuit

### Blast Furnace
```
III
IGI
ICI
```
- I = Iron Casing, G = Machine, C = Heat Conductor

### Heat Centrifuge
```
CLC
IGI
IMI
```
- C = Coil, L = Lapotron Crystal, I = Iron Ingot, G = Advanced Machine, M = Electric Motor

### Matter Generator
```
ICI
GLG
ICI
```
- I = Glowstone, C = Advanced Circuit, G = Advanced Machine, L = Lapotron Crystal

### Replicator
```
RGR
SSS
CDC
```
- R = Reinforced Stone, G = Reinforced Glass, S = Super Machine, D = MFE, C = HV Transformer

### Pattern Storage
```
RRR
PMP
LCL
```
- R = Reinforced Stone, P = Pattern Storage Crystal, M = Advanced Machine, L = Lapotron Crystal, C = Advanced Circuit

### Chunk Loader
```
TET
LML
TCT
```
- T = Tin Plate, E = Ender Pearl, L = Lapis Lazuli, M = Machine, C = Circuit

### Fluid Generator
```
GTG
GTG
IMI
```
- G = Glass, T = Empty Cell, I = Iron Casing, M = Coal Generator

### Electric Heater
```
IBI
ICI
IHI
```
- I = Iron Casing, B = RE Battery, C = Circuit, H = Heat Conductor

### Solid Fuel Heater
```
 H
III
 C
```
- H = Heat Conductor, I = Iron Plate, C = Iron Furnace

### Sacred Generator
```
LCL
MAM
LGL
```
- L = Dense Lead Plate, C = Advanced Circuit, M = Machine, A = Advanced Machine, G = Coal Generator

### Crop Farm
```
ACA
MSM
ALA
```
- A = Alloy Plate, C = Advanced Circuit, M = Advanced Machine, S = Super Machine, L = Lapotron Crystal

### Coffee Machine
```
ACA
IMI
ALA
```
- A = Iron Casing, C = Coffee Beans, I = Iron Plate, M = Machine, L = RE Battery

### Cane Converter (GrowableOres Block)
```
cIc
RFR
cIc
```
- c = Copper Ingot, I = Iron Block, R = Redstone, F = Furnace

## Energy Storage & Charge Pads

### Energy Box
```
GSG
FFF
GGG
```
- G = Planks, S = Insulated Tin Cable, F = RE Battery

### CESU
```
GSG
FFF
GGG
```
- G = Bronze Plate, S = Insulated Copper Cable, F = Advanced RE Battery

### MFE
```
SGS
GFG
SGS
```
- S = Insulated Gold Cable, G = Energy Crystal, F = Machine

### MFSU
```
GCG
GFG
GSG
```
- G = Lapotron Crystal, C = Advanced Circuit, F = MFE, S = Advanced Machine

### Charge Pads
```
   
CGC
FSF
```
- G = Stone Pressure Plate, C = Circuit, F = Rubber, S = Energy Box → Charge Pad / CESU → Charge Pad (CESU) / MFE → Charge Pad (MFE) / MFSU → Charge Pad (MFSU)

## Transformers

### LV Transformer
```
GFG
GCG
GFG
```
- G = Planks, F = Insulated Tin Cable, C = Coil

### MV Transformer
```
 F
 G
 F
```
- F = Insulated Copper Cable, G = Machine

### HV Transformer
```
 F
CGR
 F
```
- F = Insulated Gold Cable, G = MV Transformer, C = Circuit, R = Advanced RE Battery

### EV Transformer
```
 F
CGR
 F
```
- F = Insulated HV Cable, G = HV Transformer, C = Advanced Circuit, R = Lapotron Crystal

## Cables & Pipes

### Insulated Cables (shapeless)
| Output | Recipe |
|--------|--------|
| Insulated Copper Cable | Copper Cable + Rubber |
| Insulated Tin Cable | Tin Cable + Rubber |
| Insulated Gold Cable | Gold Cable + Rubber |
| Insulated HV Cable | HV Cable + Rubber |

### Glass Fiber Cable (×6)
```
GGG
ESE
GGG
```
- G = Glass, E = Energium Dust, S = Silver Dust

### Stone Fluid Pipe (×8)
```
   
CGC
 I
```
- C = Stone, G = Glass, I = Sticky Resin

### Wooden Fluid Pipe (×8)
```
   
CGC
 I
```
- C = Planks, G = Glass, I = Sticky Resin

### Fluid Tank
```
IEI
E E
IEI
```
- I = Iron Plate, E = Empty Cell

## Upgrade Modules

### Overclocker
```
   
GGG
SES
```
- G = Lapis Lazuli (or Lapis Block for ×6), E = Circuit, S = Insulated Copper Cable

### Energy Storage
```
GGG
SMS
GEG
```
- G = Glass, S = Insulated Gold Cable, M = MV Transformer, E = Circuit

### Transformer
```
GGG
SMS
GEG
```
- G = Planks, S = Insulated Copper Cable, M = RE Battery, E = Circuit

### Redstone Inverter
```
G G
 M
G G
```
- G = Tin Plate (or Dense Tin Plate for ×9), M = Lever

## Materials

### Alloy Ingot
```
III
BBB
TTT
```
- I = Iron Plate, B = Bronze Plate, T = Tin Plate

### Bronze Dust (×4)
```
RD
DD
```
- R = Tin Dust, D = Copper Dust

### Energium Dust
```
RDR
DRD
RDR
```
- R = Redstone, D = Diamond Dust

### Circuit
```
BBB
TIT
BBB
```
- B = Insulated Copper Cable, T = Redstone, I = Iron Plate

### Advanced Circuit
```
TBT
LIL
TBT
```
- T = Redstone, B = Glowstone Dust, L = Lapis Lazuli, I = Circuit

### Iridium Plate
```
TBT
BIB
TBT
```
- T = Iridium Ore, B = Alloy Plate, I = Diamond

### Carbon Fibre
```
II
II
```
- I = Coal Dust

### Carbon Mesh
```
II
```
- I = Carbon Fibre

### Coal Ball
```
III
IBI
III
```
- I = Coal Dust, B = Flint

### Coal Chunk
```
III
IBI
III
```
- I = Coal Ball, B = Iron Block

### RE Battery
```
 T
IBI
IBI
```
- T = Insulated Tin Cable, I = Iron Casing, B = Redstone

### Advanced RE Battery
```
TIT
IBI
ICI
```
- T = Insulated Copper Cable, I = Bronze Casing, B = Sulfur Dust, C = Lead Dust

### Lapotron Crystal
```
ITI
IBI
ITI
```
- T = Advanced Circuit, I = Lapis Dust, B = Energy Crystal

### Coil
```
III
ITI
III
```
- I = Copper Cable, T = Iron Ingot

### Machine
```
III
I I
III
```
- I = Iron Plate

### Advanced Machine
```
ICI
AMA
ICI
```
- I = Steel Plate, C = Carbon Plate, M = Machine, A = Alloy Plate

### Super Machine
```
ICI
AMA
ICI
```
- I = Advanced Circuit, C = Diamond, M = Advanced Machine, A = Glass Fiber Cable

### Electric Motor
```
 C
IMI
 C
```
- C = Iron Casing, I = Coil, M = Iron Ingot

### Heat Conductor
```
CPC
CPC
CPC
```
- C = Rubber, P = Copper Plate

### Reinforced Glass (×7)
```
PPP
CPC
PPP
```
- P = Glass, C = Alloy Plate

### Reinforced Stone (×8)
```
PPP
PCP
PPP
```
- P = Stone, C = Alloy Plate

### Reinforced Door
```
PCP
PCP
PCP
```
- P = Iron Plate, C = Lead Plate

### Raw Pattern Storage Crystal
```
IEI
EIE
IEI
```
- I = Silicon Dioxide Dust, E = Obsidian Dust

### Plaster (×8)
```
bbb
bib
bbb
```
- b = Sand, i = Bamboo Block

### Colored Plaster (×8)
```
bbb
bib
bbb
```
- b = Plaster, i = matching dye

## Small Dust to Full Dust (shapeless)

9 of any small dust → 1 full dust:
| Output | Recipe |
|--------|--------|
| Bronze Dust | 9× Small Bronze Dust |
| Copper Dust | 9× Small Copper Dust |
| Gold Dust | 9× Small Gold Dust |
| Iron Dust | 9× Small Iron Dust |
| Lapis Dust | 9× Small Lapis Dust |
| Lead Dust | 9× Small Lead Dust |
| Lithium Dust | 9× Small Lithium Dust |
| Obsidian Dust | 9× Small Obsidian Dust |
| Silver Dust | 9× Small Silver Dust |
| Sulfur Dust | 9× Small Sulfur Dust |
| Tin Dust | 9× Small Tin Dust |

## Ingot ⇄ Block

| Recipe | Result |
|--------|--------|
| 9× Bronze Ingot (shapeless) | Bronze Block |
| 9× Lead Ingot (shapeless) | Lead Block |
| 9× Silver Ingot (shapeless) | Silver Block |
| 9× Steel Ingot (shapeless) | Steel Block |
| 9× Sacred Ingot (shapeless) | Sacred Block |
| 9× Tin Ingot (shapeless) | Tin Block |
| 9× Scrap (shapeless) | Scrap Box |

## Tools & Armor

### Bronze Tools (use Bronze Ingot)

| Tool | Pattern |
|------|---------|
| Bronze Sword | `# / # / \|` (# = Bronze Ingot, \| = Stick) |
| Bronze Shovel | `# / \| / \|` |
| Bronze Pickaxe | `### / \| / \|` (in the middle column) |
| Bronze Axe | `## / #\| / \|` |
| Bronze Hoe | `## / \| / \|` |

### Bronze Armor (use Bronze Ingot)

| Piece | Pattern |
|-------|---------|
| Bronze Helmet | `### / # #` |
| Bronze Chestplate | `# # / ### / ###` |
| Bronze Leggings | `### / # # / # #` |
| Bronze Boots | `# # / # #` |

### Quantum Armor

| Piece | Pattern | Ingredients |
|-------|---------|-------------|
| Quantum Helmet | `CCC / #L# / ARA` | C = Carbon Plate, # = Iridium Plate, L = Lapotron Crystal, A = Advanced Circuit, R = Reinforced Glass |
| Quantum Chestplate | `CCC / #L# / #A#` | C = Carbon Plate, # = Iridium Plate, L = Lapotron Crystal, A = Alloy Plate |
| Quantum Leggings | `MLM / #C# / GCG` | M = Machine, L = Lapotron Crystal, # = Iridium Plate, C = Carbon Plate, G = Glowstone Dust |
| Quantum Boots | `CCC / #R# / RLR` | C = Carbon Plate, # = Iridium Plate, R = Rubber, L = Lapotron Crystal |

### Electric Jetpack
```
I#I
ILI
G G
```
- I = Iron Casing, # = Advanced Circuit, L = Energy Box, G = Glowstone Dust

## Reactor Components

### Coolant Cell 10k
```
 P
PCP
 P
```
- C = Water Cell, P = Tin Plate

### Coolant Cell 30k
```
PPP
CCC
PPP
```
- C = Coolant Cell 10k, P = Tin Plate

### Coolant Cell 60k
```
PCP
PAP
PCP
```
- C = Coolant Cell 10k, P = Tin Plate, A = Iron Plate

### Heat Vent
```
BPB
PCP
BPB
```
- P = Iron Plate, B = Iron Bars, C = Copper Plate

### Advanced Heat Vent
```
BHB
BDB
BHB
```
- D = Diamond, H = Heat Vent, B = Iron Bars

### Overclocked Heat Vent
```
 G
GHG
 G
```
- H = Advanced Heat Vent, G = Gold Plate

### Sacred Essence (Brew Reactor)
- Impure Sacred Stone + Empty Vessel (in the Brew Reactor)

### Sacred Shard
```
 U
 P
 U
```
- U = Sacred Essence, P = Luminite Alloy

### Sacred Core
```
UPU
   
UPU
```
- U = Sacred Shard, P = Enriched Luminite Alloy

## Advanced / Endgame Items

### Luminite (shapeless)
- 9× Luminite Component → Luminite

### Luminite Alloy
```
DDD
DRD
DDD
```
- R = Luminite, D = Iridium Plate

### Irradiant Sacred
```
 R
RDR
 R
```
- R = Glowstone Dust, D = Sacred Ingot

### Enriched Luminite
```
DDD
DRD
DDD
```
- R = Luminite, D = Irradiant Sacred

### Enriched Luminite Alloy
```
 R
RDR
 R
```
- R = Enriched Luminite, D = Luminite Alloy

### Irradiant Glass Pane
```
GGG
DRD
GGG
```
- G = Glass, D = Irradiant Sacred, R = Glowstone Dust

### Iridium Amethyst Plate
```
DDD
DRD
DDD
```
- R = Iridium Ingot, D = Iridium Plate

### Reinforced Iridium Amethyst Plate
```
ADA
DRD
ADA
```
- R = Iridium Amethyst Plate, D = Carbon Plate, A = Alloy Plate

### Irradiant Reinforced Plate
```
APA
LRL
ADA
```
- R = Reinforced Iridium Amethyst Plate, P = Luminite Component, D = Diamond, A = Redstone, L = Lapis Lazuli

### Molecular Transformer Core
```
RPR
R R
RPR
```
- R = Irradiant Glass Pane, P = Copper Plate

### Quantum Core
```
RPR
PEP
RPR
```
- R = Enriched Luminite Alloy, P = Nether Star, E = Ender Eye

### Molecular Transformer
```
AEA
PRP
AEA
```
- R = Molecular Transformer Core, P = Advanced Circuit, A = Advanced Machine, E = EV Transformer

## Advanced Solar Panels

### Advanced Solar Panel
```
RRR
DAD
PEP
```
- R = Irradiant Glass Pane, D = Alloy Plate, A = Solar Panel, P = Advanced Circuit, E = Irradiant Reinforced Plate

### Hybrid Solar Panel
```
RLR
DAD
PEP
```
- R = Carbon Plate, L = Lapis Block, D = Iridium Plate, A = Advanced Solar Panel, P = Advanced Circuit, E = Enriched Luminite

### Ultimate Solar Panel
```
 L
DAD
EDE
```
- L = Lapis Block, D = Coal Chunk, A = Advanced Solar Panel, E = Enriched Luminite Alloy

Alternatively:
```
AAA
APA
AAA
```
- A = Advanced Solar Panel, P = Advanced Circuit

### Quantum Solar Panel
```
AAA
APA
AAA
```
- A = Ultimate Solar Panel, P = Quantum Core

## Ore Canes

### Ore Cane Crafting
```
###
#G#
###
```
- # = Sugar Cane, G = the matching ingot:

| Center Ingot | Output |
|--------------|--------|
| Bronze Ingot | Bronze Ore Cane |
| Tin Ingot | Tin Ore Cane |
| Lead Ingot | Lead Ore Cane |
| Sacred Ingot | Sacred Ore Cane |
| Silver Ingot | Silver Ore Cane |
| Steel Ingot | Steel Ore Cane |

### Ore Cane → Ingot (3×3)
Fill a 3×3 grid with the ore cane to get 1 matching ingot.

## Hand-Craftable Metal Former Recipes

The Metal Former's Rolling and Cutting recipes can also be done on a crafting table with the corresponding tool (Hammer for rolling, Cutter for cutting):

| Output | Recipe |
|--------|--------|
| Iron Plate (and all rolling outputs) | Hammer + input |
| Iron/Bronze/Gold/Copper/Steel/Lead/Tin Casing (×2) | Hammer + matching plate |
| Copper/Tin/Gold/HV Cable | Cutter + matching plate |

<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>
