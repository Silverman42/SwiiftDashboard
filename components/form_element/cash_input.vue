<template>
  <div class="pd-b-5 pd-t-5">
    <input 
        class="form-control" 
        placeholder="Enter Cash" 
        type="number" 
        :name="name" 
        :required="isRequired"
        :value="transactionCash" 
        @change="FilterInput($event)"
        :invalid="isInvalid">
    <div class="mg-t-5 mg-b-5 text-center">
      <button v-for="(amount,index) in buttonAmount" :key="index" class="btn btn-outline-light" @click.prevent="EnterCash(amount)">₦{{amount}}</button>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        //Amount to assigned to each button
        buttonAmount:{
            type: Array,
            default(){
                return []
            }
        },

        //Input name
        name:{
            type: String,
            default: ''
        },

        //Minimum value or amount that can be entered
        minValue:{
            type: Number,
            default: 1000
        },

        //Set the input field as required
        isRequired:{
            type: Boolean,
            default: true
        }

    },
    data(){
        return{
            //Cash to be entered
            transactionCash: null,

            //Set isInvalid to true if the entered amount is not divisible by the minimum value
            isInvalid: false
        }
    },

    methods:{
        //Change the value of the cash to be entered by clicking on the predefined amount buttons
        EnterCash(cashAmount){
           return this.transactionCash = cashAmount
        },

        //Check if the amount entered is of a permissible denomination (i.e divisible by the minimum value)
        CheckDenomination(event){
            let value = parseInt(event.target.value)
            let min = this.minValue
            let remainder= value%min
           if(remainder !== 0){
                //Set the invalid message
                this.isInvalid = true
                event.target.setCustomValidity(`The entered amount is not a denomination of ₦${this.minValue} `)
                return true
            }
            return false
        },

        //Ensure the input is greater than the input value
        CheckMinValue(event){
           let inputValue = parseInt(event.target.value)
           if(inputValue < this.minValue){
                //Set the invalid message
                this.isInvalid = true
                event.target.setCustomValidity(`The input value is lower than ₦${this.minValue} `)
                return true
            }
            return false
        },

        //Check for contraints in the input
        FilterInput(event){
            const constraints = [this.CheckMinValue(event), this.CheckDenomination(event)]
            for (const constraint of constraints) {
                if(constraint == true ){
                    //If a constraint is found, cancel the loop
                    return 
                }
            }
            this.isInvalid = false
            return event.target.setCustomValidity(``)  
        }
    }
}
</script>