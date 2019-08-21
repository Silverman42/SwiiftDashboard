<template>
    <div class="dropdown az-profile-menu" :class="{show:isOpen}" @focusout.prevent="HideMenuDesktop">
        <a href="#" class="az-img-user"><img :src="profileData.avatar" alt="" @click.prevent="ToggleMenu" ></a>
        <div class="dropdown-menu" @focusin.prevent="ShowMenu">
            <div class="az-dropdown-header d-sm-none">
                <a href="" class="az-header-arrow" @click.prevent="HideMenu"><i class="icon ion-md-arrow-back"></i></a>
            </div>
            <div class="az-header-profile">
                <div class="az-img-user">
                    <img :src="profileData.avatar" alt="">
                </div><!-- az-img-user -->
                <h6>{{profileData.name}}</h6>
                <span>Premium Member</span>
            </div><!-- az-header-profile -->
            
            <!--Profile menu links-->
            <slot/>
        </div><!-- dropdown-menu -->
    </div>
</template>

<script>

export default {                        
    props:{
        profileData:{
            type: Object,
            default(){
                return {
                    name : 'Umit Jay',
                    avatar: '/img/avatar.jpg'
                }
            }
        }
    },
    data(){
        return{
            //Show and hide state of profile menu
            isOpen: false
        }

    },
    methods:{

        ToggleMenu(){
            return (this.isOpen = !this.isOpen)
        },

        /**
         * Hide Profile menu
         */
        HideMenu(event){
            return (this.isOpen = false)
        },

        /**
         * Hide profile onlyin desktop view
         */
        HideMenuDesktop(event){
            if (window.matchMedia('(min-width: 992px)').matches){
               return (this.isOpen = false)
            }
        },

        /**
         * Show Profile menu
         */
        ShowMenu(event){
            return (this.isOpen = true)
        }
    }

}
</script>

