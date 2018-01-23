import AV from 'leancloud-storage'
var APP_ID = 'kJVcuD8Fm4ufCYsQdzlvFQ4W-gzGzoHsz';
var APP_KEY = 'fJgDDI92gXvaGIdOTK4qByct';
AV.init({
    appId: APP_ID,
    appKey: APP_KEY


})
export default AV;

export function signUp(username,password,successFn,errorFn){
    var user = new AV.User()
    user.setUsername(username)
    user.setPassword(password)
    user.signUp().then(function(loginedUser){
        let user = getUserFromAVUser(loginedUser)
        console.log(user)
        successFn.call(null,user)
    },function(error){
        errorFn.call(null,error)
    })

    return undefined


}
export function getCurrentUser(){
    let user=AV.User.current()
    if(user){
        return getUserFromAVUser(user)
    }else{
        return null
    }
}
export function signOut(){
    AV.User.logOut()
    return undefined
}

function getUserFromAVUser(AVUser){
    return {
        id:AVUser.id,
        ...AVUser.attributes
    //    就是把 AVUser.attributes 的属性拷贝到这个对象
    }
}