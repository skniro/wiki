# Skniro's Industrial Elixir

**Skniro's Industrial Elixir** est un mod technique Minecraft pour **Fabric** et **NeoForge** qui ajoute une large gamme de machines industrielles, un système d'énergie de style EU, des fluides, des tuyaux, le traitement des minerais et même des minerais cultivables.

## Fonctionnalités

- **Système d'énergie** – Énergie multi-niveaux de style EU avec des câbles (étain, cuivre, or, HV, fibre de verre), des batteries, des transformateurs et des boîtes de stockage d'énergie (Energy Box, CESU, MFE, MFSU).
- **Génération d'énergie** – Généralement au charbon, générateurs à fluides, éoliennes, panneaux solaires (jusqu'au niveau quantique), réacteurs nucléaires, générateurs sacrés, etc.
- **Traitement des minerais** – Macérateur, compresseur, formeur de métal, extracteur, lavage de minerai, centrifugeuse thermique, four à induction, haut fourneau et une chaîne complète de traitement des poussières broyées/purifiées.
- **Fluides & tuyaux** – Tuyaux à fluides en bois et en pierre, tuyaux à objets, réservoirs de fluides, générateurs à fluides et transport automatique de fluides.
- **Machines avancées** – Transformateur moléculaire, réplicateur, générateur de matière, recycleur, machine de découpe, chargeur de chunks, ferme de culture, machine à café, distributeur automatique et un système de brassage/alchimie.
- **Réacteurs nucléaires & sacrés** – Composants de réacteur, notamment des barres de combustible, des cellules de refroidissement, des évents thermiques, des réflecteurs de neutrons et des plaques.
- **Minerais cultivables** – Cultivez des minerais comme des cultures au lieu de les miner.

## Bases de l'énergie

L'énergie est mesurée en **EP** (l'unité de style EU du mod). Différentes machines, câbles, batteries et générateurs fonctionnent selon différents **niveaux d'énergie** :

| Niveau | Entrée/Sortie max |
|--------|-------------------|
| Niveau 1 | 32 E/t |
| Niveau 2 | 128 E/t |
| Niveau 3 | 512 E/t |
| Niveau 4 | 2048 E/t |
| Niveau 5 | 8192 E/t |
| Infini | `Integer.MAX_VALUE` |

Chaque machine peut être améliorée avec jusqu'à quatre **modules d'amélioration** pour modifier sa vitesse, son niveau d'énergie, son stockage ou son comportement redstone.

## Pour commencer

1. **Fondre du minerai** pour obtenir des lingots de cuivre, d'étain, de plomb, de bronze, d'argent et d'acier.
2. **Construire un Macérateur** pour transformer les minerais en minerais broyés, puis utilisez une **Laveuse de minerai** et une **Centrifugeuse thermique** pour obtenir des poussières pures.
3. **Construire un Formeur de métal** pour laminer les lingots en plaques et découper les plaques en câbles.
4. **Fabriquer des batteries et des câbles** pour stocker et transporter l'énergie produite par votre premier **Générateur à charbon**.
5. **Améliorer votre énergie** avec des panneaux solaires, des éoliennes, des boîtes d'énergie et enfin les réacteurs nucléaires / sacrés.

## Sommaire

| Guide | Description |
|---|---|
| [Système d'énergie](./02%20Energy%20System) | Câbles, batteries, boîtes de stockage, chargeurs, transformateurs, tuyaux |
| [Génération d'énergie](./03%20Power%20Generation) | Générateurs à charbon, à fluides, solaires, éoliens |
| [Machines de traitement](./04%20Processing%20Machines) | Macérateur, compresseur, formeur de métal, fours et plus |
| [Machines avancées](./06%20Advanced%20Machines) | Transformateur moléculaire, stockage de motifs, ferme de culture, distributeur automatique |
| [Chaleur & réacteurs](./07%20Heat%20and%20Reactors) | Chauffages, haut fourneau, réacteur nucléaire, réacteur sacré |
| [Objets & matériaux](./08%20Items%20and%20Materials) | Chaque objet et son utilité |
| [Équipement](./09%20Equipment) | Armures en bronze et quantiques, outils, jetpack |
| [Fluides](./10%20Fluids) | UU-Matter, air comprimé, source chaude |
| [Traitement des fluides](./11%20Fluid%20Processing) | Lavage de minerai, réacteur de brassage, machine à café, réplicateur, générateur de matière |
| [Génération du monde](./12%20World%20Generation) | Minerais, arbre à caoutchouc, structures, tables de butin |
| [Nourriture](./13%20Food) | Grains de café et boissons au café |
| [Recettes de fabrication](./14%20Crafting%20Recipes) | Toutes les recettes d'établi |

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
