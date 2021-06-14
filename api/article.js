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
})
