<template>
  <div class="dropdown az-header-notification" @focusout.prevent='HideMenuDesktop' :class="{show:isOpen}">
    <a href="" :class="{new: notificationFound}" @click.prevent='ToggleMenu'><i class="typcn typcn-bell"></i></a>
    <div class="dropdown-menu" @focusin.prevent='ShowMenu'>
      <div class="az-dropdown-header mg-b-20 d-sm-none">
        <a href="" class="az-header-arrow" @click.prevent='HideMenu'><i class="icon ion-md-arrow-back"></i></a>
      </div>
      <div v-if="notificationFound">
        <h6 class="az-notification-title">Notifications</h6>
        <p class="az-notification-text">You have {{notifications.length}} unread notification</p>
        <div class="az-notification-list">
          <div v-for="(notification,index) in notifications" :key='index' class="media new">
            <div class="az-img-user"><img :src="notification.avatar" alt=""></div>
            <div class="media-body">
              <p class="tx-bold">{{notification.message}}</p>
              <span>{{notification.time}}</span>
            </div><!-- media-body -->
          </div><!-- media -->
        </div><!-- az-notification-list -->
        <div class="dropdown-footer"><a href="">View All Notifications</a></div>
      </div>

      <!--No Notification view-->
      <div v-if="notificationEmpty" class="bd bd-gray-200 pd-10 text-center">
        <h5 class="tx-bold">No Notications Found</h5>
        <p class="az-content-text">You have no notifications at the moment</p>
      </div>
    </div><!-- dropdown-menu -->
  </div><!-- az-header-notification -->
</template>
<script>
  export default {
    props: {
      notifications: {
        type: Array,
        default () {
          return [
              {
            message: 'You have made a withdrawal',
            avatar: '/img/avatar.jpg',
            time: "Mar 12 10:40"
            }
          ]
        }
      }
    },
    data() {
      return {
        //Show and hide state of profile menu
        isOpen: false
      }

    },
    computed:{
        /**
         * Check if notication is found
         */
        notificationFound(){
            return (this.notifications.length > 0 ? true : false)
        },

        /**
         * Check if there are no notifications
         */
        notificationEmpty(){
            return (this.notifications.length <= 0 ? true : false)
        }
    },
    methods: {

      ToggleMenu(){
         return (this.isOpen = !this.isOpen)
      }, 
    
      /**
       * Hide Notification menu
       */
      HideMenu(event) {
        return (this.isOpen = false)
      },

      /**
       * Show Notification menu
       */
      ShowMenu(event) {
        return (this.isOpen = true)
      },

      /**
      * Hide profile onlyin desktop view
      */
      HideMenuDesktop(event){
        if (window.matchMedia('(min-width: 992px)').matches){
            return (this.isOpen = false)
        }
       },
    }

  }

</script>
