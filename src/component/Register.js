import React, {useState, useRef} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useHistory} from "react-router";
import AuthService from "../service/AuthService";

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
    paper: {
        marginTop: theme.spacing(8),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function SignUp() {

    const history = useHistory();
    const form = useRef();

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [code, setCode] = useState("");
    const [isCode, setIsCode] = useState("");

    const onChangeLastName = (e) => {
        const lastName = e.target.value;
        setlastName(lastName);
    };

    const onChangeFirstName = (e) => {
        const firstName = e.target.value;
        setFirstName(firstName);
    };

    const onChangePhoneNumber = (e) => {
        const phoneNumber = e.target.value;
        setPhoneNumber(phoneNumber);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const onChangeCode = (e) => {
        const code = e.target.value;
        setCode(code);
    };



    const handleReg = (e) => {
        e.preventDefault();

        AuthService.register(firstName, lastName, phoneNumber, password).then(
            (res) => {
                if (res.data == "xato") {
                    alert("login yoki parol xato");
                }else if (res.data == "active"){
                    const noo = "isCOddde";
                    setIsCode(noo);
                } else {
                    history.push("/menu")
                }
            }
        )

    };

    const handleCode = (e) => {
        e.preventDefault();

        AuthService.activate(firstName, lastName, phoneNumber, password, code).then(
            (res) => {
                if (res.data == "kod") {
                    alert("kod no tugri");
                } else {
                    history.push("/menu")
                }
            }
        )

    };

    const classes = useStyles();

    if (isCode == "isCOddde") {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Регистрация
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleCode} ref={form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField disabled={true}
                                    autoComplete="fname"
                                    name="firstName"
                                    value={firstName}
                                    onChange={onChangeFirstName}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Имя"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField disabled={true}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Фамилия"
                                    name="lastName"
                                    value={lastName}
                                    onChange={onChangeLastName}
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField disabled={true}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Тел номер"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={onChangePhoneNumber}
                                    autoComplete="phoneNumber"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField disabled={true}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    label="Парол"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <TextField color={"primary"}
                                           variant="filled"
                                           required
                                           fullWidth
                                           name="code"
                                           value={code}
                                           onChange={onChangeCode}
                                           label="Код"
                                           type="code"
                                           id="code"
                                           autoComplete="code"
                                />
                            </Grid>
                            {/*<Grid item xs={12}>*/}
                            {/*    <FormControlLabel*/}
                            {/*        control={<Checkbox value="allowExtraEmails" color="primary" />}*/}
                            {/*        label="I want to receive inspiration, marketing promotions and updates via email."*/}
                            {/*    />*/}
                            {/*</Grid>*/}
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Отправить код
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="login" variant="body2">
                                    Уже есть аккаунт? Войти
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        );
    }else {
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Регистрация
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={handleReg} ref={form}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    value={firstName}
                                    onChange={onChangeFirstName}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Имя"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Фамилия"
                                    name="lastName"
                                    value={lastName}
                                    onChange={onChangeLastName}
                                    autoComplete="lname"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="phoneNumber"
                                    label="Тел номер"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={onChangePhoneNumber}
                                    autoComplete="phoneNumber"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    label="Парол"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Регистрация
                        </Button>
                        <Grid container justify="flex-end">
                            <Grid item>
                                <Link href="login" variant="body2">
                                    Уже есть аккаунт? Войти
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </Container>
        );
    }

}