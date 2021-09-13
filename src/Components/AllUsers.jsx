import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getUsers } from '../Service/api'

const useStyle = makeStyles({
    table: {
        width: "90%",
        margin: "50px 0 0 50px"
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF'
        }
    },
    row: {
        '& > *': {
            fontSize: 18
        }
    }
})

export default function AllUsers(){

    const [users, setUsers] = useState([])
    const classes = useStyle()

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
       const response = await getUsers()
       console.log(response)
       setUsers(response.data)
    }
    return(
        
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Nome</TableCell>
                    <TableCell>Intrumento</TableCell>
                    <TableCell>Estado</TableCell>
                    <TableCell>E-mail</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                users.map(user => (
                    <TableRow className={classes.row}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.instrumento}</TableCell>
                        <TableCell>{user.estado}</TableCell>
                        <TableCell>{user.email}</TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
        </Table>
        
    )
}