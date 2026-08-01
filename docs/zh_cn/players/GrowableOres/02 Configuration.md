# 配置 (1.14+)

## 配置文件位置
#### fabric
```txt
.minecraft/config/growable_ores/growableores.json
```

#### Forge 和 Neoforge
```txt
.minecraft/config/skniro/growable_ores/growable_ores/growableores.json
```

## 功能
```json
{
  "function": {
    "Ore Cane Max Height": {
      "comment": "控制矿石甘蔗的最大高度。默认值为 3。",
      "value": 3
    },
    "All Item Mode": {
      "comment": "启用所有物品模式。",
      "value": false
    },
    "Enable Bone meal grow ore canes": {
      "comment": "启用骨粉促进矿石甘蔗生长。",
      "value": true
    }
  }
}
```

#### 矿石甘蔗最大高度（模组版本 2.5.0+）
此选项允许玩家自定义甘蔗可以生长的最大高度。
该值是最大高度数值，默认为 3。
如果将此值设置得大于世界最大高度，可能会导致游戏崩溃。


<AdUnit />

#### 所有物品模式
禁用时，未安装的兼容模组的内容将不会显示。
启用时，无论是否安装了兼容模组，所有内容都会显示。
例如：如果玩家没有添加 TechReborn 模组，那么就不会显示任何关于 TechReborn 模组的矿石甘蔗，但打开此选项后，关于 TechReborn 模组的矿石甘蔗将会显示。

#### 启用骨粉促进矿石甘蔗生长
默认为禁用。
启用后，玩家可以使用骨粉加速矿石甘蔗的生长。

#### 自定义矿石甘蔗生长所需的方块和液体
在原版中，矿石甘蔗只能种植在草方块、泥土、砂土、缠根泥土、菌丝体、沙子、红沙、可疑的沙子、苔藓块、苍白苔藓块或泥巴上，且这些方块必须与水、含水的方块或霜冰直接相邻（不仅仅是水的上方或斜对角），或者种植在另一个甘蔗方块之上。（来自 Minecraft Wiki）

因此 Growable Ores 模组添加了两个标签来帮助玩家自定义。
玩家可以使用数据包完成自定义。

默认情况下，我们添加了矿石甘蔗可以种植在与熔岩直接相邻的下界岩上，这是为了帮助玩家在下界种植矿石甘蔗。
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
