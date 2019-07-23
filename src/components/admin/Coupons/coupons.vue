<template>
  <div>
    <alert></alert>
    <div class="container mt-4">
      <div class="row">
        <NavDate class="col-lg-5"
                 @changeMonth="changeMonth"></NavDate>
        <NavSelect class="col-lg-3"
                   @select="select"></NavSelect>
        <div class="text-right col-lg-4">
          <button class="btn btn-primary"
                  @click="openCouponModal(true)">
            建立新的優惠券
          </button>
        </div>
      </div>
      <div class="text-center h3 mt-2">已搜尋到{{ary.length}}筆</div>
      <div class="mt-2"
           v-if="ary.length">
        <table class="table">
          <thead>
            <tr>
              <th>名稱</th>
              <th>折扣百分比</th>
              <th>到期日</th>
              <th>是否啟用</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in pagedata"
                :key="key">
              <td>{{ item.title }}</td>
              <td>{{ item.percent }}%</td>
              <td>{{ item.due_date | DateFilter }}</td>
              <td>
                <span v-if="item.is_enabled === 1"
                      class="text-success">啟用</span>
                <span v-else
                      class="text-muted">未起用</span>
              </td>
              <td>
                <button class="btn btn-outline-primary btn-sm mr-2"
                        @click="openCouponModal(false,item)">編輯</button>
                <button class="btn btn-outline-danger btn-sm"
                        @click="DelCouponModal(item)">刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <pages :ary="ary"
               :makeout="pay"
               @getPageData="getPageData">
        </pages>
      </div>

      <div class="mt-5"
           v-else>
        <div class="text-center h1">
          無任何資料
        </div>
      </div>
      <AddModal :tempCoupon="tempCoupon"
                @updateCoupons="updateCoupons"></AddModal>

      <DelModal :tempCoupon="tempCoupon"
                @DeleteData="DeleteData"></DelModal>
    </div>

  </div>
</template>

<script>
import $ from 'jquery'
import alert from '@/components/common/alert'
import NavDate from '@/components/admin/NavDate'
import NavSelect from '@/components/admin/NavSelect'
import pages from '@/components/common/pages'
import AddModal from '@/components/admin/Coupons/method/AddEdit'
import DelModal from '@/components/admin/Coupons/method/Delete'
export default {
  components: {
    alert,
    NavDate,
    NavSelect,
    pages,
    AddModal,
    DelModal
  },
  data () {
    return {
      pay: 'enable',
      getCoupon: [],
      ary: [],
      pagedata: [],
      tempCoupon: {},
      newold: true
    }
  },
  created () {
    this.getcoupons()
  },
  methods: {
    //  ajax獲取資料
    getcoupons () {
      this.$store.dispatch('updateLoading', true)
      this.getCoupon = []
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${1}`
      this.$http.get(api).then((response) => {
        if (response.data.success === false) {
          this.$store.dispatch('updateLoading', false)
          return
        }
        let totalpage = response.data.pagination.total_pages
        let totalapi = []
        for (let i = 1; i <= totalpage; i++) {
          const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${i}`
          let get = this.$http.get(api)
          totalapi.push(get)
        }
        this.$http.all(totalapi).then(
          this.$http.spread((...res) => {
            let response = Object.values(res).map(item => item.data.coupons)
            if (response.length === 1) {
              this.getCoupon = response[0]
            } else {
              for (let i = 1; i < response.length; i++) {
                this.getCoupon = response[0].concat(response[i])
              }
            }
            this.ary = this.getCoupon
            this.$store.dispatch('updateLoading', false)
          })
        )
      })
    },

    openCouponModal (get, item) {
      if (get === true) {
        this.tempCoupon = {}
        this.newold = true
      } else {
        this.tempCoupon = Object.assign({}, item)
        this.newold = false
      }
      $('#couponModal').modal('show')
    },

    updateCoupons (duedate) {
      this.$validator.validate().then((valid) => {
        if (valid) {
          this.$store.dispatch('updateLoading', true)
          let timestemp = new Date(duedate).getTime()
          this.tempCoupon.due_date = timestemp
          let method = 'post'
          let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`
          if (this.newold === false) {
            api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${this.tempCoupon.id}`
            method = 'put'
          }
          let data = {
            data: this.tempCoupon
          }

          this.$http[method](api, data).then((response) => {
            if (response.data.success) {
              $('#couponModal').modal('hide')
              this.getcoupons()
              let message = response.data.message
              this.$store.dispatch('updateMessage', { message, status: 'success' })
            } else {
              $('#couponModal').modal('hide')
              this.getcoupons()
              let message = response.data.message
              this.$store.dispatch('updateMessage', { message, status: 'danger' })
            }
            this.$store.dispatch('updateLoading', false)
          })
        }
      })
    },

    DelCouponModal (item) {
      this.tempCoupon = Object.assign({}, item)
      $('#delCouponModal').modal('show')
    },

    DeleteData (id) {
      this.$store.dispatch('updateLoading', true)
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${id}`
      this.$http.delete(api).then((response) => {
        if (response.data.success) {
          $('#delCouponModal').modal('hide')
          this.getcoupons()
          let message = response.data.message
          this.$store.dispatch('updateMessage', { message, status: 'danger' })
        } else {
          $('#delCouponModal').modal('hide')
          this.getcoupons()
          let message = response.data.message
          this.$store.dispatch('updateMessage', { message, status: 'danger' })
        }
        this.$store.dispatch('updateLoading', false)
      })
    },
    //  NavDate元件呼叫方法
    changeMonth (year, month) {
      let CopyAry = JSON.parse(JSON.stringify(this.getCoupon))
      //  timestemp 轉為 yyyy/mm/dd
      let DateAry = CopyAry.map((item) => {
        let date = new Date(item.due_date)
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        let gettime = year + '/' + month + '/' + day
        item.due_date = gettime
        return item
      })
      if (year === '' && month === '') {
        this.getcoupons()
        return
      }

      let FilterAry = DateAry.filter((item) => {
        let time = item.due_date.split('/')
        //  月份存在時，必須配合年份篩選
        if (month) {
          if (Number(time[0]) === year && Number(time[1]) === month) {
            return item
          }
        //  不存在則以年分
        } else {
          if (Number(time[0]) === year) {
            return item
          }
        }
      })
      this.ary = FilterAry
    },
    //  NavSelect元件呼叫方法
    select (selectname) {
      this.ary = []
      if (selectname === '') {
        this.ary = this.getCoupon
      } else {
        let filterary = this.getCoupon.filter((item, index, ary) => {
          //  全部符合
          //  let toAry = item.title.split(',');
          //  console.log(toAry.indexOf(selectname));
          return item.title.indexOf(selectname) !== -1
        })
        this.ary = filterary
      }
    },
    //  pages元件呼叫方法
    getPageData (getdata) {
      this.pagedata = getdata
    }
  }
}
</script>
