/**
 * Logout
 * @Description Clear user's session and return to sign in page
 * @param {Object} vm Vue instance
 * @return {Object} vm Vue instance
 */
export function Logout(vm){
    localStorage.removeItem('session')

    //redirect to sign in page
    location.href = "/sign_in"

}