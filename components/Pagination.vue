<template>
  <ul class="pagination">
    <li
      v-for="pageNumber in pageCount"
      :key="pageNumber"
      class="page-item"
      :class="{ active: pageNumber === currentPage }"
    >
      <nuxt-link
        :to="{ name: $route.name, query: { page: pageNumber } }"
        class="page-link"
      >
        {{ pageNumber }}
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },

  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pageSize)
    },
  },
}
</script>
