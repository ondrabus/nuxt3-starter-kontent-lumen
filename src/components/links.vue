<template>
  <div class="links">
    <ul class="links__list">
      <li v-if="data.elements.twitter.value" class="links__list-item" data-kontent-element-codename="twitter">
        <a
          :href="`https://www.twitter.com/${data.elements.twitter.value}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="icon-twitter" />
        </a>
      </li>
      <li v-if="data.elements.github.value" class="links__list-item" data-kontent-element-codename="github">
        <a
          :href="`https://www.github.com/${data.elements.github.value}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="icon-github" />
        </a>
      </li>
      <li v-if="data.elements.vk.value" class="links__list-item" data-kontent-element-codename="vk">
        <a
          :href="`https://www.vk.com/${data.elements.vk.value}`"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="icon-vkontakte" />
        </a>
      </li>
    </ul>
    <ul class="links__list">
      <li v-if="data.elements.email.value" class="links__list-item" data-kontent-element-codename="email">
        <a :href="`mailto:${data.elements.email.value}`">
          <i class="icon-mail" />
        </a>
      </li>
      <li v-if="data.elements.telegram.value" class="links__list-item" data-kontent-element-codename="telegram">
        <a :href="`telegram:${data.elements.telegram.value}`">
          <i class="icon-paper-plane" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
    export default ({
        props: ['data']
    })
</script>

<style lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/mixins";

.links {
    @include margin-bottom(1);
    &__list {
        display: flex;
        list-style: none;
        padding: 0;
        margin: 10px -3px;
        &-item {
            padding: 0;
            margin: 0 3px;
            height: 24px;
            width: 24px;
            line-height: 24px;
            border-radius: 3px;
            text-align: center;
            background: $color-gray-bg;
            & a {
                border: 0;
                & i {
                    font-size: 14px;
                    color: lighten($color-base, 20%);
                }
                &:hover,
                &:focus {
                    & i {
                        color: $color-base;
                    }
                }
            }
        }
    }
}

</style>