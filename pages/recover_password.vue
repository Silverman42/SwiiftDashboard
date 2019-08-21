<template>
  <div>
    <div class="az-signup-header">
      <h2 style="color: var(--blue);font-weight: 800">Recover Password</h2>
      <h4>Enter your email and a recovery email will be sent to your email</h4>
    </div><!-- az-signup-header -->
    <form action="page-profile.html">
        <div class="row">
            <div class="col-12 form-group">
            <label>Recovery Email</label>
            <input type="email" class="form-control" placeholder="Enter your email">
            </div><!-- form-group -->
        </div>
        <button class="btn btn-primary btn-block">Send Recovery Link</button>
    </form>
    <div class="az-signup-footer mg-t-20">
      <div class="mg-t-10 mg-b-10">
        <p>New to Swiift ? <nuxt-link to="/">Sign Up Today</nuxt-link></p>
      </div>
      <div class="mg-t-10 mg-b-10">
        <p>Already have an account? <nuxt-link to="/sign_in">Sign In</nuxt-link></p>
      </div>
    </div><!-- az-signin-footer -->
    <!-- az-signin-footer -->
  </div>
</template>

<script>
  export default {
    /**
     * Layout for the user authenticated pages
     */
    layout: 'auth_user'
  }

</script>
