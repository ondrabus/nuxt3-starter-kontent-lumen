import { DeliveryClient } from "@kentico/kontent-delivery";
import { defineStore } from "pinia";
import { Tag } from "~~/models/tag";
import { projectModel } from "~~/models/_project";

interface TagState {
    tags: Tag[],
    dataLoaded: boolean
}

export const useTag = defineStore('tag', {
    state: (): TagState => ({
        tags: [],
        dataLoaded: false
    }),
    actions: {
        async getData(kontent: DeliveryClient) {
            if (!this.dataLoaded){
                this.tags = (await kontent
                    .items<Tag>()
                    .type(projectModel.contentTypes.tag.codename)
                    .toPromise()).data.items
                this.dataLoaded = true
            }
        },
        async getBySlug(slug: string, kontent: DeliveryClient) {
            await this.getData(kontent);
            return this.tags.find(c => c.elements.slug.value == slug) as Tag;
        }
    }
})