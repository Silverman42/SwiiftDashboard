<template>
    <div>
        <!--Backdrop for modal-->
        <div v-if="isOpen" 
            class="modal-backdrop show" 
            style="display: block;" 
            @click="CloseModal">
            
        </div>
        <div v-if="isOpen" id="modaldemo3" class="modal show" style="display: block;" @click="UnclickModalForm($event)">
            <div class="modal-dialog modal-lg" role="document" style="z-index: 8000;" id="modalContent">
                
                <!--Modal Content-->
                <slot/>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        //Check if the modal has been opened from outside the component
        isOpen:{
            type: Boolean,
            default: false
        },
    },
    watch:{
        // Check if the modal has either been opened or closed
        isOpen(val){

            //if modal has been opened, remove overflow from the main container
            if (val == true) {
                return document.querySelector('body').classList.add('modal-open')
            }
            //if modal has been closed, return overflow to the main container
            return document.querySelector('body').classList.remove('modal-open')
        }
    },
    methods:{
        //Emit an event to parent component to close the modal
        CloseModal(){
            return this.$emit('closeModal')
        },

        //Check the modal content was not clicked
        UnclickModalForm(event){

            //Close modal if modal content was not clicked
            if(event.target.closest("#modalContent") == null){
                return this.CloseModal()
            }
            
        }
    }

}
</script>

