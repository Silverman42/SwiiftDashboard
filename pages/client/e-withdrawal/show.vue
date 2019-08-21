<template>
  <div class="container d-block">
    <div class="mg-b-10">
      <nuxt-link to="/client/e-withdrawal"  class="btn btn-outline-light">Back to Withdrawal list</nuxt-link>
    </div>
    <label class="az-content-label az-content-label-sm">
      E-Withdrawal
    </label>
    <h2 class="az-content-title tx-24 mg-b-5 tx-poppins">Trans-1020388479</h2>
    <p class="mg-b-20 mg-lg-b-25">Transaction made on 16/12/2019 at 10:00am</p>
    

    <!-- Withdrawal Details -->
    <withdrawal-detail v-if="detailIsShown" @hideDetailView="showUpdate"/>

    <!-- Withdrawal Update -->
    <withdrawal-update v-if="updateIsShown" @hideUpdateView="showDetail"/>




  </div><!-- container -->
</template>
<script>

  export default {
    layout: "dashboard",

    data() {
      return {
        
        //Show Update component if updateIsShown is true
        updateIsShown: false,

        //Show Detail component if updateIsShown is true
        detailIsShown: true
      }

    },
    methods:{
      //Show withdrawal details
      showDetail(){
          this.updateIsShown = false
          this.detailIsShown = true
      },

      //Show withdrawal update view
      showUpdate(){
          this.updateIsShown = true
          this.detailIsShown = false
      }
    },
    components: {
      WithdrawalDetail:()=> import(/*webpackChunkName:'e-withdrawal'*/ '@/components/page-sections/client_e-withdrawal/detail'),
      WithdrawalUpdate:()=> import(/*webpackChunkName:'e-withdrawal'*/ '@/components/page-sections/client_e-withdrawal/update'),
    },
  }

</script>
