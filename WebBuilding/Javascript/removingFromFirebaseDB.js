//function to deny request
async function removeRequest(myEmail, requestPos){
    await searchEmail(myEmail);

    await pathLoop('users');
    tmp = strungArray;
    await pathLoop(tmp[posOfEmail]);

    tmp2 = strungArray;
    await pathLoop(tmp2[1]);

    db.ref(strungArray[requestPos]).remove();
}