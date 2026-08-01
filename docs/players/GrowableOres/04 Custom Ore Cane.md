# Custom Ore Cane Configuration Guide（Mod 3.8.0+）

This system allows you to add **custom ore canes** via datapacks, compatible with the Growable Ores ecosystem.

**Examples are based on Minecraft 1.21.2+ recipe formats. For older Minecraft versions, please adjust the recipes according to vanilla recipe format changes.**

It supports:

- Crafting ore canes   
- Converting canes back into materials 
- Automation via Cane Converter (requires extension mod)

---

## Folder Structure

Recommended datapack layout:

```
data/
└── <namespace>/
    └── recipes/
        ├── custom/
        │   ├── custom_cane_one_cane.json
        │   ├── custom_cane_two_cane.json
        │   └── ...
        └── custom/result/
        │   ├── custom_cane_one_cane.json
        │   ├── custom_cane_two_cane.json
        │   └── ...
        ├── cane_converter/custom
        │   ├── custom_cane_one_cane.json
        │   ├── custom_cane_two_cane.json
        │   └── ...
```

---

## Cane Tier System

Supports **1 to 10 tiers**:

```
growable_ores:custom_cane_one_cane
growable_ores:custom_cane_two_cane
...
growable_ores:custom_cane_ten_cane
```

---

## Recipe 1: Crafting Ore Cane

Path: `recipes/custom/*.json`

Used to craft ore cane using sugar cane and a base material.


<AdUnit />

### Example

```json
{
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "#G#",
    "###"
  ],
  "key": {
    "#": "minecraft:sugar_cane",
    "G": "minecraft:custom_item"
  },
  "result": {
    "id": "growable_ores:custom_cane_one_cane",
    "count": 1
  }
}
```

---

## Recipe 2: Convert Cane Back to Material

 Path: `recipes/custom/result/*.json`

### Example

```json
{
  "type": "minecraft:crafting_shaped",
  "pattern": [
    "###",
    "###",
    "###"
  ],
  "key": {
    "#": "growable_ores:custom_cane_one_cane"
  },
  "result": {
    "id": "minecraft:custom_item",
    "count": 1
  }
}
```

---


<AdUnit />

## Extension Recipe: Cane Converter

Requires: **Growable Ores Extension**

Path: `recipes/cane_converter/custom/*.json`

### Example(Minecraft 1.21.6+)

```json
{
  "type": "growable_ores_extension:cane_converter",
  "ingredient": "growable_ores:custom_cane_one_cane",
  "result": {
    "id": "minecraft:custom_item",
    "count": 1
  }
}
```

### Example(Minecraft 1.21.1)

```json
{
  "type": "growable_ores_extension:cane_converter",
  "ingredient": {
      "item": "growable_ores:custom_cane_one_cane"
  },
  "result":  {
    "id": "minecraft:custom_item",
    "count": 1
  }
}
```

### Example(Minecraft 1.20.1)

```json
{
  "type": "growable_ores_extension:cane_converter",
    "ingredient": [
        {
            "item": "growable_ores:custom_cane_one_cane"
        }
    ],
    "result": {
        "item": "minecraft:custom_item",
        "count": 1
    }
}
```

<AdUnit />

<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>


