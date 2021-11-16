import { defineNuxtPlugin } from '#app'
import { projectModel } from '~~/models/_project'

export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.provide('projectModel', projectModel)

})