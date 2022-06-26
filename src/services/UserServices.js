import axios from "axios"

 // calling API geting users DATA ***************** //
export const users = async() =>{
        const resp =  await axios.get("https://j5ej5u32gg.execute-api.us-east-1.amazonaws.com/v1/fetch");
        console.log(resp.data);
        return resp

}

 // calling API POST user DATA ***************** //
 export const addUser = async(userData) =>{
    return  await axios.get("https://c0ri699qs5.execute-api.us-east-1.amazonaws.com/v1/add?"+userData);
    // console.log(resp.data);
    // return resp

}

 // calling API Update user DATA ***************** //
 export const updateUser = async(userData) =>{
    const resp =  await axios.get("https://o1wm686yz2.execute-api.us-east-1.amazonaws.com/v1/edit?"+userData);
    console.log(resp.data);
    return resp

}

 // calling API Update user DATA ***************** //
 export const deleteUser = async(userData) =>{
    const resp =  await axios.get("https://k6j938wg66.execute-api.us-east-1.amazonaws.com/v1/delete?"+userData);
    console.log(resp.data);
    return resp

}