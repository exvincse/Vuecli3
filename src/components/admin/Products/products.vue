<template>
  <div>
    <loading :active.sync="isLoading"
             style="z-index:9999"></loading>
    <div class="text-right mt-4">
      <button class="btn btn-primary"
              @click="openModal(true)">建立新的產品</button>
    </div>
    <div v-if="products">
      <div class="table-responsive">
        <table class="table mt-4">
          <thead>
            <tr>
              <th wight="100">分類</th>
              <th>產品名稱</th>
              <th wight="100">原價</th>
              <th wight="100">售價</th>
              <th wight="30">是否啟用</th>
              <th>編輯/刪除</th>
            </tr>
          </thead>
          <tbody v-if="PageData">
            <tr v-for="item in PageData"
                :key="item.id">
              <td>{{item.category}}</td>
              <td>{{item.title}}</td>
              <td class="text-right">
                {{item.origin_price | currency}}
              </td>
              <td class="text-right">
                {{item.price | currency}}
              </td>
              <td>
                <span v-if="item.is_enabled"
                      class="text-success">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td style="width:150px;">
                <div class="btn-group">
                  <button class="btn btn-outline-primary btn-sm"
                          @click="openModal(false,item)">編輯</button>
                  <button class="btn btn-outline-danger btn-sm"
                          @click="delModal(item)">刪除</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <pages :ary="products"
                  @getPageData="getPageData"></pages>
      </div>
    </div>

    <div v-else
         class="h1 text-center">請建立商品</div>
    <AddEdit :tempproduct="tempproduct"
             :status="status"
             @updateproduct="updateproduct"></AddEdit>

    <Delete :tempproduct="tempproduct"
            @delData="delData"></Delete>
  </div>
</template>

<script>
import $ from 'jquery'
import pages from '@/components/common/pages'
import Delete from '@/components/admin/Products/method/delete'
import AddEdit from '@/components/admin/Products/method/AddEdit'

export default {
  components: {
    pages,
    Delete,
    AddEdit
  },
  data () {
    return {
      products: [],
      PageData: [],
      tempproduct: {
        //  imageUrl: ''
      },
      pagination: {},
      isNew: false,
      isLoading: false,
      status: {
        fileUploading: false
      }
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts () {
      this.$store.dispatch('Mproduct/getProducts').then(() => {
        this.products = this.$store.state.Mproduct.product.slice()
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempproduct = {}
        this.isNew = true
      } else {
        this.tempproduct = Object.assign({}, item)
        this.isNew = false
      }
      $('#productModal').modal('show')
    },
    updateproduct () {
      this.isLoading = true
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
      let httpMethod = 'post'
      if (!this.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.tempproduct.id}`
        httpMethod = 'put'
      }
      this.$http[httpMethod](api, { data: this.tempproduct }).then((response) => {
        if (response.data.success) {
          $('#productModal').modal('hide')
          this.getProducts()
          this.$bus.$emit('message:push', response.data.message, 'success')
        } else {
          $('#productModal').modal('hide')
          this.getProducts()
          this.$bus.$emit('message:push', response.data.message, 'danger')
        }
        this.isLoading = false
      })
    },
    delModal (item) {
      this.tempproduct = Object.assign({}, item)
      $('#delProductModal').modal('show')
    },
    delData () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${this.tempproduct.id}`
      this.$http.delete(api).then((response) => {
        if (response.data.success) {
          $('#delProductModal').modal('hide')
          this.getProducts()
          this.$bus.$emit('message:push', response.data.message, 'success')
        } else {
          $('#delProductModal').modal('hide')
          this.getProducts()
          this.$bus.$emit('message:push', response.data.message, 'danger')
        }
        this.isLoading = false
      })
    },
    getPageData (get) {
      this.PageData = get
    }
  }
}
</script>
