import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { addUser } from '../Service/api'

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

export default function AddUser() {
    const [ user, setUser] = useState(initialValues)
    const { name, instrumento, estado, email } = user
    const classes = useStyle()

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        await addUser(user)
    }

    return(
        <FormGroup className={classes.container}>
            <Typography variant="h4">Adicionar Músico</Typography>
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
            <Button variant="contained" onClick={() => addUserDetails()} color="default">Adicionar Músico</Button>
        </FormGroup>
    )
}