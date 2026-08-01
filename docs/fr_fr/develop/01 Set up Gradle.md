# Configurer votre script de build Gradle

## Dépôts
```gradle
repositories {
    maven{
        name = 'skniro'
        url  = 'https://raw.githubusercontent.com/skniro/maven3/main/'
    }
}
```

## Dépendances pour NeoGradle (pour NeoForge)

```gradle
dependencies {
  /* les autres dépendances minecraft sont ici */

  // compilation
  compileOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-NeoForge")
  // exécution
  runtimeOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-NeoForge")
}
```

## Dépendances pour ForgeGradle (pour Forge)

```gradle
dependencies {
  /* les autres dépendances minecraft sont ici */

  // compilation
  compileOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-Forge")
  // exécution
  runtimeOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-Forge")
}
```


<AdUnit />

## Dépendances pour Loom (pour Fabric)

```gradle
dependencies {
  /* les autres dépendances minecraft sont ici */

  // compilation
  modCompileOnlyApi("com.skniro:GrowableOres:${mod_version}-${mc_version}-Fabric")
  // exécution
  modRuntimeOnly("com.skniro:GrowableOres:${mod_version}-${mc_version}-Fabric")
}
```

# Choisir une Version
`${mod_version}` est remplacé par la version du mod que vous voulez utiliser (c.-à-d. `3.0.6`)
`${mc_version}` est remplacé par la version actuelle de Minecraft (c.-à-d. `1.20.4`).

Ces propriétés peuvent être définies dans un fichier nommé `gradle.properties`, placé dans le même répertoire que votre fichier `build.gradle`.

Pour cet exemple, votre `gradle.properties` ressemblerait à ceci :
```properties
mod_version=3.0.6
mc_version=1.21.1
```

#### Remerciements spéciaux pour JEI. Cette page fait référence au wiki de JEI.
<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>
