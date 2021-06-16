/**
 * 文章api
 */
export default ($axios) => ({
  /**
   * 获取文章列表
   * @param { author: string; limit: number, offset: number }
   * @returns
   */
  getArticles(params) {
    return $axios.get('/articles', {
      params,
    })
  },

  create(article) {
    return $axios.post('/articles', { article })
  },

  update(slug, article) {
    return $axios.put(`/articles/${slug}`, { article })
  },

  delete(slug) {
    return $axios.delete(`/articles/${slug}`)
  },

  getDetail(slug) {
    return $axios.get(`/articles/${slug}`)
  },

  favorite(slug) {
    return $axios.post(`/articles/${slug}/favorite`)
  },

  unFavorite(slug) {
    return $axios.delete(`/articles/${slug}/favorite`)
  },
})
