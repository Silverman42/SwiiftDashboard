/**
 * AllowAdmin
 * @description Allow only admin view admin pages
 * @param {Object} Context (All services attached to vue)
 */
export default function({redirect}){
    const session = JSON.parse(localStorage.getItem('session')) || {}
    //Check for any available session
    if(Object.keys(session).length > 0){
        //Return to sign in page if session belongs to client
        return (session.type !== 'admin' ? redirect('/sign_in') : '')
    }
    //Return to sign in if there is no session
    return redirect('/sign_in')
}