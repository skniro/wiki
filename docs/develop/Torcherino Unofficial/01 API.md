# API

Other mods may access part of the config system from their own code. Use [cursemaven](https://www.cursemaven.com/) to add the dependency to your dev environment. To avoid users crashing when torcherino is not installed, make sure the api is only class-loaded if the mod is present. `torcherino`

To guarantee stability between minor versions, we recommend you avoid accessing the class directly. Instead, retrieve the api instance as follows,`TorcherinoImpl`

```text
TorcherinoAPI api = TorcherinoAPI.INSTANCE;
```



#### Blacklists

These methods should only be called after blocks are registered.

Blocks may be added to the blacklist with or . Block entities may be added to the blacklist with or . These entries will be applied in addition to the configured blacklists above. `blacklistBlock(ResourceLocation)``blacklistBlock(Block)``blacklistBlockEntity(ResourceLocation)``blacklistBlockEntity(BlockEntityType)`

You can check if something is blacklisted with or .`isBlockBlacklisted(Block)``isBlockEntityBlacklisted(BlockEntityType)`

#### Tiers

```
ImmutableMap<ResourceLocation, Tier> tiers = api.getTiers()` will provide all currently registered torcherino tiers. will provide data on a specific registered tier.`getTier(ResourceLocation)
```

#### Special thanks forlukegrahamlandry. This page refers to the lukegrahamlandry website.

<AdUnit />
<script setup>
import AdUnit from '../../../vue/wikiad.vue';
</script>