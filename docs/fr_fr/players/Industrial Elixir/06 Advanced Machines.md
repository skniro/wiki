# Machines avancées

Ces machines offrent une automatisation avancée et des fonctionnalités de haut niveau.

## Transformateur moléculaire

![molecular_transformer_block](../../../img/industrial_elixir/machines/molecular_transformer_block_front.png)

Un puits d'énergie de haut niveau qui transforme des objets en d'autres objets en accumulant de l'énergie brute. Machine de Niveau 5.

**Utilisation :** Contrairement aux machines normales, le Transformateur moléculaire n'utilise **pas** une progression basée sur les ticks. Il accumule de l'énergie jusqu'à ce que l'énergie requise par la recette soit atteinte, puis produit le résultat. Insérez l'objet d'entrée et fournissez suffisamment d'énergie.

### Recettes

| Entrée | Sortie | Énergie requise |
|--------|--------|-----------------|
| Lingot d'étain | Lingot d'argent | 500 000 E |
| Crâne de wither squelette | Étoile du Nether | 250 000 000 E |
| Netherrack | Poudre à canon ×2 | 70 000 E |
| Poussière de glowstone | Composant luminite | 1 000 000 E |
| Lingot de fer | Minerai d'iridium | 9 000 000 E |
| Laine rouge | Bloc de redstone | 500 000 E |
| Laine bleue | Bloc de lapis | 500 000 E |
| Diamant industriel | Diamant | 1 000 000 E |
| Charbon de bois | Charbon | 60 000 E |
| Charbon | Diamant industriel | 9 000 000 E |
| Lingot d'argent | Lingot d'or | 500 000 E |
| Terre | Argile | 50 000 E |
| Sable | Gravier | 50 000 E |
| Laine jaune | Glowstone | 500 000 E |


<AdUnit />

## Stockage de motifs

![pattern_storage](../../../img/industrial_elixir/machines/pattern_storage_front.png)

Scanne un objet dans un **Cristal de stockage de motifs** afin qu'il puisse être dupliqué par le Réplicateur. Machine de Niveau 2.

**Utilisation :**
1. Placez un **Cristal de stockage de motifs brut** dans l'emplacement d'entrée et l'objet à scanner dans l'emplacement d'objet.
2. La machine écrit les données de l'objet ainsi que son coût en UU-matter et en énergie dans le cristal.
3. Le scan prend 120 ticks et coûte 64 E/t.
4. Le cristal peut également être utilisé pour copier des motifs existants.

## Chargeur de chunks

![chunk_loader](../../../img/industrial_elixir/machines/chunk_loader_top.png)

Force le chargement des chunks pour que les machines continuent de fonctionner en votre absence. Machine de Niveau 2.

**Utilisation :** Placez le Chargeur de chunks et ouvrez son interface. Basculez quels chunks de la grille 5×5 autour de lui sont chargés (le chunk central est toujours chargé). Coût : **1 E/t par chunk chargé**.


<AdUnit />

## Ferme de culture

![crop_farm](../../../img/industrial_elixir/machines/crop_farm_front.png)

Fait pousser et récolte automatiquement les cultures. Machine de Niveau 3. Pilotée par recettes ; peut sortir vers 3 emplacements de sortie.

**Utilisation :** Insérez une graine/culture dans l'emplacement d'entrée et alimentez la machine. Elle produit un flux régulier de la culture et de sous-produits. Le temps de traitement de la recette définit la vitesse.

### Recettes

| Entrée | Sortie principale | Sortie secondaire | Sortie tertiaire | Temps de traitement |
|--------|-------------------|-------------------|------------------|---------------------|
| Graines de blé | Blé ×3 | Graines de blé | — | 600 |
| Carotte | Carotte ×3 | — | — | 600 |
| Pomme de terre | Pomme de terre ×3 | — | — | 600 |
| Graines de betterave | Betterave ×3 | Graines de betterave | — | 600 |
| Canne à sucre | Canne à sucre ×2 | — | — | 2400 |
| Cactus | Cactus ×1 | — | — | 2400 |
| Bambou | Bambou ×9 | — | — | 1800 |
| Fèves de cacao | Fèves de cacao ×3 | — | — | 800 |
| Graines de citrouille | Citrouille ×1 | Graines de citrouille | — | 1200 |
| Graines de pastèque | Graines de pastèque ×1 | Tranche de pastèque ×9 | — | 1200 |
| Verrue du Nether | Verrue du Nether ×3 | — | — | 800 |
| Canne de minerai de bronze | Canne de minerai de bronze | — | — | 2400 |
| Canne de minerai d'acier | Canne de minerai d'acier | — | — | 3000 |
| Canne de minerai d'argent | Canne de minerai d'argent | — | — | 2400 |
| Canne de minerai d'étain | Canne de minerai d'étain | — | — | 2400 |
| Canne de minerai sacré | Canne de minerai sacré | — | — | 2400 |
| Canne de minerai de plomb | Canne de minerai de plomb | — | — | 2400 |
| Pousse de chêne | Pousse de chêne | Bûche de chêne ×5 | Pomme ×1 | 1600 |
| Pousse de chêne pâle | Pousse de chêne pâle | Bûche de chêne pâle ×5 | Amas de résine ×1 | 1600 |
| Pousse de sapin | Pousse de sapin | Bûche de sapin ×6 | — | 1600 |
| Pousse de bouleau | Pousse de bouleau | Bûche de bouleau ×5 | — | 1600 |
| Pousse de jungle | Pousse de jungle | Bûche de jungle ×6 | — | 1000 |
| Pousse d'acacia | Pousse d'acacia | Bûche d'acacia ×5 | — | 1000 |
| Pousse de chêne noir | Pousse de chêne noir ×2 | Bûche de chêne noir ×10 | — | 1000 |
| Propagule de palétuvier | Propagule de palétuvier | Bûche de palétuvier ×6 | — | 1000 |
| Pousse de cerisier | Pousse de cerisier | Bûche de cerisier ×6 | — | 1000 |
| Champignon cramoisi | Champignon cramoisi | Tige cramoisie ×8 | — | 1000 |
| Champignon biscornu | Champignon biscornu | Tige biscornue ×8 | — | 1000 |
| Fleur de chorus | Fleur de chorus | Fruit de chorus ×4 | — | 1200 |
| Graines de torchefleur | Graines de torchefleur | Torchefleur ×1 | — | 600 |
| Gousse de cruche | Gousse de cruche | Plante cruche ×1 | — | 600 |
| Pousse de caoutchouc | Caoutchouc ×3 | Bûche de caoutchouc ×6 | Pousse de caoutchouc | 600 |

## Distributeur automatique

Un bloc **Marchand** de style villageois qui échange des objets du mod contre des **émeraudes**. Il ne nécessite pas d'énergie.

**Utilisation :** Faites un clic droit pour ouvrir le menu d'échange. La machine génère 20 échanges pondérés aléatoires à partir d'un large pool d'objets du mod. Dépensez des émeraudes pour acheter des objets.

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
