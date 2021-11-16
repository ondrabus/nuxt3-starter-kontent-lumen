
import { defineStore } from "pinia";
import { Author } from "~~/models/author";
import { projectModel } from "~~/models/_project";
import { SiteMetadata } from "~~/models/site_metadata";
import { DeliveryClient } from "@kentico/kontent-delivery";

interface MetadataState {
    author: Author,
    metadata: SiteMetadata,
    dataLoaded: boolean,
}

export const useMetadata = defineStore('metadata', {
    state: (): MetadataState => ({
        author: {} as Author,
        metadata: {} as SiteMetadata,
        dataLoaded: false
    }),
    actions: {
        async getData(kontent: DeliveryClient) {
            if (!this.dataLoaded){

                this.author = (await kontent
                    .item<Author>(projectModel.contentTypes.author.codename)
                    .toPromise()).data.item

                this.metadata = (await kontent
                    .item<SiteMetadata>(projectModel.contentTypes.site_metadata.codename)
                    .toPromise()).data.item

                this.dataLoaded = true
            }
        }
    }
})