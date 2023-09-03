const axios = require("axios");

async function signupFn(data) {
    try {
        //validation
        const name = data.name.replaceAll(/\s/g, '');
        const email = data.email.replaceAll(/\s/g, '');
        const password = data.password.replaceAll(/\s/g, '');

        if ((!name || !email) || (name.length < 2 || email.length < 6)) {
            return { success: false, msg: 'Invalid credentials' };
        }
        if (!password || password.length < 8) {
            return { success: false, msg: 'Password should be atleast of 8 characters' };
        }


        //request
        const response = await axios.post('http://localhost:8080/signup', {
            name: data.name,
            email: data.email,
            password: data.password,
        }, {
            withCredentials: true,
        },)

        //Success
        if (response.data.success == 'ok' && response.data.userCreated == 'true' && response.status == 200) {
            return { success: true, msg: 'User Created!' };
        }

        //Failure
        return { success: false, msg: response.data.error };

    }
    catch (err) {
        console.log(err)
        return { success: false, msg: err.message }
    }
}

export { signupFn }
