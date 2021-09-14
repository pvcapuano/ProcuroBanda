import { Table, TableBody, TableCell, TableHead, TableRow, makeStyles, Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getUsers, deleteUser } from '../Service/api'
import { Link } from 'react-router-dom'

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
       let response = await getUsers()
       setUsers(response.data)
    }

    const deleteUserData = async (id) => {
        await deleteUser(id)
        getAllUsers()
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
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                users.map(user => (
                    <TableRow className={classes.row} key={user._id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.instrumento}</TableCell>
                        <TableCell>{user.estado}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user.id}`}>Editar</Button>
                            <Button variant="contained" color="secondary" onClick={()=> deleteUserData(user.id)}>Deletar</Button>
                        </TableCell>
                    </TableRow>
                ))
                }
            </TableBody>
        </Table>
        
    )
}