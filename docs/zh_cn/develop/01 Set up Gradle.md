# 配置你的 Gradle 构建脚本

## 仓库 (Repositories)
```gradle
repositories {
    maven{
        name = 'skniro'
        url  = 'https://raw.githubusercontent.com/skniro/maven3/main/'
    }
}
```

## NeoGradle 依赖（用于 NeoForge）

```gradle
dependencies {
  /* 其他 minecraft 依赖在此 */

  // compile
  compileOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-NeoForge")
  //runtime
  runtimeOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-NeoForge")
}
```

## ForgeGradle 依赖（用于 Forge）

```gradle
dependencies {
  /* 其他 minecraft 依赖在此 */

  // compile
  compileOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-Forge")
  //runtime
  runtimeOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-Forge")
}
```


<AdUnit />

## Loom 依赖（用于 Fabric）

```gradle
dependencies {
  /* 其他 minecraft 依赖在此 */

  // compile
  modCompileOnlyApi("com.skniro:GrowableOres:${mod_version}-${mc_version}-Fabric")
  //runtime
  modRuntimeOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-Fabric")
}
```

# 选择一个版本
`${mod_version}` 会被替换为您想使用的模组版本（例如 `3.0.6`）
`${mc_version}` 会被替换为当前的 Minecraft 版本（例如 `1.20.4`）


这些属性可以在名为 `gradle.properties` 的文件中设置，该文件与您的 `build.gradle` 文件放在同一目录下。

以这个示例为例，您的 `gradle.properties` 应该是这样的：
```properties
mod_version=3.0.6
mc_version=1.21.1
```

#### 特别感谢 JEI。此页面参考了 JEI 维基。
<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>
