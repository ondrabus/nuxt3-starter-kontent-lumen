<template>
    <div>
        <Head>
            <Title>Kontent by Kentico + Nuxt 3 sample site</Title>
        </Head>

        <Sidebar :isHomePage="true"/>
        <div class="content">
            <div class="content__inner">
                <Article v-for="article in articles" :data="article" :key="article.system.id" />
            </div>
        </div>
    </div>
</template>

<script>
import { useArticle } from "~~/store/article"
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app'

export default {
    async setup() {
        const kontent = useNuxtApp().$kontent
        const store = useArticle();

        await store.getData(kontent);
        const { topThree } = storeToRefs(store)
        
        return {
            articles: topThree
        }
    }
}
</script>