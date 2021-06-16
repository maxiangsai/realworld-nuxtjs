<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <div class="article-meta">
          <a href=""><img :src="article.author.image" /></a>
          <div class="info">
            <a href="" class="author">{{ article.author.username }}</a>
            <span class="date">{{ format(article.createdAt) }}</span>
          </div>
          <button class="btn btn-sm btn-outline-secondary" @click="onEdit">
            <i class="ion-edit"></i> Edit Article
          </button>
          &nbsp;&nbsp;
          <button class="btn btn-sm btn-outline-danger" @click="onDelete">
            <i class="ion-trash-a"></i>
            &nbsp; Delete Article
          </button>
        </div>
      </div>
    </div>

    <div class="container page">
      <div class="row article-content">
        <div class="col-md-12">
          <p>
            {{ article.description }}
          </p>
          <h2 id="introducing-ionic">{{ article.title }}</h2>
          <p>{{ article.body }}</p>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-md-8 offset-md-2">
          <form class="card comment-form">
            <div class="card-block">
              <textarea
                class="form-control"
                placeholder="Write a comment..."
                rows="3"
              ></textarea>
            </div>
            <div class="card-footer">
              <img :src="article.author.image" class="comment-author-img" />
              <button class="btn btn-sm btn-primary">Post Comment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
  async asyncData({ app, params }) {
    const { article } = await app.$article.getDetail(params.id)
    return {
      article,
    }
  },

  methods: {
    format(date) {
      return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
    },

    onEdit() {
      this.$router.push(`/editor/${this.article.slug}`)
    },

    async onDelete() {
      const { id } = this.$route.params
      try {
        await this.$article.delete(id)
        this.$router.push('/')
      } catch (error) {
        console.error(error.message)
      }
    },
  },
}
</script>
