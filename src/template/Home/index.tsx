import {
    Password,
    Email,
    Visibility,
    VisibilityOff
} from '@mui/icons-material';
import { Button, Checkbox, InputAdornment, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import useAuth from 'hooks/useAuth';
import * as S from './styles';

const HomeTemplate = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = () => {
        try {
            login({ email, senha: password });
        } catch (e) {
            // eslint-disable-next-line no-console
            console.error(e);
        }
    };

    return (
        <S.Container>
            <S.Header>
                <S.Logo width="240px" height="160px" src="/images/logo.png" />
            </S.Header>
            <S.MainContainer>
                <S.Title>LOGIN</S.Title>
                <S.LoginContainer>
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
                        <S.RememberText>Lembrar dados de acesso</S.RememberText>
                    </S.RememberCheckbox>
                    <Button
                        size="large"
                        sx={{
                            width: '400px'
                        }}
                        variant="contained"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <S.SignUpText
                        onClick={() => {
                            router.push('/cadastro');
                        }}
                    >
                        Ainda não tem uma conta? Clique aqui para se cadastrar!
                    </S.SignUpText>
                </S.LoginContainer>
            </S.MainContainer>
        </S.Container>
    );
};

export default HomeTemplate;
