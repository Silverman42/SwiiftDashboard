<template>
  <div class="container d-block">
    <div class="mg-b-10">
      <nuxt-link to="/admin/e-withdrawal"  class="btn btn-outline-light">Back to Withdrawal list</nuxt-link>
    </div>
    <label class="az-content-label az-content-label-sm">
      E-Withdrawal
    </label>
    <h2 class="az-content-title tx-24 mg-b-5 tx-poppins">Trans-1020388479</h2>
    <p class="mg-b-20 mg-lg-b-25">Transaction made on 16/12/2019 at 10:00am</p>
    <div class="row">
      <!--Stats columns-->
      <div class="col-12">
        <div class="card bg-white card-dashboard-eighteen">
          <div class="card-body">
            <div class="bg-primary pd-10 mg-b-10">
              <h5 class="az-content-label az-content-label-sm tx-white">Client's information</h5>
              <div class="row">
                <div class="col-md-2 pd-r-10 az-header-profile">
                  <a href="" class="az-img-user"><img src="/img/avatar.jpg" alt=""></a>
                </div>
                <div class="col-md-10">
                  <p class="tx-bold tx-white tx-24">
                    Sylvester John
                  </p>
                  <p class="az-content-text tx-white">sjohn@gmail.com</p>
                  <p class="az-content-text tx-white">08066780554</p>
                </div>
              </div>
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
                #60,000
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

                  <!--Time-->
                  <input type="time" value="" hidden name="time">
                  <!--Date-->
                  <input type="date" value="" hidden name="date">
                  <div class="text-right pd-t-5 pd-b-5">
                    <button class="btn btn-outline-primary" @click.prevent="OpenDateTimeView">Change Delivery Time and Date</button>
                  </div>
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
                  <!--Carrier Input-->
                  <input type="text" value="" hidden name="logistics">
                  
                  <div class="text-right pd-t-5 pd-b-5">
                    <button class="btn btn-outline-primary" @click.prevent="OpenLogisticView">Change Logistics Personnel</button>
                  </div>
                </div>
              </div>
            </div>

            <!--Process Withdrawal-->
            <div class="bd bd-gray-200 pd-10 mg-b-10">
              <h5 class="az-content-label az-content-label-sm tx-primary">Process Withdrawal</h5>
              <p class="tx-bold">
                By processing this withdrawal, you have permitted the available logistic agent to proceed with the
                transfer of funds to the demanding client.
              </p>
              <div class="text-right pd-t-5 pd-b-5">
                <button class="btn btn-primary">Process Withdrawal</button>
              </div>
            </div>

            <!--Cancel Withdrawal-->
            <div class="bd bd-gray-200 pd-10 mg-b-10">
              <h5 class="az-content-label az-content-label-sm tx-danger">Cancel Withdrawal</h5>
              <p class="tx-bold">
                Cancelling a withdrawal is irreversible. Please be quite certain of this action before executing it
              </p>
              <div class="text-right pd-t-5 pd-b-5">
                <button class="btn btn-danger">Cancel Withdrawal</button>
              </div>
            </div>

            <!--Update Processed Withdrawal-->
            <div class="bd bd-gray-200 pd-10 mg-b-10">
              <h5 class="az-content-label az-content-label-sm tx-primary">Update Processed Withdrawal</h5>
              <p class="tx-bold">
                Update the detail (time, date, logistics personel) of this processed withdrawal
              </p>
              <div class="text-right pd-t-5 pd-b-5">
                <button class="btn btn-primary">Update Withdrawal</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!--list columns-->
      <div class="col-sm-12 col-md-5">

      </div>

      <!--Modals-->
      <modal @closeModal="CloseModal" :isOpen="modalIsOpen">

          <!--Modal for logistic personel change-->
          <modal-body v-if="logisticIsOpen" modalTitle="Change Logistics agent" @closeModal="CloseModal">
             
          </modal-body>

          <!--Modal for time and date change-->
          <modal-body v-if="dateTimeIsOpen" modalTitle="Change Date and Time" @closeModal="CloseModal">
             <!--Component for changing date and time-->
             <date-time-form></date-time-form>
          </modal-body>


      </modal>
      <!--End Modals-->
    </div>
    <!-- your content goes here -->
  </div><!-- container -->
</template>

<script>

export default {
    layout: 'dashboard-admin',

    //Lazy loading components
    components: {
        Modal:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/modal/modal-container'),
        ModalBody:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/modal/modal-content'),
        ListContainer:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/list/list-container'),
        DateTimeForm:()=> import(/*webpackChunkName:'e-withdrawal_admin'*/ '@/components/form/date_time-form')
    },

    data(){
        return{
            //Change state to open or close modal
            modalIsOpen:false,

            //Change state to open and close logistic modal
            logisticIsOpen: false,

            //Change state to open and close date and time modal
            dateTimeIsOpen: false
        }

    },

    methods:{
        //Close modal from inside the modal container and body
        CloseModal(){
            this.modalIsOpen = false
        },

        //Open modal from the parent component (i.e show component)
        OpenModal(){
            this.modalIsOpen = true
        },

        //Open modal for changing date and time
        OpenDateTimeView(){
            this.modalIsOpen = true
            this.logisticIsOpen = false
            this.dateTimeIsOpen = true
        },

        //Open modal for changing logistic personel
        OpenLogisticView(){
            this.modalIsOpen = true
            this.logisticIsOpen = true
            this.dateTimeIsOpen = false
        }
    }

}
</script>

