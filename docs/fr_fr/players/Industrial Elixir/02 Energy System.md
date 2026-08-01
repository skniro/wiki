# Système d'énergie

Industrial Elixir utilise un système d'énergie multi-niveaux de style EU. L'énergie est stockée dans des batteries et des boîtes d'énergie, transportée par des câbles et produite par des générateurs.

## Câbles

Les câbles transportent l'énergie entre les générateurs, le stockage et les machines. Les câbles non isolés **peuvent vous électrocuter** lorsqu'ils transportent du courant ; les câbles isolés sont sûrs.

| Câble | Taux de transfert | Niveau | Isolé ? | Photo |
|-------|-------------------|--------|---------|-------|
| Câble en étain | 32 E/t | Niveau 1 | Non (décharge) | ![tin_cable](../../../img/industrial_elixir/cables/tin_cable.png) |
| Câble en cuivre | 128 E/t | Niveau 2 | Non (décharge) | ![copper_cable](../../../img/industrial_elixir/cables/copper_cable.png) |
| Câble en or | 512 E/t | Niveau 3 | Non (décharge) | ![gold_cable](../../../img/industrial_elixir/cables/gold_cable.png) |
| Câble HV | 2048 E/t | Niveau 4 | Non (décharge) | ![hv_cable](../../../img/industrial_elixir/cables/hv_cable.png) |
| Câble en fibre de verre | 8192 E/t | Niveau 5 | Oui | ![glassfiber_cable](../../../img/industrial_elixir/cables/glassfiber_cable.png) |
| Câble en étain isolé | 32 E/t | Niveau 1 | Oui | ![insulated_tin_cable](../../../img/industrial_elixir/cables/insulated_tin_cable.png) |
| Câble en cuivre isolé | 128 E/t | Niveau 2 | Oui | ![insulated_copper_cable](../../../img/industrial_elixir/cables/insulated_copper_cable.png) |
| Câble en or isolé | 512 E/t | Niveau 3 | Oui | ![insulated_gold_cable](../../../img/industrial_elixir/cables/insulated_gold_cable.png) |
| Câble HV isolé | 2048 E/t | Niveau 4 | Oui | ![insulated_hv_cable](../../../img/industrial_elixir/cables/insulated_hv_cable.png) |

**Utilisation :** Placez des câbles pour relier générateurs, batteries, boîtes d'énergie et machines. Tous les câbles ayant le même taux de transfert partagent un pool d'énergie unifié sur le réseau, de sorte que la puissance est équilibrée automatiquement. Chaque câble peut tamponner `taux de transfert × 4` d'énergie.

## Batteries

Les batteries stockent l'énergie et peuvent être chargées dans les générateurs, les boîtes d'énergie et les chargeurs. Elles alimentent également les outils et les armures portables.

| Batterie | Capacité | Niveau | Photo |
|----------|----------|--------|-------|
| Batterie RE | 10 000 E | Niveau 1 | ![re_battery](../../../img/industrial_elixir/items/re_battery_4.png) |
| Batterie RE avancée | 100 000 E | Niveau 2 | ![advanced_re_battery](../../../img/industrial_elixir/items/advanced_re_battery_4.png) |
| Cristal d'énergie | 1 000 000 E | Niveau 3 | ![energy_crystal](../../../img/industrial_elixir/items/energy_crystal_4.png) |
| Cristal Lapotron | 10 000 000 E | Niveau 4 | ![lapotron_crystal](../../../img/industrial_elixir/items/lapotron_crystal_4.png) |

Les batteries affichent une barre de durabilité d'énergie cyan-bleue. Placez-les dans l'**emplacement batterie** d'une machine pour l'alimenter, ou sur un chargeur pour les recharger sans fil.


<AdUnit />

## Boîtes d'énergie

Les boîtes d'énergie stockent de grandes quantités d'énergie et chargent/déchargent les batteries. La **face avant n'accepte que l'énergie** ; les autres faces produisent de l'énergie.

| Bloc | Capacité | Niveau | Photo |
|------|----------|--------|-------|
| Energy Box | 40 000 E | Niveau 1 | ![energy_box](../../../img/industrial_elixir/machines/energy_box_front.png) |
| CESU | 300 000 E | Niveau 2 | ![cesu](../../../img/industrial_elixir/machines/cesu_front.png) |
| MFE | 4 000 000 E | Niveau 3 | ![mfe](../../../img/industrial_elixir/machines/mfe_front.png) |
| MFSU | 40 000 000 E | Niveau 4 | ![mfsu](../../../img/industrial_elixir/machines/mfsu_front.png) |

## Chargeurs

Les chargeurs se comportent comme des boîtes d'énergie mais **chargent également sans fil** tout objet énergétique (batterie, jetpack, armure quantique, etc.) dans l'inventaire du joueur se tenant dessus. Le chargeur ne charge que les objets d'un niveau égal ou inférieur au sien.

| Bloc | Capacité | Niveau | Photo |
|------|----------|--------|-------|
| Chargeur | 40 000 E | Niveau 1 | ![charge_pad](../../../img/industrial_elixir/machines/charge_pad_front.png) |
| Chargeur (CESU) | 300 000 E | Niveau 2 | ![charge_pad_cesu](../../../img/industrial_elixir/machines/charge_pad_cesu_front.png) |
| Chargeur (MFE) | 4 000 000 E | Niveau 3 | ![charge_pad_mfe](../../../img/industrial_elixir/machines/charge_pad_mfe_front.png) |
| Chargeur (MFSU) | 40 000 000 E | Niveau 4 | ![charge_pad_mfsu](../../../img/industrial_elixir/machines/charge_pad_mfsu_front.png) |

## Transformateurs

Les transformateurs LV, MV, HV et EV sont actuellement des **blocs décoratifs** — ils ont un modèle de face avant fonctionnel mais aucune logique de transformation d'énergie pour l'instant.

| Bloc | Niveau | Photo |
|------|--------|-------|
| Transformateur LV | Niveau 1 | ![lv_transformer](../../../img/industrial_elixir/machines/lv_transformer_front.png) |
| Transformateur MV | Niveau 2 | ![mv_transformer](../../../img/industrial_elixir/machines/mv_transformer_front.png) |
| Transformateur HV | Niveau 3 | ![hv_transformer](../../../img/industrial_elixir/machines/hv_transformer_front.png) |
| Transformateur EV | Niveau 4 | ![ev_transformer](../../../img/industrial_elixir/machines/ev_transformer_front.png) |


<AdUnit />

## Modules d'amélioration

La plupart des machines de traitement ont **4 emplacements d'amélioration**. Installez des modules d'amélioration pour modifier leur comportement.

| Amélioration | Effet | Photo |
|--------------|-------|-------|
| Amélioration Overclocker | Vitesse **−30 %** par objet, Puissance **+60 %** par objet | ![overclocker](../../../img/industrial_elixir/items/overclocker.png) |
| Amélioration de stockage d'énergie | Ajoute **+10 000 E** de stockage par objet | ![energy_storage](../../../img/industrial_elixir/items/energy_storage.png) |
| Amélioration de transformateur | Augmente le niveau d'énergie de **+1** par objet | ![transformer](../../../img/industrial_elixir/items/transformer.png) |
| Amélioration d'inverseur redstone | Inverse le signal redstone | ![redstone_inverter](../../../img/industrial_elixir/items/redstone_inverter.png) |

## Tuyaux à fluides

Les tuyaux à fluides déplacent les fluides entre les réservoirs et les machines à fluides.

| Tuyau | Fonction | Photo |
|-------|----------|-------|
| Tuyau à fluides en bois | **Extrait** les fluides des réservoirs/machines et des blocs sources de fluides | ![pipe_wooden_fluid](../../../img/industrial_elixir/pipes/pipe_wooden_fluid.png) |
| Tuyau à fluides en pierre | **Transporte** les fluides ; n'extrait pas | ![pipe_stone_fluid](../../../img/industrial_elixir/pipes/pipe_stone_fluid.png) |

## Réservoir de fluides

![fluid_tank](../../../img/industrial_elixir/machines/fluid_tank_front.png)

Le Réservoir de fluides stocke **16 seaux (16 000 mB)** d'un seul fluide. Faites un clic droit avec un seau (par exemple d'eau ou de lave) pour le remplir, et videz un seau pour le drainer. Il remplit et vide automatiquement les cellules et seaux de fluides via ses emplacements d'inventaire. L'interface graphique affiche le taux de remplissage.

Voir [Fluides](./11%20Fluids) pour les trois fluides personnalisés du mod.

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
