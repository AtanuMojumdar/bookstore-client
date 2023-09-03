const axios = require("axios");

async function signoutFn(){
    try{

        //request
        const response = await axios.get('http://localhost:8080/signout',{
            withCredentials: true,
        });

        //Success
        if(response.data.success == 'ok'){
            return { success: true, msg: 'User Logged Out' };
        }

        //Failure
        return { success: false, msg: response.data.error };
    }
    catch(err){
        console.log(err.message);
        return { success: false, msg: err.message }
    }
}

export {signoutFn}