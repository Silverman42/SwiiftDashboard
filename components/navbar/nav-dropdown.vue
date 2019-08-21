<template>
  <li class="nav-item" :class='{active: isActive, show: isOpen}' @focusout.prevent='HideDropdown($event)'>
    <!--Check if navlink has submenus
    @click.prevent="toggleVisibility($event)"
    -->
    <a href="#" class="nav-link with-sub" @click.prevent='ToggleDropdown($event)'>
        <i :class="[(navlink.icon || 'typcn typcn-document')]"></i>{{navlink.linkName || ''}}
    </a>

    <nav class="nav-sub" @focusin.prevent='ShowDropdown($event)'>
      <nuxt-link v-for="(sublink,index) in sublinks" :key='index' exact :to="sublink.link || '/'" active-class='active' class="nav-sub-link">
        {{sublink.linkName || ''}}
      </nuxt-link>
    </nav>
  </li><!-- nav-item -->
</template>

<script>
/**
 * Navlink Component
 */
export default {
    props:{
        navlink:{
            type: Object,
            default(){
                return {
                    linkName: '',
                    link: ''
                }
            }
        },
        //Sublinks
        sublinks:{
            type: Array,
            default(){
                return []
            }
        },
    },
    data(){
        return{
            //save current state for active navlink
            isActive: false,

            //save current state for currently opened dropdown menu
            isOpen: false,

        }
    },
    watchers:{
        '$route'(to,from){
            this.verifyActiveRoute(to.path);
        }
    },
    methods:{
        /**
         * Show and hide nav sub links on click of the nav button 
         */
        ToggleDropdown(event){
            return (this.isOpen = this.isOpen == false ? true : false )
        },

        /**
         * Hide sublinks menu
         */
        HideDropdown(event){
            return (this.isOpen = false)
        },

        /**
         * Show sublinks menu
         */
        ShowDropdown(event){
            return (this.isOpen = true)
        },
        /**
         * Check if the current route path is equal to the navlink's route
         */
        verifyActiveRoute(){
            this.isActive = this.$route.path.includes(this.navlink.link) ? true : false
        }
    }
}
</script>

