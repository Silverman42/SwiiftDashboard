'use strict'
import {IsRequired,EmailIsValid,CheckValidationRules} from "../../helpers/validation";

/**
 * ValidateLogin
 * @description Check if the login details match the validation rules
 * @param {Object} vm
 * @return {Object} errorBag
 */
 function ValidateLogin(vm){
    let user = {
        email: {
        name: 'email',
        required: true,
        value: vm.email,
    },
        password: {
        name: 'password',
        required: true,
        value: vm.password
    }
}
    let errorBag = {}
    let rules = [
        //Check valid email
        EmailIsValid(user['email']),

        //Check if input is required
        IsRequired(user),
    ]

    errorBag = CheckValidationRules(rules)
    return errorBag
}

/**
 * ValidateUser
 * @Description The checks for the validity of the user using his/her login details (email & password)
 * in the DB
 * @param {Object} vm (Vue instance)
 * @return {Object} validityFeedback (Details about the user)
 */

 async function ValidateUser(vm){
    var userDB = await(JSON.parse(localStorage.getItem('users') || '[]'))
    var userData = userDB.find(function (user) { 
        return (user['email'] == vm.email && user['password'] == vm.password)
    })

    //Return false if the email and password does not match what is in the data base
    if (userData === undefined) {
        return {
            status: false,
            userData: {}
        }
    }
    return {
        status: true,
        userData: userData
    } 
 }

 /**
  * ProcessLogin
  * @description Process the login action by redirecting to dashboard according to the type of user
  * @param {Object} vm (Vue Instance)
  * @param {Object} userData (User data of logged user)
  * 
  */
export async function ProcessLogin(vm, userData){
    if(userData.type == undefined ){
        return
    }

    if(userData.type == 'client'){
        localStorage.setItem('session', JSON.stringify(
            {
                id: userData.id,
                type: userData.type
            }
        ))
        vm.$store.commit('UpdateUser',userData)
        return vm.$router.push('/client')
    }
    if(userData.type == 'admin'){
        localStorage.setItem('session', JSON.stringify(
            {
                id: userData.id,
                type: userData.type
            }
        ))
        vm.$store.commit('UpdateUser',userData)
        return vm.$router.push('/admin')
    }
}

/**
 * LoginUser
 * @description: If all validity checks are passed, login the user data in localStorage
 * @param {Object} Vm
 * 
 */
export async function LoginUser(vm){
    var errorBag = await(ValidateLogin(vm))
    var userIsValid = await(ValidateUser(vm))
    var successAlert = {
        type: "success",
        heading: "Login Successful",
        message: "Your Login was successful. Please wait while you are transferred to your dashboard"
    }
    var errorAlert = {
        type: "error",
        heading: 'Login Failed',
        message: "Invalid user credentials. Please try again"
    }

    //Use loading state to temporarily disable button
    vm.loading = true
    //If there are error validation errors in the login details
    if(Object.keys(errorBag).length > 0){
        vm.loading = false
        return vm.errors = errorBag
    }
    if(userIsValid.status == false){
        vm.loading = false
        return vm.$store.dispatch('alert/AlertError',errorAlert)
    }

    vm.$store.dispatch('alert/AlertSuccess',successAlert)
    ProcessLogin(vm,userIsValid.userData)
    return vm.loading = false

}