<template>
  <div>
    <div class="input-group mb-3 mt-3 mt-lg-0 client-select">
         <input type="text"
             class="form-control pr-5"
             placeholder="搜尋商品"
             v-model.trim="searchname"
             @keyup.enter="search()">
          <button class="btn clear" style="z-index:20"
            v-if="claer"
            @click="ClearSearch()">
            <i class="fas fa-times"></i>
          </button>
      <div class="input-group-append">
        <button class="btn btn-outline-brown"
                @click="search()">搜尋</button>
      </div>
    </div>
    <div v-if="ary.length">
      <div class="text-center h3">已搜尋到{{ary.length}}個商品</div>
      <div class="row">
        <div class="col-lg-6 col-xl-4 mb-4"
             v-for="item in pageproduct"
             :key="item.id">
            <div class="card border-0 shadow-sm h-100 l-card">
              <div style="height: 150px; background-size: cover; background-position: center"
                   :style="{backgroundImage:`url(${item.imageUrl})`}">
              </div>
              <div class="card-body d-flex flex-column">

                <div class="title d-flex justify-content-between align-items-center mb-3">
                  <h5 class="card-title mb-0">
                    <span href="#"
                          class="text-dark">{{item.title}}</span>
                  </h5>
                  <h6 class="mb-0"><span class="badge badge-secondary ml-2"
                          :class="item.color">{{item.category}}</span></h6>
                </div>

                <p class="card-text body">{{item.content}}</p>

                <div class="footer d-flex justify-content-between align-items-baseline">
                  <div class="h5"
                       v-if="!item.origin_price">售價 {{item.price}} 元</div>
                  <del class="h6 text-secondary"
                       v-if="item.origin_price">原價 {{item.origin_price}} 元</del>
                  <div class="h5 text-dorange"
                       v-if="item.origin_price">特價 {{item.price}} 元</div>
                </div>
              </div>

              <div class="card-footer d-flex">
                <button type="button"
                        class="btn btn-outline-primary btn-sm"
                        @click="gotoproduct(item.id)">
                  查看更多
                </button>
                <button type="button"
                        class="btn btn-outline-dorange btn-sm ml-auto"
                        @click="addtoCart(item.id)"
                        :disabled="addtoCartload===item.id">
                  <i class="fas fa-spinner fa-spin"
                     v-if="addtoCartload===item.id"></i>
                  加到購物車
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>

    <div class="h3 text-center vh-100"
         v-else>
      沒有符合的商品
    </div>
    <pages :ary="ary"
           :makeout="'product'"
           @getPageData="getPageData"></pages>

  </div>
</template>

<script>
import pages from '@/components/common/pages'
import $ from 'jquery'
// import { mapActions } from 'vuex'
export default {
  components: {
    pages
  },
  props: ['active'],
  data () {
    return {
      ary: [],
      pageproduct: [],
      products: [],
      product: {},
      searchname: '',
      claer: false
    }
  },
  created () {
    this.getProducts()
  },
  watch: {
    active () {
      this.datafilter()
      let target = $('.l-scrool')
      let targetHeight = target.offset().top
      let NavbarHeight = $('.nav-fixed').height()
      let margin = target.outerHeight(true) - target.outerHeight()
      $(window).scrollTop(targetHeight - NavbarHeight - margin)
    }
  },
  computed: {
    addtoCartload () {
      return this.$store.state.Mcart.loading
    }
  },
  methods: {
    //  全部商品
    getProducts () {
      this.$store.dispatch('Mproduct/getProducts').then(() => {
        this.products = this.$store.state.Mproduct.product.slice()
        this.ary = this.products
        this.datafilter()
      })
    },
    datafilter () {
      this.ary = []
      this.searchname = ''
      this.claer = false
      if (this.active === 'all') {
        this.products.forEach((item) => {
          if (item.is_enabled === 1) {
            this.ary.push(item)
          }
        })
      } else {
        this.products.forEach((item) => {
          if (item.is_enabled === 1 && item.category.indexOf(this.active) !== -1) {
            this.ary.push(item)
          }
        })
      }
      this.ary.forEach((item) => {
        if (item.category === '水果') {
          item.color = 'badge-success'
        } else if (item.category === '飲料') {
          item.color = 'badge-info'
        }
      })
    },
    //  新增至購物車
    addtoCart (id, qty = 1) {
      this.$store.dispatch('Mcart/addtocart', { id, qty })
    },

    getPageData (PageData) {
      this.pageproduct = PageData
    },

    search () {
      if (this.searchname === '') {
        return
      }
      this.claer = true
      this.ary = this.products.filter((item) => {
        return item.title.indexOf(this.searchname) !== -1
      })
    },
    ClearSearch () {
      this.claer = false
      this.searchname = ''
      this.ary = this.products
    },
    gotoproduct (id) {
      this.$router.push(`/products/${id}`)
    }
  }
}
</script>
