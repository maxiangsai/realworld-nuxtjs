/**
 * 用户api
 */
export default ($axios) => ({
  /**
   * 登录
   * @param {email: string, password: string} user
   * @returns user
   */
  login(user) {
    return $axios.post('/users/login', { user })
  },

  /**
   * 注册
   * @param {username: string; email: string; password: string} user
   */
  register(user) {
    return $axios.post('/users', { user })
  },

  /**
   * 获取用户资料
   * @param string
   */
  getProfile(username) {
    return $axios.get(`/profiles/${username}`)
  },

  updateProfile(user) {
    return $axios.put('/user', { user })
  },
})
