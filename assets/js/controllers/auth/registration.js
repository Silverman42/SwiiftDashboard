import {IsRequired,HasMinLength,EmailIsValid,PassIsConfirmed,CheckValidationRules} from "../../helpers/validation";

/**
 * ValidateRegistration
 * 
 * @description Validate users registration
 * @param vm Object --> Vue Instance
 * @return errorBag Object
 */
function ValidateRegistration(vm){

    var newUser = {
        firstName: {
            name: 'firstName',
            required: true,
            value: vm.firstName
        },
        lastName:{
            name: 'lastName',
            required: true,
            value: vm.lastName
        },
        email: {
            name: 'email',
            required: true,
            value: vm.email,
        },
        password: {
            name: 'password',
            required: true,
            value: vm.password
        },
    }

    var errorBag = {}
    var rules = [

    //Check valid email
    EmailIsValid(newUser['email']),

    //Check if input is required
    IsRequired(newUser),

    //Check confirmed password
    PassIsConfirmed(newUser['password'], vm.confirmPassword),

    //Check valid password
    HasMinLength(newUser['password'], 6)
    ]

    errorBag = CheckValidationRules(rules)
    vm.errors = errorBag
    return errorBag
}

/**
 * ValidateUser
 * 
 * @description Validate the the email against the db to check if the user has registered before
 * @param {Object} vm 
 * @return {Boolean} false (Error)
 * @return {Boolean} true (Success)
 */
async function ValidateUser(vm) { 
    var userDB = await(JSON.parse(localStorage.getItem('users') || '[]'))
    
    var mailExists = userDB.some(function (user) { 
        return user['email'] == vm.email
    })

    //Return false if the email exist in the db
    if(mailExists){
        return false
    }
    return true

}

/**
 * RegisterUsers
 * 
 * @description Create New Users and add their data in jason format
 * @param {Object} vm --> Vue instance
 */

export async function RegisterUsers(vm){
    var errorBag = await(ValidateRegistration(vm))

    //Check for DB Validation Error If error alert is empty
    var validUser = await(ValidateUser(vm))
    var successAlert = {
        type: "success",
        heading: "Registration Successful",
        message: "You have successfully registered. Please start your transaction by login in with your details"
    }
    var errorAlert = {
        type: "error",
        heading: 'Registration Failed',
        message: "Invalid Email. Please enter a new mail"
    }

    var inputData = {}
    var userDB
    
    //Check if there are no errors in the validation from the database and errorBag
    if(Object.keys(errorBag).length <= 0 && validUser == true){
        userDB = JSON.parse(localStorage.getItem('users') || '[]')
        inputData['first_name'] = vm.firstName
        inputData['last_name'] = vm.lastName
        inputData['password'] = vm.password
        inputData['email'] = vm.email
        inputData['id'] = Math.floor(Math.random() * 12345)
        inputData['type'] = 'client'
        inputData['account_type'] = 'individual'

        //Push New data to the old user data base array
        userDB.push(inputData)

        //Submit to database
        localStorage.setItem('users',JSON.stringify(userDB))

        //Show Alert
        return vm.$store.dispatch('alert/AlertSuccess',successAlert)
    }
    if(validUser == false){
        return vm.$store.dispatch('alert/AlertError',errorAlert)
    }

}

/**
 * 
 * 
 */