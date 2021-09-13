import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'


const useStyle = makeStyles({
    header: {
        background: '#111111'
    }
})

export default function NavBar() {
    const classes = useStyle()
    return(
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink to="./">Procuro Banda</NavLink>
                <NavLink to="all">Todos os músicos</NavLink>
                <NavLink to="add">Adicionar Músico</NavLink>
            </Toolbar>
        </AppBar>
    )
}