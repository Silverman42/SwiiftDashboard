<template>
  <div class="container d-block">
    <div class="mg-b-10">
      <nuxt-link to="/client/" class="btn btn-outline-light">Back to Dashboard</nuxt-link>
    </div>
    <label class="az-content-label az-content-label-sm">
      E-Withdrawal
    </label>
    <h2 class="az-content-title tx-24 mg-b-5 tx-poppins">Create Withdrawal</h2>
    <p class="mg-b-20 mg-lg-b-25">Make a Timed or Express Withdrawal</p>

    <!--Component for creating a new withdrawal-->
    <create-withdrawal></create-withdrawal>


  </div><!-- container -->
</template>

<script>
  export default {
    layout: 'dashboard',

    //lazy loading components
    components:{
      CreateWithdrawal:()=> import(/*webpackChunkName:'e-withdrawal'*/ '@/components/page-sections/client_e-withdrawal/create')
    }
  }

</script>
