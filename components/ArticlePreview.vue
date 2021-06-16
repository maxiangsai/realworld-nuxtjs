<template>
  <div class="article-preview">
    <div class="article-meta">
      <a href=""><img :src="article.author.image" /></a>
      <div class="info">
        <a href="" class="author">{{ article.author.username }}</a>
        <span class="date">{{ format(article.createdAt) }}</span>
      </div>
      <button
        class="btn btn-sm pull-xs-right"
        :class="[article.favorited ? 'btn-primary' : 'btn-outline-primary']"
        @click="$emit('favorite', article.favorited)"
      >
        <i class="ion-heart"></i> {{ article.favoritesCount }}
      </button>
    </div>
    <a href="" class="preview-link">
      <h1>{{ article.title }}</h1>
      <p>{{ article.description }}</p>
      <span>Read more...</span>
      <ul class="tag-list">
        <li
          v-for="(tag, index) in article.tagList"
          :key="index"
          class="tag-default tag-pill tag-outline"
        >
          {{ tag }}
        </li>
      </ul>
    </a>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },

  methods: {
    format(number) {
      return dayjs(number).format('YYYY-MM-DD HH:mm:ss')
    },
  },
}
</script>
