<template>
  <div>
    <Head>
        <Title>{{category.elements.title.value}} | Kontent + Nuxt 3</Title>
    </Head>

    <Sidebar :isHomePage="false" />
    <div class="content">
      <div class="content__inner">
          <div class="page">
            <h1 class="page__title">
              {{category.elements.title.value}}
            </h1>
            <div class="page__body">
                <Article v-for="article in articles" v-bind:key="article.system.id" :data="article" />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { useCategory } from "../../store/category"
import { useArticle } from "../../store/article"
import { useNuxtApp } from "#app"

export default {
    async setup() {
        const kontent = useNuxtApp().$kontent
        const route = useRoute()
        const categoryStore = useCategory()
        const articleStore = useArticle()

        const category = await categoryStore.getBySlug(route.params.slug.toString(), kontent)
        const articles = await articleStore.getByCategory(category.system.codename, kontent)

        return {
            category,
            articles
        }
    }
}
</script>
