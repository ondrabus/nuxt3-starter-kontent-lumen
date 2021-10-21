<template>
    <nav class="menu">
      <ul class="menu__list">
        <li v-for="item in menuItems" class="menu__list-item" :key="item.system.id">
          <nuxt-link 
            :to="`${item.elements.slug.value.startsWith('/') ? '' : '/'}${item.elements.slug.value}`"
            class="menu__list-item-link"
          >
            {{item.elements.label.value}}
          </nuxt-link>
        </li>
      </ul>
    </nav>
</template>

<script lang="ts">
import { useMenu } from "../store/menu";
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app';

export default {
    async setup() {
        const kontent = useNuxtApp().$kontent
        const store = useMenu()

        await store.getData(kontent);

        const { menuItems } = storeToRefs(store)
        return {
            menuItems
        }
    }
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.menu {
    @include margin-bottom(1);
    &__list {
        list-style: none;
        padding: 0;
        margin: 0;
        &-item {
            padding: 0;
            margin: 10px 0;
            &-link {
                font-size: $typographic-base-font-size;
                color: $typographic-base-font-color;
                font-weight: 400;
                border: 0;
                &:hover,
                &:focus {
                    color: $color-primary;
                    border-bottom: 1px solid $color-primary;
                }
                &--active {
                    color: $color-base;
                    border-bottom: 1px solid $color-base;
                }
            }
        }
    }
}

</style>