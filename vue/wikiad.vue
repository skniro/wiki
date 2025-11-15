<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  try {
    window.addAds()
    console.log('AdUnit loaded')
  } catch (e) {
    console.log(e)
  }
})
</script>

<!-- wikiad -->
<template>
  <div class="gads">
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-9004356343429206"
     data-ad-slot="2717838300"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
  </div>
</template>