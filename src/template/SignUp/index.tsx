import {
    Password,
    Email,
    Visibility,
    VisibilityOff,
    Person,
    Code,
    AccountBox,
    Image
} from '@mui/icons-material';
import { Button, Checkbox, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useRouter } from 'next/router';
import * as S from './styles';

const SignUpTemplate = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [username, setUsername] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const [value, setValue] = useState(0);

    const isDev = value === 1;

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const handleSignUp = () => {
        // eslint-disable-next-line no-console
        console.log(email, password, image, username, isDev);
    };

    const router = useRouter();

    return (
        <S.Container>
            <S.Header>
                <S.Logo width="240px" height="160px" src="/images/logo.png" />
            </S.Header>
            <S.MainContainer>
                <S.Title>CADASTRO</S.Title>
                <S.LoginContainer>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="icon tabs example"
                    >
                        <Tab
                            icon={<Person />}
                            aria-label="user"
                            label="Usuário"
                        />
                        <Tab
                            icon={<Code />}
                            aria-label="developer"
                            label="Desenvolvedor"
                        />
                    </Tabs>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Email"
                        fullWidth
                        size="medium"
                        color="primary"
                        onChange={(e) => setEmail(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Email />
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="input-with-icon-textfield"
                        label="Username"
                        fullWidth
                        size="medium"
                        color="primary"
                        onChange={(e) => setUsername(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountBox />
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="input-with-icon-textfield"
                        label="Imagem de Perfil"
                        fullWidth
                        size="medium"
                        color="primary"
                        onChange={(e) => setImage(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Image />
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="input-with-icon-textfield"
                        label="Senha"
                        type={showPassword ? 'text' : 'password'}
                        fullWidth
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Password />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    {showPassword ? (
                                        <VisibilityOff
                                            onClick={handleClickShowPassword}
                                        />
                                    ) : (
                                        <Visibility
                                            onClick={handleClickShowPassword}
                                        />
                                    )}
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                    />
                    <S.RememberCheckbox>
                        <Checkbox />
                        <S.RememberText>
                            Li e estou de acordo com os Termos de Uso de
                            Política de Privacidade
                        </S.RememberText>
                    </S.RememberCheckbox>
                    <Button
                        size="large"
                        sx={{
                            width: '400px'
                        }}
                        variant="contained"
                        onClick={handleSignUp}
                    >
                        Cadastre-se
                    </Button>
                    <S.SignUpText
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        Já tem uma conta? Clique aqui para fazer login!
                    </S.SignUpText>
                </S.LoginContainer>
            </S.MainContainer>
        </S.Container>
    );
};

export default SignUpTemplate;
