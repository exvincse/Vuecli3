import axios from 'axios'

export default {
  namespaced: true,
  state: {
    product: []
  },
  actions: {
    getProducts (context) {
      context.commit('LOADING', true, { root: true })
      return new Promise((resolve) => {
        const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/products/all`
        axios.get(api).then((response) => {
          if (response.data.success) {
            let filter = Object.values(response.data.products).map((item) => {
              return item
            })
            context.commit('PRODUCT', filter)
            context.commit('LOADING', false, { root: true })
            resolve()
          }
        })
      })
    }
  },
  mutations: {
    PRODUCT (state, payload) {
      state.product = payload
    }
  }
}
