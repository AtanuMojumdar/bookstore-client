const axios = require("axios");

async function googleAuthFn(data){
    try{
        const response = await axios.post('http://localhost:8080/googleauth',data,{
            withCredentials: true,
        })

        //Success
        if(response.data.success == 'ok'){
            return { success: true, msg: 'Google User Data Stored' };
        }

        //Failure
        return { success: false, msg: response.data.error };
    }
    catch(err){
        console.log(err.message);
        return { success: false, msg: err.message }
    }
}

export {googleAuthFn}