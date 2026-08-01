# API d'Industrial Elixir

Industrial Elixir expose une petite API publique sous le package `com.skniro.industrial_elixir.api`. Cette page documente les principaux points d'entrée pour les développeurs d'addons.

## Tier d'Énergie

`com.skniro.industrial_elixir.api.energytier.EnergyTier`

Une énumération décrivant les tiers d'énergie de style EU utilisés dans tout le mod.

```java
public enum EnergyTier {
    TIER1(32, 32),
    TIER2(128, 128),
    TIER3(512, 512),
    TIER4(2048, 2048),
    TIER5(8192, 8192),
    INFINITE(Integer.MAX_VALUE, Integer.MAX_VALUE);

    public int getMaxInput();
    public int getMaxOutput();
}
```

| Tier | Entrée/Sortie max |
|------|-------------------|
| TIER1 | 32 E/t |
| TIER2 | 128 E/t |
| TIER3 | 512 E/t |
| TIER4 | 2048 E/t |
| TIER5 | 8192 E/t |
| INFINITE | `Integer.MAX_VALUE` |

## Objet Énergie à Tier

`com.skniro.industrial_elixir.api.item.TieredEnergyItem`

Une interface pour les objets qui stockent de l'énergie et appartiennent à un tier d'énergie. L'implémenter permet à votre objet d'être chargé par les Plaques de Charge et d'être reconnu par le système énergétique.

```java
public interface TieredEnergyItem {
    EnergyTier getEnergyTier();
}
```

**Exemple :**
```java
public class MyBatteryItem extends Item implements TieredEnergyItem {
    @Override
    public EnergyTier getEnergyTier() {
        return EnergyTier.TIER2;
    }
}
```

## Table des Valeurs du Réplicateur

`com.skniro.industrial_elixir.api.item.replicator.ReplicatorValueMap`

Un registre qui associe les objets à leur coût de réplication (mB de Matière UU + énergie EU). Le scanner de **Stockage de Motifs** et la machine **Réplicateur** interrogent cette table.

```java
public static void register(Item item, int uuCost, long energyCost);
public static ReplicatorCost get(Item item);
public static boolean contains(Item item);
public static Map<Item, ReplicatorCost> getAll();
```

`ReplicatorCost` est un record :

```java
public record ReplicatorCost(int uuCost, long energyCost) {}
```

**Exemple — enregistrez votre objet pour la réplication :**
```java
ReplicatorValueMap.register(ModItems.MY_INGOT, 25, 0);
```

Les coûts par défaut sont enregistrés lors de l'initialisation du mod via `registerDefaults()` (par ex. Caoutchouc 101 UU, Éclat d'Iridium 13 UU, Plaque d'Iridium 520 UU, Feraille 1 UU).

## Registre de Combustibles

`com.skniro.industrial_elixir.api.item.ModFuelRegistry`

Enregistrez des combustibles personnalisés pour le **Générateur à Charbon** et le **Chauffage à Combustible Solide**.

```java
public static void registerFuel(Item item, int burnTime);
public static void registerFuel(TagKey<Item> tag, int burnTime);
```

Le temps de combustion est en ticks (comme en vanilla). Le Générateur à Charbon brûle les combustibles à la moitié de la durée vanilla ; les combustibles du mod enregistrés ici sont utilisés directement.

**Exemple :**
```java
ModFuelRegistry.registerFuel(ModItems.MY_COAL, 1600);
ModFuelRegistry.registerFuel(TagKey.create(Registries.ITEM, ResourceLocation.parse("mymod:my_fuels")), 800);
```

## Interfaces de Fournisseur de Machine

`com.skniro.industrial_elixir.api.block.MachineEnergyProvider`

Implémentée par les machines qui veulent exposer leur capacité énergétique et leur coût par fabrication.

```java
public interface MachineEnergyProvider {
    long getMachineCapacity();
    long getCraftEnergyCost();
}
```

`com.skniro.industrial_elixir.api.block.MachineRecipeProvider`

Une interface fonctionnelle qui renvoie le type de recette actuel d'une machine.

```java
@FunctionalInterface
public interface MachineRecipeProvider {
    RecipeType<?> getCurrentRecipeType();
}
```

## Génération de Données : Constructeurs de Recettes

Le mod fournit des constructeurs fluides pour chaque type de recette de machine sous `com.skniro.industrial_elixir.api.data.recipe`. La classe de base `ModRecipeGenerator` (qui étend le `RecipeProvider` vanilla) est le moyen le plus simple de les utiliser.

Constructeurs disponibles :

| Constructeur | Type de recette |
|--------------|-----------------|
| `MaceratorRecipeJsonBuilder` | Macérateur |
| `CompressorRecipeJsonBuilder` | Compresseur |
| `ExtractorRecipeJsonBuilder` | Extracteur |
| `MetalFormerRollingRecipeJsonBuilder` | Formeuse de Métal — Laminage |
| `MetalFormerCuttingRecipeJsonBuilder` | Formeuse de Métal — Découpe |
| `MetalFormerExtrudingRecipeJsonBuilder` | Formeuse de Métal — Extrusion |
| `CuttingRecipeJsonBuilder` | Machine à Découper |
| `OreWashingRecipeJsonBuilder` | Lavage de Minerai |
| `HeatCentrifugeRecipeJsonBuilder` | Centrifugeuse à Chaleur |
| `ModBlastFurnaceRecipeJsonBuilder` | Haut Fourneau |
| `MolecularTransformerRecipeJsonBuilder` | Transformateur Moléculaire |
| `BrewReactorRecipeJsonBuilder` | Réacteur de Brassage |
| `CoffeeMachineRecipeJsonBuilder` | Machine à Café |
| `CropFarmRecipeJsonBuilder` | Ferme à Cultures |

**Exemple — ajoutez une recette de Macérateur dans votre propre générateur de données :**
```java
public class MyRecipeGenerator extends ModRecipeGenerator {
    // ...
    @Override
    public void buildRecipes() {
        createMacerator(MyItems.MY_DUST, 2)
            .input(MyItems.MY_ORE)
            .save(output);
    }
}
```

Les constructeurs **Laminage** et **Découpe** de la Formeuse de Métal génèrent automatiquement des recettes d'établi correspondantes utilisant les objets Marteau/Couteau.

## Assistant de Set de Bois

`ModRecipeGenerator.addWoodSet(...)` génère les quatre recettes de Machine à Découper (bûche → planches, bûche écorcée → planches, bois → planches, bois écorcé → planches) pour un set de bois complet.

```java
public void addWoodSet(RecipeOutput exporter,
                       ItemLike log, ItemLike strippedLog,
                       ItemLike wood, ItemLike strippedWood,
                       ItemLike planks, String name);
```

## Assistant d'Info-Bulle d'Énergie

`com.skniro.industrial_elixir.api.item.EnergyTooltipHelper`

Un assistant pour dessiner l'info-bulle d'énergie cyan-bleue sur les objets qui stockent de l'énergie. Utilisez-le lors du rendu des info-bulles pour vos objets énergétiques personnalisés.

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
