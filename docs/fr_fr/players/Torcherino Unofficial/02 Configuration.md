# Configuration

## Emplacement des fichiers de configuration
```txt
./minecraft/config/sci4me/Torcherino.cfg
```

## Fonction
```json
{ 
  "random_tick_rate": 4, 
  "log_placement": false,
  "blacklisted_blocks": [],
  "blacklisted_blockentities": [],
  "tiers": [
    {
      "name": "normal",
      "max_speed": 4,
      "xz_range": 4,
      "y_range": 1
    },
    {
      "name": "compressed",
      "max_speed": 36,
      "xz_range": 4,
      "y_range": 1
    },
    {
      "name": "double_compressed",
      "max_speed": 324,
      "xz_range": 4,
      "y_range": 1
    }
  ],
  "online_mode": ""
}
```



- `random_tick_rate` (int) : multiplicateur supplémentaire du taux de ticks aléatoires des blocs causé par les torcherinos
- `log_placement` (bool) : enregistrer ou non dans les journaux le placement des torcherinos dans le monde. utile pour les administrateurs de serveurs pour traquer les lags
- `blacklisted_blocks` (liste) : identifiants des blocs qui ne doivent pas être accélérés
- `blacklisted_blockentities` (liste) : identifiants des entités de blocs qui ne doivent pas être accélérées
- `online_mode` (string) : lorsqu'il est défini sur ONLINE, les Torcherinos ne fonctionnent que si leur propriétaire est en ligne. S'il est défini sur RESTART, les Torcherinos fonctionneront pour toute personne qui s'est connectée depuis le démarrage du serveur. Toute autre valeur leur permet de fonctionner à chaque fois que leur chunk est chargé.
- `tiers` (liste) : niveaux supplémentaires de torcherino à enregistrer.

Format de définition d'un niveau :

- `name` (string) : sera inclus dans le nom d'enregistrement. doit être unique
- `max_speed` (int) : multiplicateur maximal de la vitesse des ticks causé par ce niveau
- `xz_range` (int) : rayon horizontal en blocs pour l'effet de ce niveau
- `y_range` (int) : portée verticale en blocs pour l'effet de ce niveau

Vous devez fournir les fichiers d'état de bloc, de modèle, de texture, de langue, de table de butin et de recette pour tous les niveaux non par défaut que vous ajoutez. Tous les blocs générés seront automatiquement ajoutés à la liste noire interne et leurs identifiants seront les suivants :

- torch : `torcherino:NAME_torcherino`
- lantern : `torcherino:NAME_lantern`
- jack-o-lantern : `torcherino:NAME_lanterino`

#### Remerciements particuliers à lukegrahamlandry. Cette page fait référence au site web de lukegrahamlandry.
<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
