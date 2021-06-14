import createUserApi from '@/api/user'
import createArticleApi from '@/api/article'

export default function ({ $axios, redirect, store }, inject) {
  $axios.setBaseURL('https://conduit.productionready.io/api')

  $axios.onRequest((config) => {
    if (store.state.user) {
      config.headers.Authorization = `Token ${store.state.user.token}`
    }

    return config
  })

  $axios.onResponse(({ data }) => {
    return data
  })

  $axios.onError((error) => {
    if (error.response.status === 500) {
      redirect('/sorry')
    }
  })

  inject('user', createUserApi($axios))
  inject('article', createArticleApi($axios))
}
