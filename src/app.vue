<script lang="ts">
import { useArticle } from './store/article';
import { useMetadata } from './store/metadata';
  export default {
    metaInfo: {
      title: "Nuxt 3 + Kontent by Kentico",
      titleTemplate: "&s | Kontent"
    },
  }
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
