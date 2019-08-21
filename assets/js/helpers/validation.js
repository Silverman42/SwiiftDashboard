/**
 * CheckValidationRules
 * @description A wrapper used to loop through all the validation rules.
 * It return an empty object ({}) if all the the validation rules are passed
 * @param {Array} rules (Validation to be looped through)
 * @returns {Object} errorBag
 */
export function CheckValidationRules(rules){
    let errorBag = {}

    for (let rule of rules) {
        // if an error is found in any of the validation rules, stop the loop and return the error
        if(Object.keys(rule).length > 0){
            errorBag = rule
            break;
        }
    }

    //Return an empty error bag if no errors are found in the validation
    return (Object.keys(errorBag).length > 0 ? errorBag : {})
}

/**
 * IsRequired
 * 
 * @desc Check if the field is required
 * @param Object input 
 * @return Boolean
 */
export function IsRequired(input){
    var errorBag = {}
    for(var param of Object.keys(input)){
        //Check if input is required
        if(input[param].value == '' && input[param].required == true){
            errorBag[param] = {
                state: true,
                message: `${param} field is required`
            }
        }
    }
    return errorBag

}

/**
 * Maxlength
 * 
 * @desc check the Maximum string length of the input (for string input)
 * @return Object
 */
export function PassIsConfirmed(password,confirmation, errorMessage = null){
    var error = {}
    if(password.value == confirmation){
        return {}
    }

    error[password.name] = {
        state: 'true',
        message: errorMessage || `The password does not match its confirmation`
    }
    return error

}

/**
 * HasMaxlength
 * 
 * @desc check the Maximum string length of the input (for string input)
 * @return Object
 */
export function HasMaxLength(input, limit,errorMessage = null){
    var error = {}
    if(input.value.length <= limit){
        return {}
    }
    error[input.name] = {
        state: 'true',
        message: errorMessage || `The input is above the expected limit`
    }
    return error 
}

/**
 * HasMinlength
 * 
 * @desc check the Minimum string length of the input (for string input)
 * @return Boolean
 */
export function HasMinLength(input, limit, errorMessage = null){
    var error = {}
    if(input.value.length >= limit){
        return {}
    }
    error[input.name] = {
        state: 'true',
        message: errorMessage || `The input is below the expected limit`
    }
    return error 
}

/**
 * EmailIsValid
 * 
 * @description check if the email is valid
 * @return Object
 */
 export function EmailIsValid(input, errorMessage = null){
    var error = {}
    if(input.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) == null){
        error[input.name] = {
            state: 'true',
            message: `Your email is invalid`
        }
        return error
    }
    return {}
 }