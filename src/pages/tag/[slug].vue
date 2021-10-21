<template>
  <div>
    <Sidebar :isHomePage="false" />
    <div class="content">
      <div class="content__inner">
        <div class="page">
            <h1 class="page__title">
              All Articles tagged as &quot;{{tag.elements.title.value}}&quot;
            </h1>
            <div className="page__body">
              <Article v-for="article in articles" v-bind:key="article.system.id" :data="article" />
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { useTag } from "../../store/tag"
import { useArticle } from "../../store/article"
import { useNuxtApp } from "#app"

export default {
    async setup() {
        const kontent = useNuxtApp().$kontent
        const route = useRoute()
        const tagStore = useTag()
        const articleStore = useArticle()

        const tag = await tagStore.getBySlug(route.params.slug.toString(), kontent)
        const articles = await articleStore.getByTag(tag.system.codename, kontent)
        return {
            tag,
            articles
        }
    }
}
</script>
