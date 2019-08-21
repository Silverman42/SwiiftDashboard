<template>
  <div class="row">
    <!--Stats columns-->
    <div class="col-12">
      <div class="card bg-white card-dashboard-eighteen">
        <div class="card-body">
          <div class="mg-b-10 text-right">
            <button type="button" @click.prevent="HideUpdateView" class="btn btn-outline-light">Back to Withdrawal
              Details</button>
          </div>
          <div class="alert alert-primary">
            <p class="tx-bold mg-b-5">
              E-withdrawals
            </p>
            <ul>
              <li>should be in multiples of ₦1000</li>
              <li>should be a minimum of #1000 and minimum of ₦20,000</li>
              <li>are maxed out at 4 orders a day</li>
            </ul>
          </div>
          <form action="">
            <div class="bd bd-gray-200 pd-10 mg-b-10">
              <h5 class="az-content-label az-content-label-sm">Delivery Type</h5>
              <div class="pd-t-5 pd-b-5">
                <label class="rdiobox">
                  <input name="delivery_type" value="timed" required type="radio">
                  <span class="tx-bold">Timed Delivery</span>
                  <div class="pd-b-2 pd-t-2">
                    <ul>
                      <li>Money is delivered at a specified time</li>
                      <li>Includes lower delivery charges than Express Delivery</li>
                    </ul>
                  </div>
                </label>
                <label class="rdiobox">
                  <input name="delivery_type" value="express" required type="radio">
                  <span class="tx-bold">Express Delivery</span>
                  <div class="pd-b-2 pd-t-2">
                    <ul>
                      <li>Money is delivered at the time of your choice</li>
                      <li>Includes higher delivery charges than Timed delivery</li>
                      <li>Express Delivery expires at 6:00pm</li>
                    </ul>
                  </div>
                </label>
              </div>
            </div>
            <div class="bd bd-gray-200 pd-10 mg-b-10">
              <h5 class="az-content-label az-content-label-sm">Cash to be withdrawn</h5>

              <!--Cash Amount to be withdrawn-->
              <cash-input :buttonAmount="buttonAmount" :minValue="1000" />
            </div>
            <div class="bd bd-gray-200 pd-10 mg-b-10">
              <h5 class="az-content-label az-content-label-sm">Delivery Time and Day</h5>
              <div class="row">
                <div class="col-md-6 pd-b-5 pd-t-5">
                  <label for="">Date</label>
                  <input class="form-control" required placeholder="Enter Date" type="date">
                </div>
                <div class="col-md-6 pd-b-5 pd-t-5">
                  <label for="">Time</label>
                  <input class="form-control" required placeholder="Enter Time" type="time">
                </div>
              </div>
            </div>
            <div class="bd bd-gray-200 pd-10 mg-b-10">
              <div class="media">
                <div class="media-icon tx-40 pd-r-15 tx-gray-400">
                  <i class="icon ion-md-map"></i>
                </div>
                <div class="media-body">
                  <input type="hidden" name="" required>
                  <p class="tx-bold ">
                    No Address
                  </p>
                  <p><a href="" @click.prevent="OpenAddressList">Select an address</a></p>
                </div>
              </div>
              <div class="text-right pd-t-5 pd-b-5">
                <button class="btn btn-outline-primary" @click.prevent="OpenNewAddress">Add Delivery Address</button>
              </div>
            </div>
            <div class="text-right pd-t-5 pd-b-5">
              <button type="submit" class="btn btn-primary">Update Withdrawal</button>
            </div>
          </form>

        </div>
      </div>

    </div>

    <!--list columns-->
    <div class="col-sm-12 col-md-5">

    </div>

    <!--Modals-->
    <modal @closeModal="CloseModal" :isOpen="modalIsOpen">

      <!--Modal for address change-->
      <modal-body v-if="addressListIsOpen" modalTitle="Change Address" @closeModal="CloseModal">
        <!--Component for list items-->
        <list-container>
          <template slot="data">
            <div class="row">
              <address-list @updateAddress="OpenAddressUpdate($event)"></address-list>
            </div>
          </template>

          <template slot="loader">
            <div class="row">
              <address-load ></address-load>
              <address-load></address-load>
            </div>
          </template>
        </list-container>
      </modal-body>

      <!--Modal for address update-->
      <modal-body v-if="updateAddressIsOpen" modalTitle="Update Address" @closeModal="CloseModal">
        <!--Component for list items-->
        <div class="text-right pd-t-10 pd-b-10">
          <button type="button" data-dismiss="modal" @click.prevent="OpenAddressList" class="btn btn-outline-light">Back to Address
            list</button>
        </div>

        <address-form :data="addressData" type="create" ></address-form>
        
      </modal-body>

      <!--Modal for new address -->
      <modal-body v-if="newAddressIsOpen" modalTitle="New Address" @closeModal="CloseModal">
        <!--Component for list items-->
        <div class="text-right pd-t-10 pd-b-10">
          <button type="button" data-dismiss="modal" @click.prevent="OpenAddressList" class="btn btn-outline-light">Back to Address
            list</button>
        </div>
        
        <address-form type="create" ></address-form>

      </modal-body>

    </modal>
    <!--End Modals-->
  </div>
</template>
<script>

  export default {

    //lazy Loading components
    components: {
      Modal:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/modal/modal-container'),
      ModalBody:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/modal/modal-content'),
      ListContainer:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/list/list-container'),
      AddressList:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/list/address-list'),
      AddressLoad:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/loader/address-load'),
      CashInput:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/form_element/cash_input'),
      AddressForm:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/form/address-form')
    },
    data() {
      return {
        //Change state to open or close modal
        modalIsOpen: false,

        //Default amount that can be entered by clicking the buttons
        buttonAmount: [1000, 2000, 4000, 8000, 16000, 24000],

        //Change state to open or close list of address modal
        addressListIsOpen:false,

        //Change state to open or close new address modal
        newAddressIsOpen:false,

        //Change state to open or close edit address modal
        updateAddressIsOpen:false,

        //Address data that was emitted from the address list
        addressData: {}

      }
    },
    methods: {
      //Emit an event to hide this view in its parent scope
      HideUpdateView() {
        return this.$emit('hideUpdateView');
      },

      //Close modal from inside the modal container and body
      CloseModal() {
        this.modalIsOpen = false
      },

      //Open modal from the parent component (i.e show component)
      OpenModal() {
        this.modalIsOpen = true
      },

      //Show address list modal
      OpenAddressList( ) {
        this.modalIsOpen = true

        //open address modal for address list
        this.addressListIsOpen = true

        //close address modal for new address
        this.newAddressIsOpen = false

        //close address modal for updating existing Addresses
        this.updateAddressIsOpen = false
      },

      //Show new address modal
      OpenNewAddress() {
        this.modalIsOpen = true

        //open address modal for address list
        this.addressListIsOpen = false

        //open address modal for new address
        this.newAddressIsOpen = true

        //close address modal for updating existing Addresses
        this.updateAddressIsOpen = false
      },

      //Show new address modal
      OpenAddressUpdate(event = null) {

        this.modalIsOpen = true

        //close address modal for address list
        this.addressListIsOpen = false

        //close address modal for new address
        this.newAddressIsOpen = false

        //open address modal for updating existing Addresses
        this.updateAddressIsOpen = true

        //Assign data emitted from the address list to the address update form
        this.addressData = event
      }
    }

  }

</script>
