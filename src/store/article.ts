
import { defineStore } from "pinia";
import { Article } from "~~/models/article";
import { projectModel } from "~~/models/_project";
import { DeliveryClient } from "@kentico/kontent-delivery";

interface ArticleState {
    articles: Article[],
    dataLoaded: boolean
}

export const useArticle = defineStore('article', {
    state: (): ArticleState => ({
        articles: [],
        dataLoaded: false
    }),
    getters: {
        topThree: (state) => state.articles.slice(0, 3)
    },
    actions: {
        async getData(kontent: DeliveryClient) {
            if (!this.dataLoaded){
                this.articles = (await kontent
                    .items<Article>()
                    .type(projectModel.contentTypes.article.codename)
                    .orderByDescending(`elements.${projectModel.contentTypes.article.elements.date.codename}`)
                    .toPromise()).data.items
                this.dataLoaded = true
            }
        },
        async getBySlug(slug: string, kontent: DeliveryClient): Promise<Article> {
            await this.getData(kontent)
            return this.articles.find(a => a.elements.slug.value == slug) as Article
        },
        async getByCategory(categoryCodename: string, kontent: DeliveryClient): Promise<Article[]>{
            await this.getData(kontent)
            return this.articles.filter(a => a.elements.category.value.some(c => c == categoryCodename))
        },
        async getByTag(tagCodename: string, kontent: DeliveryClient): Promise<Article[]>{
            await this.getData(kontent)
            return this.articles.filter(a => a.elements.tags.value.some(t => t == tagCodename))
        }
    }
})