<template>
  <edit-article :model="model" @publish="onPublish" />
</template>

<script>
import EditArticle from '@/components/EditArticle.vue'

export default {
  components: { EditArticle },
  async asyncData({ app, params }) {
    const { article } = await app.$article.getDetail(params.id)
    const { title, description, body, tagList } = article
    return {
      model: { title, description, body, tagList },
    }
  },

  methods: {
    async onPublish(data) {
      const { id } = this.$route.params
      const { article } = await this.$article.update(id, data)
      if (article) {
        this.$router.push(`/article/${id}`)
      }
    },
  },
}
</script>
