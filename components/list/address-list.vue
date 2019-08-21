<template>
  <div class="col-12 col-md-6 pd-t-10 pd-b-10">
    <label class="rdiobox" style="display:flex">
      <input name="delivery_type" value="timed" type="radio">
      <span class="tx-bold pd-b-5">
        {{address.street || "No Street"}}<br>
        {{address.lga || "No LGA"}}<br>
        {{address.state || "No State"}} State<br>
        <p class="mg-t-5 tx-light">{{address.postalCode}}</p>
      </span>

    </label>
    <div class="pd-5 text-right">
      <button type="button" @click="UpdateAddress(address)" data-dismiss="modal" class="btn btn-outline-light">Update
        Address</button>
      <button type="button" @click="DeleteAddress(address)" data-dismiss="modal" class="btn btn-outline-danger">Delete Address
        Address</button>
    </div>
  </div>
</template>

<script>
export default {
    props:{
      //Address data
      address:{
        type: Object,
        default(){
          return {
            street: "Street",
            lga: "LGA",
            state: "State",
            postalCode: 111111
          }
        }
      }

    },
    methods:{
      //Event to emit the address for update
      UpdateAddress(addressData){
          return this.$emit('updateAddress',addressData)
      },

      //Event to emit the address data for delete
      DeleteAddress(addressData){
          return this.$emit('deleteAddress',addressData)
      }
    }
}
</script>

