<template>
  <div class="az-body az-dashboard-eight" id="main_body">
    <navbar>
        <template slot="navDropdownMenu">
          <navlink :navlink='dashLink.nav' />
          <nav-dropdown :navlink='withdrawalLink.nav' :sublinks="withdrawalLink.subnav" />
          <nav-dropdown :navlink='userLink.nav' :sublinks="userLink.subnav" />
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
            <nuxt-link to="/" class="dropdown-item"><i class="typcn typcn-power-outline"></i> Sign
                Out</nuxt-link>
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

  export default {
    head() {
      return {
        script: [{
          script: '../assets/lib/ionicons/ionicons'
        }]
      }
    },
    
    middleware: 'allowAdmin',
    //Lazy loading components
    components:{
        Navbar:()=> import(/*webpackChunkName:'dashboard_admin'*/ '@/components/navbar/navbar'),
        NavDropdown:()=> import(/*webpackChunkName:'dashboard_admin'*/ '@/components/navbar/nav-dropdown'),
        Navlink:()=> import(/*webpackChunkName:'dashboard_admin'*/ '@/components/navbar/navlink'),
        NavProfile:()=> import(/*webpackChunkName:'dashboard_admin'*/ '@/components/navbar/nav-profile-menu'),
        NavNotification:()=> import(/*webpackChunkName:'dashboard_admin'*/ '@/components/navbar/nav-notification')
    },
    data(){
        //Dashboard link
        return{
            dashLink:{
                nav:{
                    linkName:'Dashboard',
                    link: '/admin',
                    icon: 'typcn typcn-clipboard'
                }
            },
            withdrawalLink:{
                nav:{
                    linkName:'E-Withdrawal',
                    link: '/admin/e-withdrawal'
                },
                subnav:[
                    {
                        linkName: 'Withdrawal list',
                        link: '/admin/e-withdrawal',
                    }
                ]
            },
            userLink:{
                nav:{
                    linkName:'User',
                    link: '/admin'
                },
                subnav:[
                    {
                        linkName: 'Manage Admin',
                        link: '/admin',
                    },
                    {
                        linkName: 'Manage Client',
                        link: '/admin',
                    },
                    {
                        linkName: 'Create Admin',
                        link: '/admin',
                    },
                ]
            },
        }
    }
  }

</script>
