<template>
  <div class="article-list">
    <article-preview
      v-for="(item, index) in articles"
      :key="index"
      :article="item"
    />

    <div v-if="!articles.length" class="article-preview">
      No articles are here... yet.
    </div>
  </div>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview'
export default {
  components: { ArticlePreview },
  props: {
    articles: {
      type: Array,
      required: true,
    },
  },
}
</script>
