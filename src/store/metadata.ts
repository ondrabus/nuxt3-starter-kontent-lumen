
import { defineStore } from "pinia";
import { Author, Author_CODENAME } from "~~/models/author";
import { Site_metadata, Site_metadata_CODENAME } from "~~/models/site_metadata";
import { DeliveryClient } from "@kentico/kontent-delivery";

interface MetadataState {
    author: Author,
    metadata: Site_metadata,
    dataLoaded: boolean,
}

export const useMetadata = defineStore('metadata', {
    state: (): MetadataState => ({
        author: {} as Author,
        metadata: {} as Site_metadata,
        dataLoaded: false
    }),
    actions: {
        async getData(kontent: DeliveryClient) {
            if (!this.dataLoaded){

                this.author = (await kontent
                    .item<Author>(Author_CODENAME)
                    .toPromise()).data.item

                this.metadata = (await kontent
                    .item<Site_metadata>(Site_metadata_CODENAME)
                    .toPromise()).data.item

                this.dataLoaded = true
            }
        }
    }
})