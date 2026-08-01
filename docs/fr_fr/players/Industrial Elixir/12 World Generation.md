# Génération du monde

Industrial Elixir ajoute trois nouveaux minerais, un ar
bre à caoutchouc et une structure de bains de source chaude à l'Overworld.

## Minerais

Le mod ajoute les minerais d'**Étain**, de **Plomb** et **Sacré** à l'Overworld. Chacun a une variante en pierre (dans les couches supérieures) et une variante en ardoise des abysses (dans les couches profondes). Tous les minerais lâchent leur matériau brut avec Toucher de soie / Fortune et octroient **2–4 XP** lorsqu'ils sont minés.

| Minerai | Variante en pierre | Variante en ardoise des abysses | Filons/Chunk | Taille de filon | Plage de hauteur |
|---------|--------------------|--------------------------------|--------------|-----------------|------------------|
| Étain | ![tin_ore](../../../img/industrial_elixir/blocks/tin_ore.png) Minerai d'étain | ![deepslate_tin_ore](../../../img/industrial_elixir/blocks/deepslate_tin_ore.png) Minerai d'étain des abysses | 10 / 12 | 10 | 0–40 / −64–0 |
| Plomb | ![lead_ore](../../../img/industrial_elixir/blocks/lead_ore.png) Minerai de plomb | ![deepslate_lead_ore](../../../img/industrial_elixir/blocks/deepslate_lead_ore.png) Minerai de plomb des abysses | 8 / 10 | 8 | 0–63 / −64–0 |
| Sacré | ![sacred_ore](../../../img/industrial_elixir/blocks/sacred_ore.png) Minerai sacré | ![deepslate_sacred_ore](../../../img/industrial_elixir/blocks/deepslate_sacred_ore.png) Minerai sacré des abysses | 6 / 8 | 6 | 0–64 / −64–0 |

- Les variantes en **pierre** ne remplacent que la pierre normale.
- Les variantes en **ardoise des abysses** remplacent l'ardoise des abysses et les autres blocs remplaçables par des minerais des abysses.

### Blocs de minerai brut

Les minerais bruts peuvent être compressés en blocs de métal brut pour un stockage compact :

| Bloc | Photo | | Bloc | Photo |
|------|-------|---|---|------|
| Bloc d'étain brut | ![raw_tin_block](../../../img/industrial_elixir/blocks/raw_tin_block.png) | | Bloc de plomb brut | ![raw_lead_block](../../../img/industrial_elixir/blocks/raw_lead_block.png) |
| Bloc de sacré brut | ![raw_sacred_block](../../../img/industrial_elixir/blocks/raw_sacred_block.png) | | | |

## Arbre à caoutchouc

Les arbres à caoutchouc se génèrent naturellement dans les biomes **forestiers**. Ils sont la source de **Résine collante**, qui est extraite en **Caoutchouc**.

| Bloc | Photo |
|------|-------|
| Bûche de caoutchouc | ![rubber_log](../../../img/industrial_elixir/blocks/rubber_log.png) |
| Feuilles de caoutchouc | ![rubber_leaves](../../../img/industrial_elixir/blocks/rubber_leaves.png) |
| Pousse de caoutchouc | ![rubber_sapling](../../../img/industrial_elixir/blocks/rubber_sapling.png) |

**Croissance :** Les arbres à caoutchouc mesurent 4–6 blocs de haut avec une canopée en forme de boule. Chaque arbre a **1–2 bûches à caoutchouc** (`rubber_rubber_log`) intégrées dans le tronc, complètement matures à l'apparition de l'arbre.

### Récolte de la sève de caoutchouc

La **bûche à caoutchouc** est une bûche spéciale de type culture qui pousse en trois étapes (0 → 1 → 2). Elle mûrit au fil du temps (tick aléatoire, nécessite un niveau de lumière ≥ 9) ou peut être accélérée avec de la poudre d'os.

![rubber_rubber_log_stage0](../../../img/industrial_elixir/blocks/rubber_rubber_log_stage0.png) → ![rubber_rubber_log_stage1](../../../img/industrial_elixir/blocks/rubber_rubber_log_stage1.png) → ![rubber_rubber_log_stage2](../../../img/industrial_elixir/blocks/rubber_rubber_log_stage2.png)

**Utilisation :** Faites un clic droit sur une bûche à caoutchouc complètement mature (étape 2) pour récolter **1 Résine collante**. Cela remet la bûche à l'étape 0, et elle repoussera.

## Structure des bains de source chaude

Le mod génère une seule structure : **`industrial_elixir_hot_spring_baths`** — une maison de bains de source chaude faite principalement de bois de caoutchouc et de dalles d'ardoise des abysses.
![hot_spring_baths1.png](../../../img/industrial_elixir/hot_spring_baths1.png)
![hot_spring_baths2.png](../../../img/industrial_elixir/hot_spring_baths2.png)
![hot_spring_baths3.png](../../../img/industrial_elixir/hot_spring_baths3.png)
**Où elle se génère :**
- Biome : **Cerisaie** (dans l'Overworld)
- Placement : répartition aléatoire, espacement de 34 chunks, séparation de 8

**Ce qu'elle contient :**
- Un bâtiment de 19×12×40 construit en planches/ escaliers de caoutchouc, escaliers en pierre (avec source chaude) et dalles d'ardoise des abysses.
- Des blocs de fluide de source chaude dispersés autour des bains.
- **4 Distributeurs automatiques** (allumés) — ils agissent comme des marchands de style villageois vendant de nombreux objets du mod contre des émeraudes.
- Des lits, une table de craft, des blocs de note, des pots de fleurs, des lanternes et des objets de nourriture décoratifs sur les étagères des distributeurs.

**Note :** Les coffres/tonneaux à l'intérieur de la structure se génèrent vides ; le vrai butin provient des échanges aléatoires des Distributeurs automatiques.

## Tables de butin

Industrial Elixir ajoute des objets du mod à **de nombreuses tables de butin de coffres vanille**. Chaque coffre affecté reçoit jusqu'à 4 pools de butin supplémentaires, chacun avec une chance de contenir un objet aléatoire.

### Contenu des pools de butin

| Pool | Objets (1 choix aléatoire) |
|------|---------------------------|
| Armure en bronze | Casque en bronze, Plastron en bronze, Jambières en bronze, Bottes en bronze |
| Poussières | Poussières de Bronze/Argile/Charbon/Cuivre/Diamant/Energium/Or/Fer/Lapis/Plomb/Lithium/Obsidienne/Dioxyde de silicium/Argent/Pierre/Soufre/Étain |
| Minerai d'iridium | Minerai d'iridium |
| Fragment d'iridium | Fragment d'iridium |

### Chances des coffres

| Coffre | Armure | Poussière | Minerai d'iridium | Fragment d'iridium |
|--------|--------|-----------|-------------------|--------------------|
| Cité ancienne | 35 % | 55 % | 10 % | 5 % |
| Trésor de bastion | 35 % | 55 % | 10 % | 5 % |
| Trésor de la cité de l'End | 35 % | 55 % | 10 % | 5 % |
| Pont de bastion | 20 % | 35 % | 6 % | 3 % |
| Autre bastion | 20 % | 35 % | 6 % | 3 % |
| Manoir des bois | 25 % | 35 % | 6 % | 3 % |
| Pont du Nether | 20 % | 35 % | 6 % | 3 % |
| Écurie à hoglins de bastion | 18 % | 30 % | 5 % | 2 % |
| Couloir de forteresse | 18 % | 30 % | 5 % | 2 % |
| Carrefour de forteresse | 18 % | 30 % | 5 % | 2 % |
| Pyramide du désert | 12 % | 25 % | 4 % | 2 % |
| Temple de la jungle | 12 % | 25 % | 4 % | 2 % |
| Distributeur du temple de la jungle | 12 % | 25 % | 4 % | 2 % |
| Avant-poste de pillage | 12 % | 25 % | 4 % | 2 % |
| Portail en ruine | 12 % | 25 % | 4 % | 2 % |
| Donjon simple | 12 % | 25 % | 4 % | 2 % |
| Coffre d'igloo | 8 % | 18 % | 3 % | 1 % |
| Mine abandonnée | 8 % | 18 % | 3 % | 1 % |
| Trésor enterré | 8 % | 18 % | 3 % | 1 % |
| Ruine sous-marine (petite) | 8 % | 18 % | 3 % | 1 % |
| Ruine sous-marine (grande) | 8 % | 18 % | 3 % | 1 % |
| Carte d'épave | 8 % | 18 % | 3 % | 1 % |
| Fournitures d'épave | 8 % | 18 % | 3 % | 1 % |
| Trésor d'épave | 8 % | 18 % | 3 % | 1 % |

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
