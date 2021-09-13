import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'
import { NavLink } from 'react-router-dom'


const useStyle = makeStyles({
    header: {
        background: '#111111'
    },
    tabs: {
        color: '#ffffff',
        textDecoration: 'none',
        marginRight: 20,
        fontSize: 20,
    }
})

export default function NavBar() {
    const classes = useStyle()
    return(
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="./">Procuro Banda</NavLink>
                <NavLink className={classes.tabs} to="all">Todos os músicos</NavLink>
                <NavLink className={classes.tabs} to="add">Adicionar Músico</NavLink>
            </Toolbar>
        </AppBar>
    )
}