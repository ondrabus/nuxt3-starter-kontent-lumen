<template>
  <div>
    <Head>
        <Title>{{article.elements.title.value}} | Kontent + Nuxt 3</Title>
    </Head>

    <article-detail :data="article" :author="author" :metadata="metadata" />
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { useArticle } from "../../store/article"
import { useMetadata } from '../../store/metadata'
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app'

export default {
    async setup() {
        const kontent = useNuxtApp().$kontent
        const route = useRoute()
        const articleStore = useArticle()
        const metadataStore = useMetadata()

        const article = await articleStore.getBySlug(route.params.slug.toString(), kontent)
        await metadataStore.getData(kontent)
        const { author, metadata } = storeToRefs(metadataStore)

        return {
            article,
            author,
            metadata
        }
    }
}
</script>
