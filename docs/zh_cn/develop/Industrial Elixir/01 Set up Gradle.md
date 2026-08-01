# 配置你的 Gradle 构建脚本

为你的 Fabric、NeoForge 或 Forge 项目将工业灵药添加为依赖。

## 仓库
```gradle
repositories {
    maven {
        name = 'skniro'
        url  = 'https://raw.githubusercontent.com/skniro/maven3/main/'
    }
}
```

## Loom 依赖（用于 Fabric）

```gradle
dependencies {
  /* 其他 minecraft 依赖在这里 */

  // 编译
  modCompileOnlyApi("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-Fabric")
  // 运行时
  modRuntimeOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-Fabric")
}
```

## NeoGradle 依赖（用于 NeoForge）

```gradle
dependencies {
  /* 其他 minecraft 依赖在这里 */

  // 编译
  compileOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-NeoForge")
  // 运行时
  runtimeOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-NeoForge")
}
```

## ForgeGradle 依赖（用于 Forge）

```gradle
dependencies {
  /* 其他 minecraft 依赖在这里 */

  // 编译
  compileOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-Forge")
  // 运行时
  runtimeOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-Forge")
}
```

# 选择版本
`${mod_version}` 会被替换为你想要使用的模组版本（例如 `0.8.1.beta.4`）。
`${mc_version}` 会被替换为当前的 Minecraft 版本（例如 `26.1.2`）。

这些属性可以在名为 `gradle.properties` 的文件中设置，该文件与你的 `build.gradle` 文件位于同一目录。

```properties
mod_version=0.8.1.beta.4
mc_version=26.1.2
```

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
