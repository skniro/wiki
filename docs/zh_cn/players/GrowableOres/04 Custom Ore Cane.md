# 自定义矿石甘蔗配置指南（模组 3.8.0+）

该系统允许您通过数据包添加**自定义矿石甘蔗**，并与 Growable Ores 生态系统兼容。

**示例基于 Minecraft 1.21.2+ 的配方格式。对于旧版 Minecraft，请根据原版配方格式的变化调整配方。**

它支持：

- 合成矿石甘蔗
- 将甘蔗还原为材料
- 通过甘蔗转换器进行自动化（需要扩展模组）

---

## 文件夹结构

推荐的数据包布局：

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

## 甘蔗等级系统

支持 **1 到 10 个等级**：

```
growable_ores:custom_cane_one_cane
growable_ores:custom_cane_two_cane
...
growable_ores:custom_cane_ten_cane
```

---

## 配方 1：合成矿石甘蔗

路径：`recipes/custom/*.json`

用于使用甘蔗和基础材料合成矿石甘蔗。

### 示例

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

## 配方 2：将甘蔗还原为材料

路径：`recipes/custom/result/*.json`

### 示例

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

## 扩展配方：甘蔗转换器

需要：**Growable Ores Extension**

路径：`recipes/cane_converter/custom/*.json`

### 示例 (Minecraft 1.21.6+)

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

### 示例 (Minecraft 1.21.1)

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

### 示例 (Minecraft 1.20.1)

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
