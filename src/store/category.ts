
import { DeliveryClient } from "@kentico/kontent-delivery";
import { defineStore } from "pinia";
import { Category, Category_CODENAME } from "~~/models/category";

interface CategoryState {
    categories: Category[],
    dataLoaded: boolean
}

export const useCategory = defineStore('category', {
    state: (): CategoryState => ({
        categories: [],
        dataLoaded: false
    }),
    actions: {
        async getData(kontent: DeliveryClient) {
            if (!this.dataLoaded){
                this.categories = (await kontent
                    .items<Category>()
                    .type(Category_CODENAME)
                    .toPromise()).data.items
                this.dataLoaded = true
            }
        },
        async getBySlug(slug: string, kontent: DeliveryClient): Promise<Category> {
            await this.getData(kontent);
            return this.categories.find(c => c.elements.slug.value == slug) as Category;
        }
    }
})