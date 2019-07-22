<template>
  <div>
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0"
         href="#">控制面板</a>
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a href="#"
             class="btn btn-Lorange"
             @click.prevent="loginout()">登出</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    loginout () {
      this.$store.dispatch('updateLoading', true)
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          this.$router.push('/login')
        }
        this.$store.dispatch('updateLoading', false)
      })
    }
  }
}
</script>
