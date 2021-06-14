/**
 * 标签api
 */
export default ($axios) => ({
  /**
   * 获取标签列表
   * @returns tags: string[]
   */
  getTags() {
    return $axios.get('/tags')
  },
})
