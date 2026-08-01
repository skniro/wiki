# Set up your Gradle build script

Add Industrial Elixir as a dependency for your Fabric, NeoForge, or Forge project.

## Repositories
```gradle
repositories {
    maven {
        name = 'skniro'
        url  = 'https://raw.githubusercontent.com/skniro/maven3/main/'
    }
}
```

## Dependencies for Loom (for Fabric)

```gradle
dependencies {
  /* other minecraft dependencies are here */

  // compile
  modCompileOnlyApi("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-Fabric")
  //runtime
  modRuntimeOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-Fabric")
}
```


<AdUnit />

## Dependencies for NeoGradle (for NeoForge)

```gradle
dependencies {
  /* other minecraft dependencies are here */

  // compile
  compileOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-NeoForge")
  //runtime
  runtimeOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-NeoForge")
}
```

## Dependencies for ForgeGradle (for Forge)

```gradle
dependencies {
  /* other minecraft dependencies are here */

  // compile
  compileOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-Forge")
  //runtime
  runtimeOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-Forge")
}
```

# Choose a Version
`${mod_version}` gets replaced by the version of the mod you want to use (e.g. `0.8.1.beta.4`).
`${mc_version}` gets replaced by the current Minecraft version (e.g. `26.1.2`).

These properties can be set in a file named `gradle.properties`, placed in the same directory as your `build.gradle` file.

```properties
mod_version=0.8.1.beta.4
mc_version=26.1.2
```

<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>
