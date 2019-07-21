<template>
  <div>
    <div class="container pt-4">
      <div v-if="hide">
        <section class="mt-3">
          <div class="container mb-3">
            <h1 class="text-center">結帳</h1>
            <div class="form-row text-center">
              <div class="col-sm col-12">
                <div class="alert alert-primary alert-border"
                     role="alert">
                  1.輸入訂單資料
                </div>
              </div>
              <div class="col-sm col-12">
                <div class="alert alert-light alert-border"
                     role="alert">
                  2.金流付款
                </div>
              </div>
              <div class="col-sm col-12">
                <div class="alert alert-light alert-border"
                     role="alert">
                  3.完成
                </div>
              </div>
            </div>
          </div>
        </section>

        <div v-if="hide">
          <table class="table">
            <thead>
              <th></th>
              <th>品名</th>
              <th>數量</th>
              <th>單價</th>
            </thead>
            <tbody>
              <tr v-for="item in data.carts"
                  :key="item.id">
                <td class="align-middle">
                  <button type="button"
                          class="btn btn-outline-danger btn-sm"
                          @click="removeCart(item.id)"
                          :disabled="isdisabled === item.id">
                    <i class="far fa-trash-alt"></i>
                  </button>
                </td>

                <td class="align-middle">
                  {{ item.product.title }}
                  <div class="text-success"
                       v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3"
                    class="text-right">總計</td>
                <td class="text-right">{{ data.total }}</td>
              </tr>
              <tr v-if="data.final_total !== data.total">
                <td colspan="3"
                    class="text-right text-success">折扣價</td>
                <td class="text-right text-success">{{ data.final_total }}</td>
              </tr>
            </tfoot>
          </table>

          <div class="input-group mb-3 input-group-sm">
            <input type="text"
                   class="form-control"
                   placeholder="請輸入優惠碼"
                   v-model="coupons">
            <div class="input-group-append">
              <button class="btn btn-outline-secondary"
                      type="button"
                      @click="UseCoupons()">
                套用優惠碼
              </button>
            </div>
          </div>

          <CostomForm></CostomForm>

        </div>
      </div>
      <div class="text-center h3 d-flex align-items-center justify-content-center"
           style="height:500px;"
           v-else>
        <div class="d-flex align-items-center flex-column">
          <span>沒有選購任何商品{{time}}秒後跳回商品頁...</span>
          <span>
            沒有回應時請點
            <router-link to="/products">商品頁</router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CostomForm from '@/components/custom/checkpage'
import { mapGetters } from 'vuex'
export default {
  components: {
    CostomForm
  },
  data () {
    return {
      coupons: '',
      timeSender: null,
      hide: true,
      time: 3
    }
  },
  watch: {
    hide () {
      this.timeout()
    }
  },
  created () {
    this.getCart()
  },
  beforeDestroy () {
    clearInterval(this.timeSender)
  },
  computed: {
    ...mapGetters('Mcart', ['data', 'isdisabled'])
  },
  methods: {
    getCart () {
      this.$store.dispatch('Mcart/getCart').then(() => {
        this.hide = this.$store.state.Mcart.hide
      })
    },
    timeout () {
      this.time = 3
      let timeSender = setInterval(() => {
        if (this.time === 0) {
          this.$router.replace(`/products`)
        }
        this.time -= 1
      }, 1000)
      this.timeSender = timeSender
    },
    removeCart (id) {
      this.$store.dispatch('Mcart/removeCart', id).then(() => {
        this.getCart()
      })
    },
    UseCoupons () {
      this.$store.dispatch('updateLoading', true)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/coupon`
      let data = {
        data: {
          code: this.coupons
        }
      }
      this.$http.post(api, data).then((response) => {
        this.getCart()
        this.$store.dispatch('updateLoading', false)
      })
    }
  }
}
</script>
