<template>
  <div class="profile-page">
    <div class="user-info">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{ profile.username }}</h4>
            <p v-if="profile.bio">
              {{ profile.bio }}
            </p>
            <button class="btn btn-sm btn-outline-secondary action-btn">
              <i class="ion-plus-round"></i>
              &nbsp;
              {{ profile.following ? 'Follow' : 'Edit Profile Settings' }}
            </button>
          </div>
        </div>
      </div>
    </div>
    {{ res }}
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item">
                <a class="nav-link active" href="">My Articles</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="">Favorited Articles</a>
              </li>
            </ul>
          </div>

          <article-list :articles="articles" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ArticleList from '@/components/ArticleList'
export default {
  components: { ArticleList },
  middleware: ['authenticated'],
  async asyncData({ app, store }) {
    const { profile } = await app.$user.getProfile(
      store.state.user ? store.state.user.username : ''
    )
    const { articles, articlesCount } = await app.$article.getArticles({
      author: store.state.user.username,
      offset: 0,
      limit: 5,
    })

    return {
      profile,
      articles,
      articlesCount,
    }
  },
  data() {
    return {
      articles: [],
    }
  },
  computed: {
    ...mapState(['user']),
  },
}
</script>
