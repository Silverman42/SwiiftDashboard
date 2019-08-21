<template>
    <alert :alert="alert">
        <img class="wd-40 ht-auto" src="~assets/img/success.png" alt="">
    </alert>
</template>

<script>
/**
 * Error Alert Template
 * @description This is triggered when there is an error alert
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
    },
    components:{
        Alert:()=> import(/*webpackChunkName:'dashboard_client'*/ '@/components/alert/alert')
    }
}
</script>
