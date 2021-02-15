// import React from 'react';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Paper from '@material-ui/core/Paper';
// import Box from '@material-ui/core/Box';
// import Grid from '@material-ui/core/Grid';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';
//
// function Copyright() {
//     return (
//         <Typography variant="body2" color="textSecondary" align="center">
//             {'Copyright © '}
//             <Link color="inherit" href="#">
//                 Aslom
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }
//
// const useStyles = makeStyles((theme) => ({
//     root: {
//         height: '100vh',
//     },
//     image: {
//         backgroundImage: 'url(https://source.unsplash.com/random)',
//         backgroundRepeat: 'no-repeat',
//         backgroundColor:
//             theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//     },
//     paper: {
//         margin: theme.spacing(8, 4),
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//     },
//     avatar: {
//         margin: theme.spacing(1),
//         backgroundColor: theme.palette.secondary.main,
//     },
//     form: {
//         width: '100%', // Fix IE 11 issue.
//         marginTop: theme.spacing(1),
//     },
//     submit: {
//         margin: theme.spacing(3, 0, 2),
//     },
// }));
//
// // async function loginUser(credentials){
// //
// // }
// //
// // const useFormField = (initialValue: string = '') => {
// //     const [value, setValue] = React.useState(initialValue);
// //     const onChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value), []);
// //     return { value, onChange };
// // };
// //
// // export function LoginForm() {
// //     const emailField = useFormField();
// //     const passwordField = useFormField();
// //
// //     const handleSubmit = (e: React.FormEvent) => {
// //         e.preventDefault();
// //         api.login(emailField.value, passwordField.value);
// //     };
//
//
// export default function SignInSide() {
//
//
//     const classes = useStyles();
//
//     return (
//         <Grid container component="main" className={classes.root}>
//             <CssBaseline />
//             <Grid item xs={false} sm={4} md={7} className={classes.image} />
//             <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//                 <div className={classes.paper}>
//                     <Avatar className={classes.avatar}>
//                         <LockOutlinedIcon />
//                     </Avatar>
//                     <Typography component="h1" variant="h5">
//                         Авторизация
//                     </Typography>
//                     <form className={classes.form} noValidate >
//                         <TextField
//                             variant="outlined"
//                             margin="normal"
//                             required
//                             fullWidth
//                             id="login"
//                             label="введите логин"
//                             name="login"
//                             autoComplete="login"
//                             autoFocus
//                         />
//                         <TextField
//                             variant="outlined"
//                             margin="normal"
//                             required
//                             fullWidth
//                             name="password"
//                             label="введите парол"
//                             type="password"
//                             id="password"
//                             autoComplete="current-password"
//                         />
//                         <FormControlLabel
//                             control={<Checkbox value="remember" color="primary" />}
//                             label="Запомните меня"
//                         />
//                         <Button
//                             type="submit"
//                             fullWidth
//                             variant="contained"
//                             color="primary"
//                             className={classes.submit}
//                         >
//                             Войти
//                         </Button>
//                         <Grid container>
//                             <Grid item xs>
//                                 <Link href="#" variant="body2">
//                                     Не могу войти
//                                 </Link>
//                             </Grid>
//                             <Grid item>
//                                 <Link href="register" variant="body2">
//                                     {"Регистрация"}
//                                 </Link>
//                             </Grid>
//                         </Grid>
//                         <Box mt={5}>
//                             <Copyright />
//                         </Box>
//                     </form>
//                 </div>
//             </Grid>
//         </Grid>
//     );
// }