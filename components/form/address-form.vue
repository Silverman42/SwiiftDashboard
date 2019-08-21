<template>
  <form action="">
    <div class="form-group">
      <label for="">Street</label>
      <textarea class="form-control" name="street" id=""  v-model="street" cols="30" rows="10"></textarea>
    </div>
    <div class="form-group">
      <label for="">Local Government Area</label>
      <select class="form-control" name="lga" v-model="lga" id="">
        <option value="">Select LGA</option>
      </select>
    </div>
    <div class="form-group">
      <label for="">State</label>
      <select class="form-control" name="state" v-model="state" id="">
        <option value="">Select State</option>
      </select>
    </div>
    <div class="form-group">
      <label for="">Postal Code</label>
      <input type="number" name="postal_code" v-model="postalCode" class="form-control">
    </div>
    <div class="mg-t-10 mg-b-10 tx-right">
      <button class="btn btn-primary">{{defaultFormType}}</button>
    </div>
  </form>
</template>

<script>
  export default {
    props: {
      //update form data
      data: {
        type: Object,
        default () {
          return {}
        }
      },

      //Form type
      type:{
          type: String,
          default: 'create'
      }
    },
    data() {
      return {
        //Street data
        street: '',

        //local government area
        lga: '',

        //State data
        state: '',

        //postal Code
        postalCode: ''
      }
    },
    methods: {
      //Set default values for each data property if the form is an update type
      SetDefaultValues() {

        this.lga = this.data.lga || ''
        this.state = this.data.state || ''
        this.street = this.data.street || ''
        this.postalCode = this.data.postalCode || ''

      }
    },
    computed:{

        // Set the button text based on the the type of form being set
        defaultFormType(){
            if(this.type == 'update'){
                return 'Update Address'
            }

            return 'Create Address'
        }
    },
    mounted() {
        console.log(this.data)
      this.SetDefaultValues();
    }

  }

</script>
