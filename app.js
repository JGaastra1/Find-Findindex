function myFind(arr, callBack){
    for(let i = 0; i < arr.length; i++){
        if(callBack(arr[i], i, arr) === true){
            return arr[i];
        } else {
            return undefined;
        }
    }

}

function myFindIndex(arr, callBack){
    for(let i = 0; i < arr.length; i++){
        if(callBack(arr[i], i, arr) === true){
            return i;
        } else {
            return -1;
        }
    }
}


function findUserByUsername(arr, str){
    return arr.find(function(name){
        return name.str === str;
    });
}

function removeUser(arr, str){
    let user = arr.findIndex(function(username){
        return username.str === str;
    })
    return arr.splice(user,1)[0];
    
}