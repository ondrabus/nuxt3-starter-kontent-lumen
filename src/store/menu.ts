
import { defineStore } from "pinia";
import { Menu_item } from "~~/models/menu_item";
import { Menu, Menu_CODENAME } from "~~/models/menu";
import { DeliveryClient } from "@kentico/kontent-delivery";

interface MenuState {
    menuItems: Menu_item[],
    dataLoaded: boolean
}

export const useMenu = defineStore('menu', {
    state: (): MenuState => ({
        menuItems: [],
        dataLoaded: false
    }),
    actions: {
        async getData(kontent: DeliveryClient) {
            if (!this.dataLoaded){
                this.menuItems = (await kontent
                    .item<Menu>(Menu_CODENAME)
                    .depthParameter(2)
                    .toPromise()).data.item.elements.menu_items.linkedItems as Menu_item[];
                this.dataLoaded = true
            }
        },
        async getBySlug(slug: string, kontent: DeliveryClient): Promise<Menu_item>{
            await this.getData(kontent)
            return this.menuItems.find(i => i.elements.slug.value == slug) as Menu_item
        }
    }
})