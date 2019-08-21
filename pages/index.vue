<template>
  <div> 
  
  <div class="az-signup-header">
    <h2 style="color: var(--blue);font-weight: 800">Get Started</h2>
    <h4>It's free to signup and only takes a minute.</h4>

    <form action="page-profile.html" @submit.prevent="RegisterUsers($event)">
      <div class="row">
        <div class="col-6 form-group">
          <label>Surname</label>
          <input type="text" class="form-control" v-model="lastName" placeholder="Enter your surname">
          <p v-if="errors['lastName']" class="mg-t-5 tx-danger">{{errors['lastName']['message']}}</p>
        </div><!-- form-group -->
        <div class="col-6 form-group">
          <label>Other name(s)</label>
          <input type="text" class="form-control" v-model="firstName" placeholder="Enter your other name(s)">
          <p v-if="errors['firstName']" class="mg-t-5 tx-danger">{{errors['firstName']['message']}}</p>
        </div><!-- form-group -->
        <div class="col-12 form-group">
          <label>Email</label>
          <input type="text" class="form-control" v-model="email" placeholder="Enter your email">
          <p v-if="errors['email']" class="mg-t-5 tx-danger">{{errors['email']['message']}}</p>
        </div><!-- form-group -->
        <div class="col-12 form-group">
          <label>Password</label>
          <input type="password" class="form-control" v-model="password" placeholder="Enter your password">
          <p v-if="errors['password']" class="mg-t-5 tx-danger">{{errors['password']['message']}}</p>
        </div><!-- form-group -->
        <div class="col-12 form-group">
          <label>Confirm Password</label>
          <input type="password" class="form-control" v-model="confirmPassword" placeholder="Re-enter your password">
        </div><!-- form-group -->
      </div>
      <button class="btn btn-primary btn-block">Create Account</button>
    </form>
  </div><!-- az-signup-header --> 
  <div class="az-signup-footer mg-t-20 mg-b-10">
    <p>Already have an account? <nuxt-link to="/sign_in">Sign In</nuxt-link></p>
  </div><!-- az-signin-footer -->
  </div>
</template>

<script>
 import { RegisterUsers } from "@/assets/js/controllers/auth/registration";
export default {
  /**
   * Layout for the user authenticated pages
   */
  layout: 'auth_user',
  data(){
    return{
      password: '',
      confirmPassword: '',
      firstName:'',
      lastName: '',
      email: '',
      errors: {},
      alert: {}
    }
  },
  methods:{
    RegisterUsers(e){
        RegisterUsers(this)
    }
  }
}
</script>

