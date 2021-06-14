<template>
  <div class="article-list">
    <article-preview
      v-for="(item, index) in articles"
      :key="index"
      :article="item"
    />
    <pagination :total="total" @page="(val) => $emit('page', val)" />
    <div v-if="!articles.length" class="article-preview">
      No articles are here... yet.
    </div>
  </div>
</template>

<script>
import ArticlePreview from '@/components/ArticlePreview'
import Pagination from './Pagination.vue'
export default {
  components: { ArticlePreview, Pagination },
  props: {
    articles: {
      type: Array,
      required: true,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
}
</script>
