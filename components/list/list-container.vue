<template>
  <div>
    <!--Search Form-->
    <div v-if="isSearchable" class="input-group mg-b-5">
      <input type="text" class="form-control" placeholder="Search for...">
      <span class="input-group-btn">
        <button class="btn btn-outline-primary" type="button"><i class="fa fa-search"></i></button>
      </span>
    </div>
    <!--End Search Form-->
    
    <!--List Item slot-->
    <slot name="data"/>
    <!--End listItem slot-->

    <!--Load Animation-->
    <slot v-if="isLoading" name="loader"/>
    <!--End Load Animation-->

    <!--Pagination-->
    <div v-if="isPaginated" class="mg-t-10 mg-b-10 tx-right">
        <button class="btn btn-outline-primary">Previous</button>
        <button class="btn btn-outline-primary">Next</button>
    </div>
    <!--End Pagination-->

    <!--Link to main data Button-->
    <a v-if="isSuccessful" href="" class="btn btn-outline-primary wd-100p mg-b-5 mg-t-5 btn-loading">View More Transactions</a>
    <!--End Link to main data Button-->

    <!--Data Not found-->
    <div v-if="hasFailed" class="bd bd-gray-200 pd-10 text-center">
      <h5 class="tx-bold">No Transactions Found</h5>
      <p class="az-content-text">Please refresh the list if you have registered transactions</p>
      <button class="btn btn-outline-primary mg-l-auto mg-r-auto">
        Refresh
      </button>
    </div>
    <!--End Data Not Found-->

  </div>
</template>

<script>
export default {
  props:{
    //Props to collect API source or URL
    dataSource: {
      type: String,
      default: ''
    },

    //Props to hide or show searchbar
    isSearchable:{
      type: Boolean,
      default: true
    },

    //Props to allow pagination
    isPaginated:{
      type: Boolean,
      default: true
    }
  },
  data(){
    return {

      //State to check if data load is in process
      isLoading: true,

      //State to check if data load has failed
      hasFailed: false,

      //State to check if data load has failed
      isSuccessful: false,
    }
  }
}
</script>

