<template>
    <div class="sidebar">
      <div class="sidebar__inner" :data-kontent-item-id="author.system.id">
        <div class="sidebar__author">
          <div>
            <nuxt-link to="/">
              <img
                src="/radek.jpg"
                class="sidebar__author-photo"
                width="75"
                height="75"
                :alt="author.elements.name.value"
                data-kontent-element-codename="avatar_image"
              />
            </nuxt-link>
            <h1 v-if="isHomePage" class="sidebar__author-title" data-kontent-element-codename="name">
                <nuxt-link class="sidebar__author-title-link" to="/">
                    {{author.elements.name.value}}
                </nuxt-link>
            </h1>
            <h2 v-else class="sidebar__author-title" data-kontent-element-codename="name">
                <nuxt-link class="sidebar__author-title-link" to="/">
                    {{author.elements.name.value}}
                </nuxt-link>
            </h2>
            <p class="sidebar__author-subtitle" data-kontent-element-codename="bio">
                {{author.elements.bio.value}}
            </p>
          </div>
        </div>
        <div>
          <Menu />
          <Links :data="author" />
          <p class="sidebar__copyright">{{metadata.elements.copyright.value}}</p>
        </div>
      </div>
    </div>
</template>
<script lang="ts">
import { useMetadata } from "../store/metadata";
import { storeToRefs } from 'pinia'
import { useNuxtApp } from '#app';

export default {
    async setup() {
        const kontent = useNuxtApp().$kontent
        const store = useMetadata();
        
        await store.getData(kontent);
        const { author, metadata } = storeToRefs(store)
        return {
            author,
            metadata
        }
    },
    props: ['isHomePage']
}
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.sidebar {
    width: 100%;
    &__inner {
        position: relative;
        padding: 25px 20px 0;
    }
    &__author {
        &-photo {
            display: inline-block;
            margin-bottom: 0;
            border-radius: 50%;
            background-clip: padding-box;
        }
        &-title {
            font-size: $typographic-base-font-size * 1.125;
            font-weight: 500;
            @include line-height(1.125);
            @include margin(.5, 0, .5, 0);
            &-link {
                color: $color-base;
                &:hover,
                &:focus {
                    color: $color-base;
                }
            }
        }
        &-subtitle {
            color: $color-gray;
            @include line-height(1);
            @include margin-bottom(1);
        }
    }
    &__copyright {
        color: lighten($color-gray, 18%);
        font-size: $typographic-small-font-size;
    }
}

@include breakpoint-sm {
    .sidebar {
        width: 42%;
        &__inner {
            padding: 30px 20px 0;
            &:after {
                background: $color-gray-border;
                background: linear-gradient(to bottom, $color-gray-border 0%, $color-gray-border 48%, $color-white 100%);
                position: absolute;
                content: "";
                width: 1px;
                height: 540px;
                top: 30px;
                right: -10px;
                bottom: 0;
            }
        }
    }
}

@include breakpoint-md {
    .sidebar {
        width: 34%;
        &__inner {
            padding: 40px;
        }
    }
}
</style>