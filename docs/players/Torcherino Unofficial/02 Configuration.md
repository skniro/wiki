# Configuration

## Location of configuration files
```txt
./minecraft/config/sci4me/Torcherino.cfg
```

## Function
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



- `random_tick_rate` (int): additional multiplier on random block tick rate caused by torcherinos
- `log_placement` (bool): whether to log when torcherinos are placed in the world. useful for server admins tracking down lag
- `blacklisted_blocks` (list): identifiers of blocks that should not be sped up
- `blacklisted_blockentities` (list): identifiers of block entities that should not be sped up
- `online_mode` (string): When set to ONLINE, Torcherinos only run its owner is currently online. If set to RESTART then Torcherinos will run for anyone who has logged in since the server started. Any value allows them to run whenever their chunk is loaded.
- `tiers` (list): additional tiers of torcherino to register.

Tier definition format:

- `name` (string): will be included in registry name. must be unique
- `max_speed` (int): max multiplier on tick speed caused by this tier
- `xz_range` (int): horizontal radius in blocks for this tier to effect
- `y_range` (int): vertical range in blocks for thier tier to effect

You must provide block state, model, texture, lang, loot table, and recipe files for any non-default tiers you add. All generated blocks will be automatically added to the internal blacklist and their identifiers will be as follows:

- torch: `torcherino:NAME_torcherino`
- lantern: `torcherino:NAME_lantern`
- jack-o-lantern: `torcherino:NAME_lanterino`

#### Special thanks forlukegrahamlandry. This page refers to the lukegrahamlandry website.
<AdUnit />
<script setup>
import AdUnit from "../../../components/wikiad.vue";
</script>