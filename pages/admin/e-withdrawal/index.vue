<template>
  <div class="container d-block">
    <div class="mg-b-10">
      <nuxt-link to="/admin/" class="btn btn-outline-light">Back to Dashboard</nuxt-link>
    </div>
    <label class="az-content-label az-content-label-sm">
      E-Withdrawal
    </label>
    <h2 class="az-content-title tx-24 mg-b-5 tx-poppins">Withdrawal List</h2>
    <p class="mg-b-20 mg-lg-b-25">A list of recent withdrawals made by clients</p>
    <div class="row">
      <!--Stats columns-->
      <div class="col-12">
        <div class="card bg-white card-dashboard-eighteen">
          <div class="card-body">
            <!--Component for list items-->
            <list-container>
              <template slot="data">
                <transaction-list link="/admin/e-withdrawal/show"></transaction-list>
              </template>

              <template slot="loader">
                <transaction-load></transaction-load>
              </template>
            </list-container>
          </div>
        </div>

      </div>

      <!--list columns-->
      <div class="col-sm-12 col-md-5">

      </div>
    </div>
    <!-- your content goes here -->


  </div><!-- container -->
</template>

<script>

  export default {
    layout: 'dashboard-admin',

    components: {
      ListContainer:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/list/list-container'),
      TransactionList:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/list/transaction-list'),
      TransactionLoad:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/loader/transaction-load')
    }
  }

</script>
