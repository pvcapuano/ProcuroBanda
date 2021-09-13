import { FormControl, FormGroup, InputLabel, Input } from '@material-ui/core'
import React from 'react'

export default function AddUser() {
    return(
        <FormGroup>
            <FormControl>
                <InputLabel>Nome</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel>Instrumento</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel>Estado</InputLabel>
                <Input />
            </FormControl>
            <FormControl>
                <InputLabel>E-mail</InputLabel>
                <Input />
            </FormControl>
        </FormGroup>
    )
}