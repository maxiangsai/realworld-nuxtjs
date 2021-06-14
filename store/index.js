import Cookie from 'js-cookie'
const cookieParser = process.server ? require('cookieparser') : undefined

export const state = () => ({
  user: null,
})

export const mutations = {
  setUser(state, data) {
    state.user = data
  },
}

export const getters = {}

export const actions = {
  nuxtServerInit({ dispatch, commit, getters, state }, { app, req, res }) {
    if (req.headers.cookie) {
      const cookie = cookieParser.parse(req.headers.cookie)
      try {
        commit('setUser', JSON.parse(cookie.user))
      } catch (error) {
        console.error(error.message)
      }
    }
  },

  async login({ commit }, data) {
    const { user } = await this.$user.login(data)
    console.log(user)
    Cookie.set('user', user)
    commit('setUser', user)
  },

  logout({ commit }) {
    Cookie.remove('user')
    commit('setUser', null)
  },
}
