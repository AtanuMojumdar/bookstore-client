import axios from 'axios'

async function loginFn(data) {
    try {
        //validation
        const email = data.email.replaceAll(/\s/g, '');
        const password = data.password.replaceAll(/\s/g, '');

        if (!email || email.length < 6) {
            return { success: false, msg: 'Invalid credentials' };
        }
        if (!password || password.length < 8) {
            return { success: false, msg: 'Password should be atleast of 8 characters' };
        }

        
        //request
        const response = await axios.post('http://localhost:8080/login', {
            email: data.email,
            password: data.password,
        }, {
            withCredentials: true,
        },)

        //Success
        if (response.data.success == 'ok' && response.data.userAuthenticated == 'true' && response.status == 200) {
            return { success: true, msg: 'User Authenticated' };
        }

        //Failure
        return { success: false, msg: response.data.error };
    }
    catch (err) {
        console.log(err.message);
        return { success: false, msg: err.message }
    }
}

export { loginFn }