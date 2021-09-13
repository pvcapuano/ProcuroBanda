import React from 'react'
import { getUsers } from '../Service/api'

export default function AllUsers(){

    const getAllUsers = async () => {
        await getUsers()
    }
    return(
        <>
        <p>Oi de usuario</p>
        </>
    )
}