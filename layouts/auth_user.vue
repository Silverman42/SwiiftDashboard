<template>
<div class="az-body">
    <!--Success Alert-->
    <success-alert :alert="successMessage"></success-alert>

    <!--Error Alert-->
    <error-alert :alert="errorMessage"></error-alert>

    <div class="az-signup-wrapper">
    <div class="az-column-signup-left bg-primary">
      <div>
        <img src="~assets/img/logo_only_white.png" class="mg-b-25" style="width:50px; height: auto" alt="">
        <h1 class="az-logo">
          <img src="~assets/img/text_only_white.png" alt="" style="width:110px; height: auto">
        </h1>
        <h5 style="color:white">Reliable and Safe E-Wallet</h5>
        <p class="tx-gray-200">Swiift exists to make your cash transactions extremely stress free. Our flurry of services ranging from E-Withdrawals to E-Transfers caters for both individuals and merchants alike </p>
        <p class="tx-gray-200">Cash at in your possession whenever, wherever !!</p>
        <a href="index.html" class="btn btn-light">Learn More</a>
      </div>
    </div><!-- az-column-signup-left -->
    <div class="az-column-signup" style="justify-content:normal">
      <h1 class="az-logo mg-b-30">
        <img src="~assets/img/Logo_dark.png" alt="" style="width:110px; height:auto">
      </h1>

      <!--Child component-->
      <nuxt />

    </div><!-- az-column-signup -->
  </div><!-- az-signup-wrapper -->
</div>
</template>
<script>
  export default {
    head() {
      return {
        middleware: 'allowOnlyGuest',
        metainfo: {
          link: [{
              rel: 'stylesheet',
              href: '~assets/lib/fontawesome-free/css/all.min.css'
            },
            {
              rel: 'stylesheet',
              href: '~assets/lib/ionicons/css/ionicons.min.css'
            },
            {
              rel: 'stylesheet',
              href: '~assets/lib/typicons.font/typicons.css'
            },
          ]
        }
      }
    },
    components:{
      SuccessAlert:()=> import(/*webpackChunkName:'dashboard_client'*/ '@/components/alert/success-alert'),
      ErrorAlert:()=> import(/*webpackChunkName:'dashboard_client'*/ '@/components/alert/error-alert')
    },
    computed:{
      //Alert success message that has been inserted in the store
      successMessage(){
        return this.$store.state.alert.successAlert
      },

      //Alert error message that has been inserted in the store
      errorMessage(){
        return this.$store.state.alert.errorAlert
      }
    }
  }

</script>
