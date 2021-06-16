<template>
  <create-article @publish="onPublish" />
</template>

<script>
import CreateArticle from '@/components/EditArticle.vue'

export default {
  components: { CreateArticle },

  methods: {
    async onPublish(data) {
      const { article } = await this.$article.create(data)
      if (article) {
        this.$router.push(`/article/${article.slug}`)
      }
    },
  },
}
</script>
