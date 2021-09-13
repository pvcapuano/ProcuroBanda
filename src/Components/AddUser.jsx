import { FormControl, FormGroup, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'

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
    const { nome, instrumeto, estado, email } = user
    const classes = useStyle()

    const onValueChange = (e) => {
        console.log(e.target.value)
        setUser({ ...user, [e.target.nome]: e.target.value })
    }

    return(
        <FormGroup className={classes.container}>
            <Typography variant="h4">Adicionar Músico</Typography>
            <FormControl>
                <InputLabel>Nome</InputLabel>
                <Input onChange={(e) => onValueChange(e)} />
            </FormControl>
            <FormControl>
                <InputLabel>Instrumento</InputLabel>
                <Input onChange={(e) => onValueChange(e)} />
            </FormControl>
            <FormControl>
                <InputLabel>Estado</InputLabel>
                <Input onChange={(e) => onValueChange(e)} />
            </FormControl>
            <FormControl>
                <InputLabel>E-mail</InputLabel>
                <Input onChange={(e) => onValueChange(e)} />
            </FormControl>
            <Button variant="contained" color="default">Adicionar Músico</Button>
        </FormGroup>
    )
}