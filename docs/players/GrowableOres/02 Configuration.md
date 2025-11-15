# Configuration(1.14+)

## Location of configuration files
#### fabric
```txt
.minecraft/config/growable_ores/growableores.json
```

#### Forge and Neoforge
```txt
.minecraft/config/skniro/growable_ores/growable_ores/growableores.json
```

## Function
```json
{
  "function": {
    "Ore Cane Max Height": {
      "comment": "Control the max height of Ore cane. Default value is 3.",
      "value": 3
    },
    "All Item Mode": {
      "comment": "Enable All Item Mode.",
      "value": false
    },
    "Enable Bone meal grow ore canes": {
      "comment": "Enable Bone meal grow ore cane.",
      "value": true
    }
  }
}
```

#### Ore Cane Max Height(Mod version 2.5.0+)
This option allows players to customize the maximum height that sugarcane can grow.  
the value is max height number, Default is 3.  
If set this value greater than world max height might cause game crash.  

#### All Item Mode
When disabled, content from not Installed compatible mods will not be displayed.    
When enabled, all content will be shown regardless of whether the compatible mod is installed.  
For example: if Player don’t add tech reborn mod that will don’t show any ore canes about tech reborn mod, but open this option ore canes about tech reborn mod will be shown.

#### Enable Bone Meal Grow Ore Canes
Default is disable.
When enabled, players can use bone meal to accelerate the growth of ore canes.

#### Customize the blocks and liquids required for ore cane growth.
In vanilla Ore cane placed only on a grass block, dirt, coarse dirt, rooted dirt, podzol, mycelium, sand, red sand, suspicious sand, moss block, pale moss block or mud that is directly adjacent to water, a waterlogged block, or frosted ice (not merely above or diagonal to water), or on top of another sugar cane block. (From Minecraft Wiki)  

So Growable Ores mod add two tags to help player customized.    
Players can use the data pack to complete customization.  

Default we add that ore cane can placed on nether rack is directly adjacent to lava, which want help player grow ore cane in Nether.
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
import AdUnit from '../../vue/wikiad.vue';
</script>
