import axios from 'axios'

import { server } from "../../server";
let token = localStorage.getItem('token')

console.log("token Me", token)

// load user
export const loadUser = () => async(dispatch) => {
    try{
        dispatch({
            type: "LoadUserRequest",
        });

        const { data } = await axios.get(`${server}/user/getuser`, {
             headers: {
                'Authorization': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });
        
        console.log("data me", data.user)
        dispatch({
            type: "LoadUserSuccess",
            payload: data.user,
        })

    }catch(error){
        dispatch({
            type: "LoadUserFail",
            payload: error.response.data.message
        })

    }
}


