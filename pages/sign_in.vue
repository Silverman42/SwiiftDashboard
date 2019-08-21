<template>
  <div>
    <div class="az-signup-header">
      <h2 style="color: var(--blue); font-weight: 800">Sign In</h2>
      <h4>A few security checks and you are easily logged in</h4>

      <form action="dashboard-user.html" @submit.prevent="SignIn">
        <div class="row">
          <div class="col-12 form-group">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" placeholder="Enter your email">
            <p v-if="errors['email']" class="mg-t-5 tx-danger">{{errors['email']['message']}}</p>
          </div><!-- form-group -->
          <div class="col-12 form-group">
            <label>Password</label>
            <input type="password" class="form-control" v-model="password" placeholder="Enter your password">
            <p v-if="errors['password']" class="mg-t-5 tx-danger">{{errors['password']['message']}}</p>
          </div><!-- form-group -->
        </div>
        <button class="btn btn-primary btn-block" :disabled='loading'>Login</button>
      </form>
    </div><!-- az-signup-header -->
    <div class="az-signup-footer mg-t-20">
      <div class="mg-t-10 mg-b-10">
        <p>New to Swiift ? <nuxt-link to="/">Sign Up Today</nuxt-link></p>
      </div>
      <div class="mg-t-10 mg-b-10">
        <p><nuxt-link to="recover_password">Forgot your Password ?</nuxt-link></p>
      </div>
    </div><!-- az-signin-footer -->
  </div>
</template>

<script>
   import { LoginUser } from "@/assets/js/controllers/auth/login";
  export default {
    /**
     * Layout for the user authenticated pages
     */
    layout: 'auth_user',
    data(){
        return {
            //User email
           email: '',

           //User Password
           password: '',

           //Loading State of form submission
           loading: false,

           //Error bag for form errors
           errors:{}
        }
    },
    methods:{
      //Sign in Auhtentication
      SignIn(){
         LoginUser(this);
      }
    }
  }

</script>
