import { database } from "./config";

export const createProfile = async (firstname, lastname) => { 
    return await database.rpc('create_profile',{
        firstname, 
        lastname
    }).then(res => {
        console.log(res.json())
    }).catch(err => {
        console.log(err)
    });
}

export const deleteProfile = async (profileId) => {
    return await database.rpc('delete_profile',{
        profileId
    }).then(res => {
        console.log(res.json())
    }).catch(err => {
        console.log(err)
    });
}

export const getProfile = async (profileId) => {
    return await database.rpc('get_profile',{
        profileId
    }).then(res => {
        console.log(res.json())
    }).catch(err => {
        console.log(err)
    });
}

export const updateProfile = async (firstname, lastname, profileId) => {
    return await database.rpc('update_profile',{
        profileId,
        firstname,
        lastname
    }).then(res => {
        console.log(res.json())
        // navigate
    }).catch(err => {
        console.log(err)
    });
}

export const login = async (firstname, lastname) => {
    return await database.rpc('user_login',{
        firstname,
        lastname
    }).then(res => {
        console.log(res.json())
    }).catch(err => {
        console.log(err)
    });
}