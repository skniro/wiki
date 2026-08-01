# API

D'autres mods peuvent accéder à une partie du système de configuration depuis leur propre code. Utilisez [cursemaven](https://www.cursemaven.com/) pour ajouter la dépendance à votre environnement de développement. Pour éviter que les utilisateurs ne plantent lorsque Torcherino n'est pas installé, assurez-vous que l'API n'est chargée que si le mod est présent. `torcherino`

Pour garantir la stabilité entre les versions mineures, nous vous recommandons d'éviter d'accéder directement à la classe. À la place, récupérez l'instance de l'API comme suit : `TorcherinoImpl`

```text
TorcherinoAPI api = TorcherinoAPI.INSTANCE;
```

#### Listes noires

Ces méthodes ne doivent être appelées qu'après l'enregistrement des blocs.

Les blocs peuvent être ajoutés à la liste noire avec ou . Les entités de bloc peuvent être ajoutées à la liste noire avec ou . Ces entrées s'ajoutent aux listes noires configurées ci-dessus. `blacklistBlock(ResourceLocation)``blacklistBlock(Block)``blacklistBlockEntity(ResourceLocation)``blacklistBlockEntity(BlockEntityType)`

Vous pouvez vérifier si quelque chose est sur liste noire avec ou .`isBlockBlacklisted(Block)``isBlockEntityBlacklisted(BlockEntityType)`

#### Tiers

```
ImmutableMap<ResourceLocation, Tier> tiers = api.getTiers()` fournira tous les tiers de torcherino actuellement enregistrés. fournira des données sur un tier enregistré spécifique.`getTier(ResourceLocation)
```

#### Remerciements spéciaux pour lukegrahamlandry. Cette page fait référence au site web de lukegrahamlandry.

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
