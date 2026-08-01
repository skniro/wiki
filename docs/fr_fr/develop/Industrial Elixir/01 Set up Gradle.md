# Configurer votre script de build Gradle

Ajoutez Industrial Elixir comme dépendance pour votre projet Fabric, NeoForge ou Forge.

## Dépôts
```gradle
repositories {
    maven {
        name = 'skniro'
        url  = 'https://raw.githubusercontent.com/skniro/maven3/main/'
    }
}
```

## Dépendances pour Loom (pour Fabric)

```gradle
dependencies {
  /* les autres dépendances minecraft sont ici */

  // compilation
  modCompileOnlyApi("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-Fabric")
  // exécution
  modRuntimeOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-Fabric")
}
```


<AdUnit />

## Dépendances pour NeoGradle (pour NeoForge)

```gradle
dependencies {
  /* les autres dépendances minecraft sont ici */

  // compilation
  compileOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-NeoForge")
  // exécution
  runtimeOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-NeoForge")
}
```

## Dépendances pour ForgeGradle (pour Forge)

```gradle
dependencies {
  /* les autres dépendances minecraft sont ici */

  // compilation
  compileOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-Forge")
  // exécution
  runtimeOnly("com.skniro:IndustrialElixir:${mod_version}-${mc_version}-Forge")
}
```

# Choisir une Version
`${mod_version}` est remplacé par la version du mod que vous voulez utiliser (par ex. `0.8.1.beta.4`).
`${mc_version}` est remplacé par la version actuelle de Minecraft (par ex. `26.1.2`).

Ces propriétés peuvent être définies dans un fichier nommé `gradle.properties`, placé dans le même répertoire que votre fichier `build.gradle`.

```properties
mod_version=0.8.1.beta.4
mc_version=26.1.2
```

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
