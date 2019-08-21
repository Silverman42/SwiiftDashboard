<template>
    <form action="">
        <div class="form-group">
            <label for="">Delivery Time</label>
            <input type="time" name="time" v-model="deliveryTime" class="form-control">
        </div>
        <div class="form-group">
            <label for="">Delivery Date</label>
            <input type="date" name="date" v-model="deliveryDate" class="form-control">
        </div>
        <div class="mg-t-10 mg-b-10 tx-right">
            <button class="btn btn-primary">Change delivery Time and Date</button>
        </div>
    </form>
</template>

<script>
/**
 * Address-form
 * 
 * @description This component is used to change the time and date of delivery (For timed delivery only)
 */

export default {
    props:{
        //Preset Delivery date and time for the delivery 
        dateTime:{
            type: Object,
            default(){
                return{
                    date: '',
                    time: ''
                }
            }
        }
    },
    data(){
        //Newly created time and date for the delivery
        return{
            deliveryTime: '',
            deliveryDate: ''
        }
    },
    methods:{
        //Preset date and time values if it has been created before
        PresetDateAndTime(){
            this.deliveryTime = this.dateTime.time || ''
            this.deliveryDate = this.dateTime.date || ''
        }
    },
    mounted(){

        this.PresetDateAndTime()

    }
    
}
</script>

