<template>
  <ul class="pagination">
    <li
      v-for="pageNumber in pageCount"
      :key="pageNumber"
      class="page-item"
      :class="{ active: pageNumber === currentPage }"
    >
      <a
        href="javascript:;"
        class="page-link"
        @click="() => onPageChange(pageNumber)"
      >
        {{ pageNumber }}
      </a>
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
      default: 5,
    },
  },

  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pageSize)
    },
  },

  methods: {
    onPageChange(page) {
      this.$emit('page', page)
    },
  },
}
</script>
