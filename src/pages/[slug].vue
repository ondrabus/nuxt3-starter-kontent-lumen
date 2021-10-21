<template>
  <div>
    <Head>
        <Title>{{menuItem.elements.label.value}} | Kontent + Nuxt 3</Title>
    </Head>

    <Sidebar :isHomePage="false" />
    <div class="content">
      <div class="content__inner">
        <div class="page" :data-kontent-item-id="menuItem.elements.content.linkedItems[0].system.id">
          <h1 class="page__title" data-kontent-element-codename="title">
            {{ menuItem.elements.content.linkedItems[0].elements.title.value }}
          </h1>
          <div
            class="page__body"
            data-kontent-element-codename="description"
            v-html="menuItem.elements.content.linkedItems[0].elements.description.value"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useMenu } from '../store/menu';
import { useRoute } from 'vue-router';
import { useNuxtApp } from '#app';

export default {
    async setup() {
        const kontent = useNuxtApp().$kontent
        const menuStore = useMenu()
        const route = useRoute()

        const menuItem = await menuStore.getBySlug(route.params.slug.toString(), kontent);
        return {
            menuItem
        }
    },
}
</script>