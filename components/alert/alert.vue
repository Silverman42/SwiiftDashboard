<template>
  <div v-if="messageIsNotEmpty" class="row my_alert-container">
    <div class="col-md-3 col-10 pd-20 bg-white my_alert">
        <div class="pd-r-10">
          <slot/>
        </div>
        <div>
            <h6>{{alert['heading'] || ''}}</h6>
            <p>{{alert['message'] || ''}}</p>
        </div>
    </div>
  </div>
</template>

<script>
/**
 * Alert Component
 * 
 * @description This component is created for notification purposes
 */
export default {
    props:{
        //Alert data
        alert:{
            type: Object,
            default(){
                return {}
            }
        },

        //Alert icon/illustration
        icon:{
            type: String,
            default: ''
        }
    },
    computed:{
        //Show alert if there is a message in the alert
        messageIsNotEmpty(){
            if(Object.keys(this.alert).length > 0){
                return true
            }
            return false
        }
    }
}
</script>

<style scoped>
    .my_alert-container{
        position: fixed; 
        left: 10px; 
        top: 10px; 
        width: 100%; 
        justify-content: center; 
        z-index: 3000
    }
    .my_alert{
        display: flex; 
        box-shadow: 0px 0px 10px 3px rgba(29,29,29,0.2)
    }
</style>

