<template>
  <div class="container d-block">
    <h2 class="az-content-title tx-24 mg-b-5 tx-poppins">Hi, welcome back!</h2>
    <p class="mg-b-20 mg-lg-b-25">Your statistics for recent withdrawals</p>

    <div class="row">
      <!--Stats columns-->
      <div class="col-sm-12 col-md-7">
        <div class="card bg-primary tx-white card-dashboard-eighteen mg-b-10">
          <div class="card-title">
            Withdrawal Statistics
          </div>
          <p>As at 6/8/2019</p>
          <div class="card-body row row-xs">
            <div class="col-sm-12 mg-t-10 mg-b-10 text-center">
              <div class="py-3 bg-black-1 rounded-5">
                <h1 class="tx-bold"><span class="tx-primary-dark tx-20">₦</span>620,076</h1>
                <span>Total Amount Withdrawn</span>
              </div>
            </div>
            <div class="col-6 col-md-3 mg-t-10 mg-b-10 text-center">
              <div class="rounded-circle bg-white-3 ht-30 wd-30 mg-b-5 mg-r-auto mg-l-auto"></div>
              <h2 class="dot-danger tx-bold"><span></span> 620</h2>
              <span>Completed <br> Transactions</span>
            </div>
            <div class="col-6 col-md-3 mg-t-10 mg-b-10 text-center">
              <div class="rounded-circle bg-white-3 ht-30 wd-30 mg-b-5 mg-r-auto mg-l-auto"></div>
              <h2 class="dot-primary tx-bold">620</h2>
              <span>Processed <br> Transactions</span>
            </div>
            <div class="col-6 col-md-3 mg-t-10 mg-b-10 text-center">
              <div class="rounded-circle bg-white-3 ht-30 wd-30 mg-b-5 mg-r-auto mg-l-auto"></div>
              <h2 class="dot-primary tx-bold">620</h2>
              <span>Cancelled <br> Transactions</span>
            </div>
            <div class="col-6 col-md-3 mg-t-10 mg-b-10 text-center">
              <div class="rounded-circle bg-white-3 ht-30 wd-30 mg-b-5 mg-r-auto mg-l-auto"></div>
              <h2 class="dot-primary tx-bold">620</h2>
              <span>Pending <br> Transactions</span>
            </div>
          </div>
          <div class="card-title">
            Withdrawal Chart
          </div>
          <div class="card-body row">

          </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-5">
        <div class="card bg-white card-dashboard-eighteen mg-b-10">
          <div class="card-title">
            Recent Withdrawals
          </div>
          <div class="card-body">
            <!--Component for list items-->
            <list-container>
                <template slot="data">
                    <transaction-list></transaction-list>
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
    layout: 'dashboard',

    //lazy loading components
    components: {
      ListContainer:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/list/list-container'),
      TransactionList:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/list/transaction-list'),
      TransactionLoad:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/loader/transaction-load')
    }
}
</script>
