<template>
  <div class="row">
    <!--Stats columns-->
    <div class="col-12">
      <div class="card bg-white card-dashboard-eighteen">
        <div class="card-body">
          <div class="mg-b-10 text-right">
            <button type="button" class="btn btn-primary" @click="HideDetailView">Update Withdrawal</button>
          </div>
          <div class="bd bd-gray-200 pd-10 mg-b-10">
            <h5 class="az-content-label az-content-label-sm">status</h5>
            <span class="bg-warning tx-white pd-t-5 pd-b-5 pd-l-10 pd-r-10 mg-t-15">
              Pending
            </span>
          </div>
          <div class="bd bd-gray-200 pd-10 mg-b-10">
            <h5 class="az-content-label az-content-label-sm">cash amount ordered</h5>
            <p class="tx-bold tx-24">
              ₦60,000
            </p>
          </div>
          <div class="bd bd-gray-200 pd-10 mg-b-10">
            <h5 class="az-content-label az-content-label-sm">Verification Token</h5>
            <p class="tx-bold tx-24">
              867734
            </p>
          </div>
          <div class="bd bd-gray-200 pd-10 mg-b-10">
            <h5 class="az-content-label az-content-label-sm">Delivery Details</h5>
            <div class="media">
              <div class="media-icon tx-40 pd-r-15 tx-gray-400">
                <i class="icon ion-md-map"></i>
              </div>
              <div class="media-body">
                <p class="tx-bold ">
                  16, Adeleke Street<br>
                  Lawanson,
                  Lagos State
                </p>
                <p class="az-content-text">At 12:24 pm</p>
              </div>
            </div>
          </div>
          <div class="bd bd-gray-200 pd-10 mg-b-10">
            <h5 class="az-content-label az-content-label-sm">Carrier information</h5>
            <div class="media">
              <div class="media-icon pd-r-10 ">
                <a href="" class="az-img-user">
                  <img src="https://via.placeholder.com/500x500" alt="">
                </a>
              </div>
              <div class="media-body">
                <p class="tx-bold ">
                  Adedokun James
                </p>
                <p class="az-content-text">ID-25357832723</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

    <!--list columns-->
    <div class="col-sm-12 col-md-5">

    </div>
  </div>
</template>

<script>
export default {
  
  methods:{
    //Emit an event to hide this view in its parent scope
    HideDetailView(){
      return this.$emit('hideDetailView');
    }
  }
    
}
</script>
