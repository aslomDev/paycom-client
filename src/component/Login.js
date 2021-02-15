import React, {useState, useRef} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AuthService from '../service/AuthService'
import { useHistory } from "react-router-dom";
import {Alert, UncontrolledAlert} from 'reactstrap';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                Aslom
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const useStyles = makeStyles((theme) => ({

    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    input: {
        "&:invalid": {


        }
    },


}));

export default function SignInSide() {
    const history = useHistory();
    const form = useRef();

    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    const onChangePhoneNumber = (e) => {
        const phoneNumber = e.target.value;
        setPhoneNumber(phoneNumber);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };



    const handleLogin = (e) => {
        e.preventDefault();

        AuthService.login(phoneNumber, password).then(
            (res) => {
                if (res == "xato") {
                        <Alert color="primary" isOpen={visible} toggle={onDismiss} fade={false}>
                            I am a primary alert and I can be dismissed without animating!
                        </Alert>

                    alert("login yoki parol xato");
                } else {
                    // alert("ok")
                    history.push("/menu")
                }
            }
        )

    };

    // const alert = () => {
    //
    // }


    const classes = useStyles();






    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Авторизация
                    </Typography>
                    <form className={classes.form} autoComplete={"off"} noValidate onSubmit={handleLogin} ref={form} >
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required={true}
                            fullWidth
                            id="phoneNumber"
                            label="введите тел номера"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={onChangePhoneNumber}
                            autoComplete="phoneNumber"
                            autoFocus
                            inputProps={{ className: classes.input, pattern: "[0-9]{1,12}" }}
                            placeholder="998909995544"
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required={true}
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onChangePassword}
                            label="введите парол"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Запомните меня"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Войти
                        </Button>

                        {/*<Snackbar*/}
                        {/*    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}*/}
                        {/*    open={lol}*/}
                        {/*    // onClose={handleClose}*/}
                        {/*    message="I love snacks"*/}
                        {/*    // key={vertical + horizontal}*/}
                        {/*/>*/}

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Не могу войти
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="register" variant="body2">
                                    {"Регистрация"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}