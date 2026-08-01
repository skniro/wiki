# Génération d'énergie

Les générateurs produisent de l'énergie (E) qui peut être stockée dans des batteries / boîtes d'énergie et utilisée par les machines.

## Générateur à charbon

![coal_generator](../../../img/industrial_elixir/machines/coal_generator_front.png)

Brûle du combustible solide (charbon, charbon de bois, ferraille et autres combustibles du mod) pour générer **32 E/t** (Niveau 1). Le combustible brûle à la moitié de la durée de combustion vanille. Il pousse jusqu'à 320 E/t vers les blocs voisins et possède une mémoire tampon interne de 40 000 E.

**Utilisation :** Mettez un combustible solide dans l'emplacement de combustible. L'emplacement de batterie (emplacement 1) permet de charger/décharger une batterie.

## Générateur à fluides

![fluid_generator](../../../img/industrial_elixir/machines/fluid_generator_front.png)

Brûle des fluides pour produire de l'énergie. Mémoire tampon interne : 10 000 E.

| Fluide | Consommation | Sortie |
|--------|--------------|--------|
| Lave | 2 mB/t | 20 E/t |
| Eau | 1 mB/t | 1 E/t |
| Source chaude | 1 mB/t | 1 E/t |

**Utilisation :** Fournissez le fluide via un tuyau à fluides ou en plaçant un seau/cellule dans l'emplacement d'entrée.

## Panneaux solaires

Les panneaux solaires produisent de l'énergie passivement pendant la journée (et un peu la nuit pour les niveaux supérieurs). Ils n'ont pas besoin de combustible. Chacun dispose de 4 emplacements de batterie pour décharger vers des batteries.

| Panneau | Niveau | Puissance jour | Puissance nuit | Capacité | Photo |
|---------|--------|----------------|----------------|----------|-------|
| Panneau solaire | Niveau 1 | 1 E/t | 0 E/t | 1 000 E | ![generator_solar_panel](../../../img/industrial_elixir/machines/generator_solar_panel_top.png) |
| Panneau solaire avancé | Niveau 2 | 8 E/t | 1 E/t | 10 000 E | ![generator_advanced_solar_panel](../../../img/industrial_elixir/machines/generator_advanced_solar_panel_top.png) |
| Panneau solaire hybride | Niveau 3 | 64 E/t | 8 E/t | 100 000 E | ![generator_hybrid_solar_panel](../../../img/industrial_elixir/machines/generator_hybrid_solar_panel_top.png) |
| Panneau solaire ultime | Niveau 4 | 512 E/t | 64 E/t | 1 000 000 E | ![generator_ultimate_solar_panel](../../../img/industrial_elixir/machines/generator_ultimate_solar_panel_top.png) |
| Panneau solaire quantique | Niveau 5 | 4096 E/t | 2048 E/t | 10 000 000 E | ![generator_quantum_solar_panel](../../../img/industrial_elixir/machines/generator_quantum_solar_panel_top.png) |

**Utilisation :** Placez-le dans un endroit exposé au ciel. Connectez des câbles à la sortie, ou placez des batteries dans les emplacements de batterie.

## Éolienne

![generator_wind_mill](../../../img/industrial_elixir/machines/generator_wind_mill_front.png)

Génère de l'énergie en fonction de la force du vent. Doit être placée **au-dessus de Y=64**. La puissance varie selon :
- La hauteur (plus haut = plus de puissance)
- Les obstacles (blocs comptés dans une zone de 9×9×7)
- La météo (orage > pluie > ciel dégagé)

La force du vent varie aléatoirement entre 0 et 30. Capacité interne : 100 E.

> ⚠️ **Danger :** Si la puissance du vent est ≥ 15, il y a une petite chance que l'éolienne **casse** et se transforme en Générateur à charbon, en lâchant des lingots de fer.

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
