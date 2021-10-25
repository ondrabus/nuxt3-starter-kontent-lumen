<template>
  <div>
    <div>
      <nuxt-link class="article-single__home-button" to="/">
        All Articles
      </nuxt-link>
    </div>
    <div class="article-single" :data-kontent-item-id="data.system.id">
      <div class="article-single__inner">
        <h1 class="article-single__title" data-kontent-element-codename="title">
          {{ data.elements.title.value }}
        </h1>
        <div
          data-kontent-element-codename="content"
          class="article-single__body"
          v-html="data.elements.content.value"
        ></div>
      </div>
      <div class="article-single__date" data-kontent-element-codename="date">
        <em> Published {{$dateFormat(data.elements.date.value, "D MMM YYYY")}}</em>
      </div>
      <div class="article-single__footer">
        <div class="article-single__tags">
          <ul
            class="article-single__tags-list"
            data-kontent-element-codename="tags"
          >
            <li
              v-for="tag in data.elements.tags.linkedItems"
              class="article-single__tags-list-item"
              :key="tag.system.codename"
            >
              <nuxt-link
                :to="`/tag/${tag.elements.slug.value}`"
                class="article-single__tags-list-item-link"
              >
                {{ tag.elements.title.value }}
              </nuxt-link>
            </li>
          </ul>
        </div>
        <hr />
        <p class="article-single__footer-text">
          {{ metadata.elements.subtitle.value }}
          <a
            :href="`https://twitter.com/${author.elements.twitter.value}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <br />
            <strong>{{ author.elements.name.value }}</strong> on Twitter
          </a>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

    export default ({
      setup(){
      },
        props: ["data", "author", "metadata"],
    });
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.article-single {
  &__inner {
    max-width: $layout-article-single-max-width;
    padding: 0 15px;
    margin: 0 auto;
  }
  &__title {
    font-size: $typographic-base-font-size * 2;
    max-width: $layout-article-single-width;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    text-align: center;
    @include line-height(1.65);
    @include margin-top(1);
    @include margin-bottom(0);
  }
  &__body {
    & figure {
      @include margin-bottom(1);
      & blockquote {
        font-style: italic;
        text-align: center;
        margin-top: 0;
        @include padding(1, 0);
        & p {
          max-width: $layout-article-single-width;
          font-size: $typographic-base-font-size * 1.6817;
          margin-top: 0;
          @include margin-bottom(1);
          @include line-height(1.5);
        }
      }
    }
    & a {
      text-decoration: underline;
    }
    & .gatsby-highlight {
      max-width: $layout-article-single-width;
      margin-left: 15px;
      margin-right: 15px;
      @include margin-bottom(1);
    }
    & :not(div) {
      max-width: $layout-article-single-width;
      margin-left: auto;
      margin-right: auto;
    }
    & img {
      max-width: 100%;
    }
  }
  &__footer {
    max-width: $layout-article-single-width;
    margin-left: 15px;
    margin-right: 15px;
    @include line-height(1);
    @include margin-top(1);
    @include margin-bottom(2);
    &-text {
      & a {
        text-decoration: underline;
      }
    }
  }
  &__date {
    max-width: $layout-article-single-width;
    margin-left: auto;
    margin-right: auto;
  }
  &__tags {
    @include margin-bottom(0.5);
    &-list {
      list-style: none;
      margin: 0 -5px;
      padding: 0;
      &-item {
        display: inline-block;
        margin: 10px 5px;
        &-link {
          background: $color-gray-bg;
          text-decoration: none;
          border: 0;
          border-radius: 3px;
          color: lighten($color-base, 20%);
          line-height: $typographic-base-line-height;
          padding: 8px 16px;
          &:hover,
          &:focus {
            color: $color-base;
            background: darken($color-gray-bg, 5%);
            border: 0;
          }
        }
      }
    }
  }
  &__home-button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 90px;
    font-size: $typographic-base-font-size;
    padding: 0 16px;
    height: 35px;
    line-height: 35px;
    text-align: center;
    color: lighten($color-base, 20%);
    background: $color-gray-bg;
    font-weight: 400;
    border-radius: 3px;
    @include margin-top(1);
    &:hover,
    &:focus {
      color: $color-base;
      background: darken($color-gray-bg, 5%);
      border: 0;
    }
  }
}

@include breakpoint-sm {
  .article-single {
    &__footer {
      margin-left: auto;
      margin-right: auto;
    }
    &__body {
      & .gatsby-highlight {
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}

@include breakpoint-md {
  .article-single {
    &__inner {
      padding: 0;
    }
    &__title {
      font-size: $typographic-base-font-size * 3;
      @include line-height(2.25);
      @include margin-top(2.25);
      @include margin-bottom(1.5);
    }
    &__body {
      font-size: $typographic-base-font-size * 1.125;
      @include line-height(1.125);
      @include margin-bottom(1.125);
      & p {
        font-size: $typographic-base-font-size * 1.125;
        @include line-height(1.125);
        @include margin-bottom(1.125);
      }
    }
    &__home-button {
      position: fixed;
      max-width: auto;
      margin: 0;
      top: 30px;
      left: 30px;
    }
  }
}
</style>
