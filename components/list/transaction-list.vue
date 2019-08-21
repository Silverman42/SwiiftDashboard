<template>
    <nuxt-link class="list-link row pt-2 mg-b-5" :to="link">
      <div class="col-2 col-md-1">
        <div class="rounded-circle bg-primary ht-30 wd-30 mg-b-5 tx-white"></div>
      </div>
      <div class="col-10 col-md-11 pl-4">
        <div class="row">
          <div class="col-6">
            <p class="tx-bold mg-b-5">Trans-1020388479</p>
            <p class="az-content-text">Processing</p>
          </div>
          <div class="col-6 tx-right">
            <p class="tx-bold mg-b-5">₦600,000</p>
            <p class="az-content-text">16/2/2019 at 10:00am</p>
          </div>
        </div>
      </div>
    </nuxt-link>
</template>
<script>
export default {
  props:{
      //Link to transaction details
      link:{
        type: String,
        default: ''
      }
  }

}
</script>
