<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <a class="navbar-brand" href="index.html">conduit</a>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/" exact>Home</nuxt-link>
        </li>

        <template v-if="user">
          <li v-if="user" class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-compose"></i>&nbsp;New Post
            </a>
          </li>
          <li v-if="user" class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/profile">
              <img :src="user.image" class="avatar" alt="" />
              {{ user.username }}
            </nuxt-link>
          </li>
        </template>

        <template v-else>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/login">Sign in</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/register">Sign up</nuxt-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['user']),
  },
}
</script>
<style scoped>
.avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
