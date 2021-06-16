<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">conduit</h1>
        <p>A place to share your knowledge.</p>
      </div>
    </div>

    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="user" class="nav-item">
                <a class="nav-link disabled" href="">Your Feed</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="">Global Feed</a>
              </li>
            </ul>
          </div>

          <article-preview
            v-for="(item, index) in articles"
            :key="index"
            :article="item"
            @favorite="(val) => onFavorite(val, index)"
          />

          <pagination
            :total="articlesCount"
            :current-page="page"
            :page-size="limit"
          />
        </div>

        <div class="col-md-3">
          <div class="sidebar">
            <p>Popular Tags</p>

            <div class="tag-list">
              <a
                v-for="(tag, index) in tags"
                :key="index"
                href=""
                class="tag-pill tag-default"
              >
                {{ tag }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Pagination from '@/components/Pagination.vue'
import ArticlePreview from '@/components/ArticlePreview.vue'
export default {
  name: 'Home',
  components: { Pagination, ArticlePreview },
  async asyncData({ app, query }) {
    const page = parseInt(query.page || 1)
    const limit = 10
    const { articles, articlesCount } = await app.$article.getArticles({
      offset: (page - 1) * 10,
      limit,
    })

    const { tags } = await app.$tag.getTags()
    return {
      articles,
      articlesCount,
      page,
      limit,
      tags,
    }
  },
  computed: {
    ...mapState(['user']),
  },

  watchQuery: ['page'],

  methods: {
    async onFavorite(isFavorited, index) {
      const { slug } = this.articles[index]

      const { article } = isFavorited
        ? await this.$article.unFavorite(slug)
        : await this.$article.favorite(slug)
      this.articles.splice(index, 1, article)
    },
  },
}
</script>
