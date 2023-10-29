<template>
  <NuxtLink :to="`/detail/${member.login}`">
    <article class="card">
      <img :src="member.avatar_url" alt="" class="card__image" />
      <h2 class="card__content">
        {{ member.login }}
      </h2>
    </article>
  </NuxtLink>
</template>

<script lang="ts">
export default {
  props: {
    member: Object,
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 182px;

  &__image {
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 100%;
  }

  &__content {
    font-size: 1.2rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}
</style>
