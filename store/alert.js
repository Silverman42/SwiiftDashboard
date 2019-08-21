const alertTimeout = 4000

export const state = ()=> ({
    /**
     * Success Alert Message
     * 
     * @description Alert message in an Object containing the success message
     */
    successAlert: {},

    /**
     * Error Alert Message
     * 
     * @description Alert message in an Object containing the success message
     */
    errorAlert: {}
})

export const mutations = {
    /**
     * InsertAlertMessage
     * 
     * @Description Mutation to insert the alert message
     * @param {Object} state
     * @param {Object} alert Alert Data
     */
    InsertAlertMessage(state, alert){
        state[alert.type] = alert.data
    },

    /**
     * DeleteAlertMessage
     * 
     * @Description Mutation to delete the alert message
     * @param {Object} state
     * @param {Object} alert Alert Data
     */
    DeleteAlertMessage(state,alert){
        state[alert.type] = {}
    },

}

export const actions = {
    /**
     * AlertSuccess
     * @description Create a success alert after a successful operation is executed
     * @param {Object} param0 
     * @param {Object} alertObject 
     */
    AlertSuccess({commit}, alertObject){
        let alertData = {
            type: 'successAlert',
            data: alertObject
        }
        commit('InsertAlertMessage', alertData)

        setTimeout(()=>{
            commit('DeleteAlertMessage',alertData)
        }, alertTimeout)

    },

    /**
     * AlertError
     * @description Create a success alert after a successful operation is executed
     * @param {Object} param0 
     * @param {Object} alertObject 
     */
    AlertError({commit}, alertObject){
        let alertData = {
            type: 'errorAlert',
            data: alertObject
        }
        commit('InsertAlertMessage', alertData)

        setTimeout(()=>{
            commit('DeleteAlertMessage',alertData)
        }, alertTimeout)

    }
}