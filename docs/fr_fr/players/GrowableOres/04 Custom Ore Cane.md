# Guide de configuration des cannes à minerai personnalisées (Mod 3.8.0+)

Ce système vous permet d'ajouter des **cannes à minerai personnalisées** via des datapacks, compatibles avec l'écosystème des Growable Ores.

**Les exemples sont basés sur les formats de recettes de Minecraft 1.21.2+. Pour les anciennes versions de Minecraft, veuillez adapter les recettes en fonction des changements de format des recettes vanilla.**

Il prend en charge :

- La fabrication de cannes à minerai
- La reconversion des cannes en matériaux
- L'automatisation via le Convertisseur de Cannes (nécessite le mod d'extension)

---

## Structure des dossiers

Disposition recommandée du datapack :

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

## Système de paliers de cannes

Prend en charge **1 à 10 paliers** :

```
growable_ores:custom_cane_one_cane
growable_ores:custom_cane_two_cane
...
growable_ores:custom_cane_ten_cane
```

---

## Recette 1 : Fabrication d'une canne à minerai

Chemin : `recipes/custom/*.json`

Utilisé pour fabriquer une canne à minerai à l'aide de canne à sucre et d'un matériau de base.

### Exemple

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

## Recette 2 : Reconversion de la canne en matériau

Chemin : `recipes/custom/result/*.json`

### Exemple

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

## Recette d'extension : Convertisseur de Cannes

Nécessite : **Growable Ores Extension**

Chemin : `recipes/cane_converter/custom/*.json`

### Exemple (Minecraft 1.21.6+)

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

### Exemple (Minecraft 1.21.1)

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

### Exemple (Minecraft 1.20.1)

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
import AdUnit from "../../../../components/wikiad.vue";
</script>
