/**
 * AllowOnlyGuest
 * @description Allow non authenticated users to view the login, sign-up and recover password page
 * @param {Object} Context (All services attached to vue)
 */
export default function({router}){
    const session = JSON.parse(localStorage.getItem('session')) || {}
    //Check for any available session
    if(Object.keys(session).length > 0){
        //Return to client dashboard if the session belong to client
        session.type == 'client' ? redirect('/client') : redirect('/admin')
    }
}