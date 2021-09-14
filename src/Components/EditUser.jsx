import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { editUser, getUsers } from '../Service/api'
import { useHistory, useParams } from 'react-router-dom'

const useStyle = makeStyles({
    container: {
        width: "50%",
        margin: "5% 0 0 25%",
        '& > *': {
            marginTop: "20"
        }
    }
})

const initialValues = {
    name: '',
    instrumento: '',
    estado: '',
    email: ''
}

export default function EditUser() {
    const [ user, setUser] = useState(initialValues)
    const { name, instrumento, estado, email } = user
    const { id } = useParams()
    const classes = useStyle()
    const history = useHistory()

    useEffect(() => {
        loadUserDetails()
    }, [])

    const loadUserDetails = async () => {
        const response = await getUsers(id)
        setUser(response.data)
    }

    const onValueChange = (e) => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const editUserDetails = async () => {
        const response = await editUser(id, user)
        history.push('/all')
    }

    return(
        <FormGroup className={classes.container}>
            <Typography variant="h4">Editar Músico</Typography>
            <FormControl>
                <InputLabel>Nome</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} />
            </FormControl>
            <FormControl>
                <InputLabel>Instrumento</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='instrumento' value={instrumento} />
            </FormControl>
            <FormControl>
                <InputLabel>Estado</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='estado' value={estado} />
            </FormControl>
            <FormControl>
                <InputLabel>E-mail</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} />
            </FormControl>
            <Button variant="contained" onClick={() => editUserDetails()} color="default">Editar Músico</Button>
        </FormGroup>
    )
}