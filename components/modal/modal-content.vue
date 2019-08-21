<template>
    <div class="modal-content modal-content-demo">
        <!--Modal Header-->
        <div class="modal-header">
            <h6 class="modal-title">
                {{ modalTitle }}
            </h6>
            <button type="button" class="close" data-dismiss="modal" @click.prevent="CloseModal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button>
        </div>

        <!--Modal Body-->
        <div class="modal-body">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    props:{
        modalTitle:{
            type: String,
            default: ""
        }
    },
    methods:{
        //Emit an event to parent component to close the modal
        CloseModal(){
            return this.$emit('closeModal')
        }
    }
}
</script>

