import { defineNuxtPlugin } from '#app'
import { DeliveryClient, IDeliveryClientConfig } from '@kentico/kontent-delivery'

export default defineNuxtPlugin(nuxtApp => {
    const config = nuxtApp.$config.kontent as IDeliveryClientConfig

    if (!config){
        console.error("Nuxt 3 Kontent plugin: configuration object is either not present or does not fit the config format.")
        return
    }

    const kontent = new DeliveryClient(config)
    nuxtApp.provide('kontent', kontent)
})

declare module '#app'{
    interface NuxtApp {
        $kontent: DeliveryClient
    }
}