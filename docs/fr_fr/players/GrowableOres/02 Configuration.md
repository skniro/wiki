# Configuration (1.14+)

## Emplacement des fichiers de configuration
#### fabric
```txt
.minecraft/config/growable_ores/growableores.json
```

#### Forge et Neoforge
```txt
.minecraft/config/skniro/growable_ores/growable_ores/growableores.json
```

## Fonction
```json
{
  "function": {
    "Ore Cane Max Height": {
      "comment": "Contrôle la hauteur maximale de la canne à minerai. La valeur par défaut est 3.",
      "value": 3
    },
    "All Item Mode": {
      "comment": "Active le mode Tous les objets.",
      "value": false
    },
    "Enable Bone meal grow ore canes": {
      "comment": "Active la croissance des cannes à minerai avec de la poudre d'os.",
      "value": true
    }
  }
}
```

#### Hauteur maximale de la canne à minerai (version du mod 2.5.0+)
Cette option permet aux joueurs de personnaliser la hauteur maximale que la canne à sucre peut atteindre.  
La valeur est le nombre de hauteur maximale, par défaut 3.  
Si vous définissez cette valeur plus grande que la hauteur maximale du monde, cela peut provoquer un crash du jeu.  


<AdUnit />

#### Mode Tous les objets
Lorsqu'il est désactivé, le contenu des mods compatibles non installés ne sera pas affiché.  
Lorsqu'il est activé, tout le contenu sera affiché, que le mod compatible soit installé ou non.  
Par exemple : si le joueur n'ajoute pas le mod TechReborn, aucune canne à minerai de TechReborn ne sera affichée, mais si vous activez cette option, les cannes à minerai du mod TechReborn seront affichées.

#### Activer la croissance des cannes à minerai avec de la poudre d'os
Par défaut, c'est désactivé.
Lorsqu'il est activé, les joueurs peuvent utiliser de la poudre d'os pour accélérer la croissance des cannes à minerai.

#### Personnaliser les blocs et liquides requis pour la croissance des cannes à minerai.
En vanilla, la canne à minerai ne peut être placée que sur un bloc d'herbe, de la terre, de la terre grossière, de la terre racinaire, de la podzol, du mycélium, du sable, du sable rouge, du sable suspect, un bloc de mousse, un bloc de mousse pâle ou de la boue directement adjacents à l'eau, à un bloc gorgé d'eau ou à de la glace givrée (pas simplement au-dessus ou en diagonale de l'eau), ou sur le dessus d'un autre bloc de canne à sucre. (Extrait du Wiki Minecraft)  

C'est pourquoi le mod Growable Ores ajoute deux tags pour aider les joueurs à personnaliser.  
Les joueurs peuvent utiliser le pack de données pour effectuer la personnalisation.  

Par défaut, nous ajoutons que la canne à minerai peut être placée sur de la netherrack directement adjacente à de la lave, ce qui aide les joueurs à faire pousser des cannes à minerai dans le Nether.
###### growblock.json
```json
{
  "//": "data/growable_ores/tags/block/growblock.json",
  "replace": false,
  "values": [
    "minecraft:netherrack",
    "modid:yourblock"
  ]
}
```

###### growfluid.json
```json
{
  "//": "data/growable_ores/tags/fluid/growfluid.json",
  "replace": false,
  "values": [
    "minecraft:lava",
    "modid:yourfluid"
  ]
}
```

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
