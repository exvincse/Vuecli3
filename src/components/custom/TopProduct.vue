<template>
  <div>
    <section class="my-5">
      <div class="container">
        <div class="col-lg-10 mx-auto d-none d-lg-block">
          <swiper :options="swiperOption">
            <swiper-slide v-for="item in total_sort"
                   :key="item.product.id" style="width: 350px; margin-right: 30px;">
                  <div class="card mb-5">
                    <div class="card-position">
                      <div class="bg-cover"
                           style="height: 220px;"
                           :style="{backgroundImage:`url(${item.product.imageUrl})`}">
                      </div>
                      <span class="bg-primary text-white p-2 l-top">暢銷商品</span>
                    </div>
                    <div class="d-flex text-center">
                      <div class="col-7">
                        <div class="border-right py-3 text-tea">
                          <strong class="h5">{{item.product.title}}</strong>
                        </div>
                      </div>
                      <div class="col-5">
                        <div class="py-3 text-tea">
                          <strong class="h5"
                                  v-if="!item.product.origin_price">{{item.product.price}} 元</strong>
                          <strong class="h6"
                                  v-if="item.product.origin_price">{{item.product.origin_price}} 元</strong>
                        </div>
                      </div>
                    </div>
                    <button
                       class="btn btn-lwheat btn-lg l-btn"
                       @click="addtoCart(item.product.id)"
                       :disabled="addtoCartload===item.product.id">
                      <span class="h4 font-weight-bold text-tea">
                        <i class="fas fa-spinner fa-spin"
                           v-if="addtoCartload===item.product.id"></i>
                        加入購物車</span>
                    </button>
                  </div>
            </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>

        <div class="col-lg-10 mx-auto d-block d-lg-none">
          <div v-if="orders">
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-3 mb-md-0"
                   v-for="item in total_sort"
                   :key="item.product.id">
                <template v-if="item.product.is_enabled">
                  <div class="card">
                    <div class="card-position">
                      <div class="bg-cover"
                           style="height: 220px;"
                           :style="{backgroundImage:`url(${item.product.imageUrl})`}">
                      </div>
                      <span class="bg-primary text-white p-2 l-top">暢銷商品</span>
                    </div>
                    <div class="d-flex text-center">
                      <div class="col-7">
                        <div class="border-right py-3 text-tea">
                          <strong class="h5">{{item.product.title}}</strong>
                        </div>
                      </div>
                      <div class="col-5">
                        <div class="py-3 text-tea">
                          <strong class="h5"
                                  v-if="!item.product.origin_price">{{item.product.price}} 元</strong>
                          <strong class="h6"
                                  v-if="item.product.origin_price">{{item.product.origin_price}} 元</strong>
                        </div>
                      </div>
                    </div>
                    <button
                       class="btn btn-lwheat btn-lg l-btn"
                       @click.prevent="addtoCart(item.product.id)"
                       :disabled="addtoCartload===item.product.id">
                      <span class="h4 font-weight-bold text-tea">
                        <i class="fas fa-spinner fa-spin"
                           v-if="addtoCartload===item.product.id"></i>
                        加入購物車</span>
                    </button>
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import { mapActions } from 'vuex'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      orders: [],
      ary: [],
      product: [],
      total_sort: []
    }
  },
  created () {
    this.get()
    this.getProducts()
  },
  computed: {
    addtoCartload () {
      return this.$store.state.Mcart.loading
    }
  },
  methods: {
    //  取得訂單資料
    get () {
      this.orders = []
      this.$store.dispatch('updateLoading', true)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page=${1}`
      this.$http.get(api).then((response) => {
        if (response.data.success) {
          let totalpage = response.data.pagination.total_pages
          let totalapi = []

          for (let i = 1; i <= totalpage; i++) {
            let totaldata = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/orders?page=${i}`
            let api = this.$http.get(totaldata)
            totalapi.push(api)
          }
          this.$http.all(totalapi).then(
            this.$http.spread((...res) => {
              let mapdata = res.map(item => item.data)
              let abc = new Promise((resolve) => {
                mapdata.forEach((item) => {
                  let list = item.orders
                  list.forEach((item) => {
                    if (item.is_paid) {
                      item.create_at = Number(item.create_at * 1000)
                      this.orders.push(item)
                    }
                  })
                })
                resolve()
              })
              abc.then(() => {
                this.ary = this.orders
                this.sort()
                this.$store.dispatch('updateLoading', false)
              })
              // Promise.all([abc]).then(() => {
              //   this.ary = this.orders
              //   this.sort()
              //   this.$store.dispatch('updateLoading', false)
              // })
            })
          )
        }
      })
    },
    // 取得商品資料
    getProducts () {
      this.$store.dispatch('Mproduct/getProducts').then(() => {
        this.product = this.$store.state.Mproduct.product
      })
    },
    sort () {
      //  熱銷商品篩選
      let order = []
      let popular = []
      this.total_sort = []
      //  取得所有訂單銷售數qty
      this.ary.forEach((item) => {
        let key = Object.keys(item.products)
        key.forEach((orderid) => {
          order.push(item.products[orderid])
        })
      })
      this.product.forEach((item, index) => {
        let title = item.title
        let num = index
        popular.push({
          product: item,
          total_num: 0
        })
        //  每個產品銷售數
        order.forEach((item) => {
          if (title.indexOf(item.product.title) !== -1) {
            popular[num].total_num += item.qty
          }
        })
      })
      // 選出前5銷售數
      popular.sort((a, b) => {
        return b.total_num - a.total_num
      })

      for (let i = 0; i <= 5; i++) {
        this.total_sort.push(popular[i])
      }
    },
    addtoCart (id, qty = 1) {
      this.$store.dispatch('Mcart/addtocart', { id, qty })
    }
  }
}
</script>
