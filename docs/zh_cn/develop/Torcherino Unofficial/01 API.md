# API

其他模组可以从它们自己的代码中访问部分配置系统。使用 [cursemaven](https://www.cursemaven.com/) 将依赖添加到您的开发环境。为了避免在未安装 torcherino 时用户崩溃，请确保只有在模组存在时才加载该 API 类。`torcherino`

为了保证次要版本之间的稳定性，我们建议您避免直接访问该类。请按如下方式获取 API 实例，`TorcherinoImpl`

```text
TorcherinoAPI api = TorcherinoAPI.INSTANCE;
```



#### 黑名单 (Blacklists)

这些方法只能在方块注册之后调用。

方块可以使用 或 添加到黑名单中。方块实体可以使用 或 添加到黑名单中。这些条目将应用于上面配置的黑名单之外。`blacklistBlock(ResourceLocation)``blacklistBlock(Block)``blacklistBlockEntity(ResourceLocation)``blacklistBlockEntity(BlockEntityType)`

您可以使用 或 检查某物是否被列入黑名单。`isBlockBlacklisted(Block)``isBlockEntityBlacklisted(BlockEntityType)`

#### 等级 (Tiers)

```
ImmutableMap<ResourceLocation, Tier> tiers = api.getTiers()` 将提供所有当前已注册的 torcherino 等级。将提供有关特定已注册等级的数据。`getTier(ResourceLocation)
```

#### 特别感谢 lukegrahamlandry。此页面参考了 lukegrahamlandry 的网站。

<AdUnit />
<script setup>
import AdUnit from "../../../../components/wikiad.vue";
</script>
