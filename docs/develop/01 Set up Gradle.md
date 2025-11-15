# Set up your Gradle build script

## Repositories
```gradle
repositories {
    maven{
        name = 'skniro'
        url  = 'https://raw.githubusercontent.com/skniro/maven3/main/'
    }
}
```

## Dependencies for NeoGradle (for NeoForge)

```gradle
dependencies {
  /* other minecraft dependencies are here */

  // compile
  compileOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-NeoForge")
  //runtime
  runtimeOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-NeoForge")
}
```

## Dependencies for ForgeGradle (for Forge)

```gradle
dependencies {
  /* other minecraft dependencies are here */

  // compile
  compileOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-Forge")
  //runtime
  runtimeOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-Forge")
}
```

## Dependencies for Loom (for Fabric)

```gradle
dependencies {
  /* other minecraft dependencies are here */

  // compile
  modCompileOnlyApi("com.skniro:GrowableOres:${mod_version}-${mc_version}-Fabric")
  //runtime
  modRuntimeOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-Fabric")
}
```

# Choose a Version
`${mod_version}` gets replaced by the version of Mod you want to use (i.e `3.0.6`)
`${mc_version}` gets replaced by the current Minecraft version. (i.e. `1.20.4`)  


These properties can be set in a file named `gradle.properties`, placed in the same directory as your `build.gradle` file.

For this example, your `gradle.properties` would look like this:
```properties
mod_version=3.0.6
mc_version=1.21.1
```

#### Special thanks for JEI. This page refers to the JEI wiki.

<AdUnit />
<script setup>
import AdUnit from '../../../docs/vue/wikiad.vue';
</script>