import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core'

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
                <Typography component="h2">Procuro Banda</Typography>
                <Typography component="h2">Todos os músicos</Typography>
                <Typography component="h2">Adicionar Músico</Typography>
            </Toolbar>
        </AppBar>
    )
}