import React from 'react'
import GuitarJump from '../Assets/Images/guitar_jump.png'
import { Box, makeStyles, Typography } from '@material-ui/core'

const useStyle = makeStyles({
    component: {
        margin: '200px 0 0 40%',
        width: '50%'
    }
})

export default function ProcuroBanda() {
    const classes = useStyle()
    return (
        <Box className={classes.component} >
            <Typography variant="h4" style={{marginBottom: 50}}>Procuro Banda</Typography>
            <Box style={{display: 'flex'}}>
                <img src={GuitarJump} alt="" />
            </Box>
        </Box>
    )
}