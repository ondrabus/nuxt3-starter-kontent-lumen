<template>
  <div class="article" :data-kontent-item-id="data.system.id">
    <div class="article__meta">
      <time
        class="article__meta-time"
        :dateTime="$dateFormat(data.elements.date.value, 'MMMM D, YYYY')"
        data-kontent-element-codename="date"
      >
        {{$dateFormat(data.elements.date.value, "MMMM YYYY")}}
      </time>
      <span class="article__meta-divider" />
      <span
        class="article__meta-category"
        :key="data.elements.category.linkedItems[0].elements.slug.value"
        data-kontent-element-codename="category"
      >
        <nuxt-link
          :to="`/category/${data.elements.category.linkedItems[0].elements.slug.value}/`"
          class="article__meta-category-link"
        >
          {{ data.elements.category.linkedItems[0].elements.title.value }}
        </nuxt-link>
      </span>
    </div>
    <h2 class="article__title" data-kontent-element-codename="title">
      <nuxt-link class="article__title-link" :to="`/article/${data.elements.slug.value}`">
        {{ data.elements.title.value }}
      </nuxt-link>
    </h2>
    <p class="article__description" data-kontent-element-codename="content" v-html="data.elements.content.value.substr(3, Math.min(200, data.elements.content.value.length - 6))"></p>
    <nuxt-link class="article__readmore" :to="`/article/${data.elements.slug.value}`">
      Read
    </nuxt-link>
  </div>
</template>

<script lang="ts">
export default ({
    props: ["data"],
});
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.article {
    @include margin-bottom(1.25);
    &:last-child {
        @include margin-bottom(.5);
    }
    &__title {
        font-size: $typographic-base-font-size * 1.6875;
        @include line-height(1.5);
        @include margin-top(0);
        @include margin-bottom(.5);
        &-link {
            color: $color-base;
            &:hover,
            &:focus {
                color: $color-base;
                border-bottom: 1px solid $color-base;
            }
        }
    }
    &__description {
        font-size: $typographic-base-font-size;
        @include line-height(1);
        @include margin-bottom(.75);
    }
    &__meta {
        &-time {
            font-size: $typographic-small-font-size;
            color: $color-base;
            font-weight: 500;
            text-transform: uppercase;
        }
        &-divider {
            margin: 0 5px;
        }
        &-category {
            &-link {
                font-size: $typographic-small-font-size;
                color: $color-secondary;
                font-weight: 500;
                text-transform: uppercase;
                &:hover,
                &:focus {
                    color: $color-primary;
                }
            }
        }
    }
    &__readmore {
        font-size: $typographic-base-font-size;
        color: $color-primary;
        &:hover,
        &:focus {
            color: $color-primary;
            border-bottom: 1px solid $color-primary;
        }
    }
}
</style>