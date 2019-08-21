export const state = ()=> ({
    //Users first Name
    firstName: '',

    //Users Surname
    lastName: '',

    //Users Email
    email: '',

    //Users id
    id: '',

    //Users type
    user_type: '',

    //Account Type
    account_type: '',

    //Login status
    login_status: 0
})

export const mutations = {
    /**
     * Logout
     * @description Logout from account
     * @param {Object} state 
     */
    Logout(state){
        state.email = ''
        state.account_type = ''
        state.user_type = ''
        state.id = ''
        state.lastName = ''
        state.firstName = ''
        state.login_status = 0
    },

    /**
     * UpdateUser
     * @description Update user account in state
     * @param {Object} state 
     */
    UpdateUser(state, {email, type, account_type, last_name,first_name,id}){
        state.email = email || ''
        state.account_type = account_type || ''
        state.user_type = type || ''
        state.id = id || ''
        state.lastName = last_name || ''
        state.firstName = first_name || ''
    }
}