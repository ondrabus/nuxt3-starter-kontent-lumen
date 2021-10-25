import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const dateFormat = (date: string, format: string): string => {
        const dateObj = new Date(date)
        format = format.replace("MMMM", months[dateObj.getMonth()])
        format = format.replace("MMM", months[dateObj.getMonth()].substr(0, 3))
        format = format.replace("YYYY", dateObj.getFullYear().toString())
        format = format.replace("D", dateObj.getDate().toString())

        return format
    }

    nuxtApp.provide('dateFormat', dateFormat)
})