<template>
    <div id="navbarContainer">
        <!--Backdrop shadow for closing sidebar-->
        <div :class="{'az-navbar-backdrop': isBackdrop}" @click="HideSidebar()"></div>

        <div class="az-header az-header-primary">
            <div class="container">
                <div class="az-header-left">
                    <nuxt-link to="/client" class="az-logo">
                        <img src="~assets/img/Logo_white.png" alt="" style="width:110px; height:auto">
                    </nuxt-link>

                    <!--Nav button to reveal and hide sidebar-->
                    <a href="" id="azNavShow" @click.prevent="ShowSidebar()" class="az-header-menu-icon d-lg-none"><span></span></a>
                </div><!-- az-header-left -->
                <div class="az-header-center">
                    <input type="search" class="form-control" placeholder="Search for anything...">
                    <button class="btn"><i class="fas fa-search"></i></button>
                </div><!-- az-header-center -->
                <div class="az-header-right">
                    <div class="az-header-message">
                        <a href="app-chat.html"><i class="typcn typcn-messages"></i></a>
                    </div><!-- az-header-message -->
                    <slot name="navNotification"/>
                    <slot name="navProfileMenu"/>

                </div><!-- az-header-right -->
            </div><!-- container -->
        </div><!-- az-header -->
    
        <div class="az-navbar az-navbar-two az-navbar-dashboard-eight">
            <div class="container">
                <div>
                    <a href="../template/index.html" class="az-logo">
                    <img src="~assets/img/Logo_dark.png" alt="" style="width:110px; height:auto">
                    </a>
                </div>
                <div class="az-navbar-search">
                    <input type="search" class="form-control" placeholder="Search for schedules and events...">
                    <button class="btn"><i class="fas fa-search "></i></button>
                </div><!-- az-navbar-search -->
                <ul class="nav">
                    <li class="nav-label">Main Menu</li>
                    <!--navbar dropdown menus items-->
                    <slot name="navDropdownMenu"/>
                </ul><!-- nav -->
            </div><!-- container -->
        </div><!-- az-navbar -->
    </div>
</template>
<script>

function CollapseDropdowns(vm) {
    //vm = Vue instance
    return function(event) {
        //document event
        event.stopPropagation();

        vm.collapsables.forEach((collapsable)=>{
            //Check if the click happened anywhere away from the click
            let dropTarg = event.target.closest(collapsable.element)
            if (!dropTarg) {

                //Remove the class responsible for showing the dropdown
                let submenus = Array.from(document.querySelectorAll(collapsable.element))
                submenus.forEach((submenu)=>{
                    submenu.classList.remove(collapsable.showClass)
                })
            }
        })   
    }
    
}
export default {
    data(){
        return{
            //Dropdowns to be collapsed
            collapsables: [
                {
                    element: '.az-navbar .nav-item',
                    showClass: 'show'
                }
            ],
            //Backdrop shadow state
            isBackdrop: false
        }
    },
    methods:{
        //Show sidebar only in mobile view
        ShowSidebar(){
            document.querySelector('body').classList.add('az-navbar-show')

            //show backdrop shadow
            this.isBackdrop = true

            //Hide the overflow of the body element
            document.querySelector('.az-body').classList.add('modal-open')

        },

        //Hide sidebar only in mobile view
        HideSidebar(){
            document.querySelector('body').classList.remove('az-navbar-show')

            //show backdrop shadow
            this.isBackdrop = false

            //Allow overflow in the body element
            document.querySelector('.az-body').classList.remove('modal-open')
        }

    },
    mounted(){
    }
}
</script>

<style>
/**
*   Change primary navbar to sticky on small displays
*/
@media(max-width: 990px){
    .az-header-primary, .az-header{
        position: fixed !important;
        width: 100%;
        top: 0px;
    }
    #navbarContainer{
        padding-top: 70px
    }
}

/**
*   Change secondary and primary navbar to fixed on large displays
*/
@media(min-width: 990px){
    #navbarContainer{
        width: 100%;
        position: fixed;
        top: 0px;
        z-index: 100
    }

    .az-body{
        padding-top: 130px
    }
}
</style>

