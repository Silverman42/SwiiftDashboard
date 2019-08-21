<template>
  <div class="az-body az-dashboard-eight">
    <navbar>
        <template slot="navDropdownMenu">
          <navlink :navlink='dashLink.nav' />
          <nav-dropdown :navlink='withdrawalLink.nav' :sublinks="withdrawalLink.subnav" />
        </template>

        <!--Navbar Profile menu-->
        <template slot="navProfileMenu">
          <nav-profile>
            <!--
            <a href="" class="dropdown-item"><i class="typcn typcn-time"></i> Activity Logs</a>
            <a href="" class="dropdown-item"><i class="typcn typcn-cog-outline"></i> Account Settings</a>
              -->
            <a href="" class="dropdown-item"><i class="typcn typcn-user-outline"></i> My Profile</a>
            <a href="" class="dropdown-item"><i class="typcn typcn-edit"></i> Edit Profile</a>
            <a href="" class="dropdown-item" @click.prevent="Logout"><i class="typcn typcn-power-outline"></i> Sign
                Out</a>
          </nav-profile>
        </template>

        <!--Navbar Notification menu-->
        <template slot="navNotification">
          <nav-notification/>
        </template>
    </navbar>
    <div class="az-content az-content-dashboard-eight">
      <nuxt />
    </div>

    <!--Footer-->
    <div class="az-footer">
        <div class="container">
            <span>&copy; 2019 Swiift Wallet</span>
            <span>Designed with Bootstrap</span>
        </div><!-- container -->
    </div><!-- Footer -->
  </div>
</template>
<script>
  import {Logout} from "@/assets/js/controllers/auth/logout";
  export default {
    head() {
      return {
        script: [{
          script: '../assets/lib/ionicons/ionicons'
        }]
      }
    },
    middleware: 'allowClient',
    //Lazy loading components
    components:{
        Navbar:()=> import(/*webpackChunkName:'dashboard_client'*/ '@/components/navbar/navbar'),
        NavDropdown:()=> import(/*webpackChunkName:'dashboard_client'*/ '@/components/navbar/nav-dropdown'),
        Navlink:()=> import(/*webpackChunkName:'dashboard_client'*/ '@/components/navbar/navlink'),
        NavProfile:()=> import(/*webpackChunkName:'dashboard_client'*/ '@/components/navbar/nav-profile-menu'),
        NavNotification:()=> import(/*webpackChunkName:'dashboard_client'*/ '@/components/navbar/nav-notification'),
    },
    data(){
        //Dashboard link
        return{
            dashLink:{
                nav:{
                    linkName:'Dashboard',
                    link: '/client',
                    icon: 'typcn typcn-clipboard'
                }
            },
            withdrawalLink:{
                nav:{
                    linkName:'E-Withdrawal',
                    link: '/client/e-withdrawal'
                },
                subnav:[
                    {
                        linkName: 'Make Withdrawal',
                        link: '/client/e-withdrawal/create',
                    },
                    {
                        linkName: 'Withdrawal list',
                        link: '/client/e-withdrawal',
                    }
                ]
            }
        }
    },
    computed:{
      //Alert success message that has been inserted in the store
      successMessage(){
        return this.$store.state.alert.successAlert
      },

      //Alert error message that has been inserted in the store
      errorMessage(){
        return this.$store.state.alert.errorAlert
      }
    },
    methods:{
      Logout(){
        //Imported Logout function
        Logout(this)
      }
    }
  }

</script>
