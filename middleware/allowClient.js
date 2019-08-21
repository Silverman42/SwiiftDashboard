/**
 * AllowClient
 * @description Allow only client view client pages
 * @param {Object} Context (All services attached to vue)
 */
export default function({redirect}){
    const session = JSON.parse(localStorage.getItem('session')) || {}
    //Check for any available session
    if(Object.keys(session).length > 0){
        //Return to sign in page if session belongs to admin
        return (session.type !== 'client' ? redirect('/sign_in') : '')
    }
    //Return to sign in if there is no session
    return redirect('/sign_in')
}