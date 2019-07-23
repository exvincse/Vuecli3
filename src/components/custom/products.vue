<template>
  <div class="products-bg" style="margin-top:-55px">
    <div class="bd-example">
      <div id="carouselExampleCaptions"
           class="carousel slide"
           data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions"
              data-slide-to="0"
              class="active"></li>
          <li data-target="#carouselExampleCaptions"
              data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions"
              data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="bg-cover vh-100"
                 style="background-image:url('https://images.unsplash.com/photo-1464297162577-f5295c892194?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
                 "></div>
            <div class="carousel-caption d-none d-md-block">
              <h5 class="h2">細心栽種</h5>
              <p class="px-5">屏除農藥、化學肥料、基因改造作物、植物生長調節劑等非天然物質的使用。是一個無論是土壤、生態體系及人類三者的健康均能夠維持永續（可持續發展）的生產系統。這系統有賴生態上的過程、多元性及適應當地環境的循環，用以克服各種發展上的困難，而不是仰賴外間的介入</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bg-cover vh-100"
                 style="background-image:url('https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
                 "></div>
            <div class="carousel-caption d-none d-md-block">
              <h5 class="h2">無噴灑農藥</h5>
              <p class="px-5">您知道每次噴灑農藥，當中只有很少一部分真正用於除蟲嗎？其餘絕大部分的農藥，卻全部成為環境污染物，滲進土裡、流到水裡、揮發於空氣中，不僅威脅到生物多樣性，最終還可經由各種型態進入人體，危害我們的健康。</p>
            </div>
          </div>
          <div class="carousel-item">
            <div class="bg-cover vh-100"
                 style="background-image:url('https://images.unsplash.com/photo-1544144683-bf1749166af3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80');
                 "></div>
            <div class="carousel-caption d-none d-md-block">
              <h5 class="h2">大顆又多汁</h5>
              <p class="px-5">不惜耗費任何成本研究，大還要更大，全台灣最大的水果</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev"
           href="#carouselExampleCaptions"
           role="button"
           data-slide="prev">
          <span class="carousel-control-prev-icon"
                aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next"
           href="#carouselExampleCaptions"
           role="button"
           data-slide="next">
          <span class="carousel-control-next-icon"
                aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>

    <section class="mt-5 l-scrool">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="list-group sticky-top"
                 style="top:66px">
              <a href="#"
                 class="list-group-item list-group-item-action rounded-0"
                 :class="{'active':active==='all'}"
                 @click.prevent="active='all'">
                <i class="fas fa-briefcase"></i>
                所有商品</a>
              <a href="#"
                 v-for="item in categories" :key="item"
                 class="list-group-item list-group-item-action"
                 :class="{'active':active===item}"
                 @click.prevent="active=item"
                 >
                <i class="fab fa-apple fa-lg" v-if="item==='水果'"></i>
                <i class="fas fa-cocktail" v-if="item==='飲料'"></i>
                {{item}}</a>
              <!-- <select name="" id="" @change="active=test" v-model="test">選擇
              <option value="all">all</option>
              <option :value="item"
                v-for="item in categories" :key="item"
                >{{item}}</option>
              </select> -->
            </div>
          </div>

          <div class="col-lg-9">
            <card :active='active'></card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import card from '@/components/custom/card'
export default {
  data () {
    return {
      active: 'all',
      test: '',
      product: [],
      categories: []
    }
  },
  components: {
    card
  },
  created () {
    this.products()
  },
  methods: {
    products () {
      this.$store.dispatch('Mproduct/getProducts').then(() => {
        // let map = []
        this.product = this.$store.state.Mproduct.product
        // this.product.forEach((item) => {
        //   map.push(item.category)
        // })
        // this.categories = map.filter((item, index, arr) => {
        //   return arr.indexOf(item) === index
        // })
        let categories = []
        this.product.forEach((item) => {
          categories.push(item.category)
        })
        this.categories = Array.from(new Set(categories))
      })
    }
  }
}
</script>
