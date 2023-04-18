import React, { useState } from 'react';
import {
    Image,
    VideogameAsset,
    Save,
    AttachMoney,
    Event,
    Category
} from '@mui/icons-material';
import { Button, InputAdornment, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import MenuItem from '@mui/material/MenuItem';
import GameService from 'services/GameService';
import * as S from './styles';

interface NewGameModalProps {
    open: boolean;
    handleClose: () => void;
    dev_id: string;
}

const NewGameModal: React.FC<NewGameModalProps> = ({
    open,
    handleClose,
    dev_id
}) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [launchDate, setLaunchDate] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');

    const handlePost = () => {
        // eslint-disable-next-line no-console
        console.log(name, price, size, launchDate, category, image);
        GameService.publish({
            capa: image,
            categoria: category,
            data_lanc: launchDate,
            descricao: '',
            dev_id,
            nome_jogo: name,
            preco: price,
            tamanho: size
        });

        handleClose();
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <S.Wrapper>
                <S.ModalTitle>Cadastro de um Novo Jogo</S.ModalTitle>
                <S.ModalContent>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Nome"
                        fullWidth
                        size="medium"
                        color="primary"
                        onChange={(e) => setName(e.target.value)}
                        InputLabelProps={{
                            style: { color: '#fff' }
                        }}
                        sx={{
                            input: {
                                color: '#fff'
                            },
                            '& label.Mui-focused': {
                                color: 'white'
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'white'
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white'
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white'
                                }
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <VideogameAsset htmlColor="white" />
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="input-with-icon-textfield"
                        label="Preço"
                        fullWidth
                        size="medium"
                        color="primary"
                        type="number"
                        onChange={(e) =>
                            setPrice(Number.parseInt(e.target.value, 10))
                        }
                        InputLabelProps={{
                            style: { color: '#fff' }
                        }}
                        sx={{
                            input: {
                                color: '#fff'
                            },
                            '& label.Mui-focused': {
                                color: 'white'
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'white'
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white'
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white'
                                }
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AttachMoney htmlColor="white" />
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="input-with-icon-textfield"
                        label="Tamanho (em GigaBytes)"
                        fullWidth
                        size="medium"
                        color="primary"
                        type="number"
                        onChange={(e) =>
                            setSize(Number.parseInt(e.target.value, 10))
                        }
                        InputLabelProps={{
                            style: { color: '#fff' }
                        }}
                        sx={{
                            input: {
                                color: '#fff'
                            },
                            '& label.Mui-focused': {
                                color: 'white'
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'white'
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white'
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white'
                                }
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Save htmlColor="white" />
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="input-with-icon-textfield"
                        label="Data de Lançamento"
                        fullWidth
                        size="medium"
                        color="primary"
                        type="date"
                        onChange={(e) => setLaunchDate(e.target.value)}
                        InputLabelProps={{
                            style: { color: '#fff' }
                        }}
                        sx={{
                            input: {
                                color: '#fff'
                            },
                            '& label.Mui-focused': {
                                color: 'white'
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'white'
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white'
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white'
                                }
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Event htmlColor="white" />
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                    />
                    <TextField
                        id="input-with-icon-textfield"
                        label="Categoria"
                        fullWidth
                        size="medium"
                        color="primary"
                        select
                        onChange={(e) => setCategory(e.target.value)}
                        InputLabelProps={{
                            style: { color: '#fff' }
                        }}
                        sx={{
                            input: {
                                color: '#fff'
                            },
                            select: {
                                border: '1px solid white',
                                color: '#fff',
                                '& .MuiSvgIcon-root': {
                                    color: 'white'
                                }
                            },
                            color: 'white',
                            '& label.Mui-focused': {
                                color: 'white'
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'white'
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white'
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white'
                                }
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Category htmlColor="white" />
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                    >
                        <MenuItem value="fps">Shooters</MenuItem>
                        <MenuItem value="mmo">MMO</MenuItem>
                        <MenuItem value="sandbox">Sandbox</MenuItem>
                        <MenuItem value="sandbox">RPG</MenuItem>
                        <MenuItem value="simulation">
                            Simulation and sports
                        </MenuItem>
                        <MenuItem value="rts">Real-time strategy</MenuItem>
                        <MenuItem value="moba">
                            Multiplayer online battle arena
                        </MenuItem>
                        <MenuItem value="puzzles">
                            Puzzlers and party games
                        </MenuItem>
                        <MenuItem value="adventure">Action-adventure</MenuItem>
                        <MenuItem value="survival">
                            Survival and horror
                        </MenuItem>
                    </TextField>
                    <TextField
                        id="input-with-icon-textfield"
                        label="Imagem"
                        fullWidth
                        size="medium"
                        color="primary"
                        onChange={(e) => setImage(e.target.value)}
                        InputLabelProps={{
                            style: { color: '#fff' }
                        }}
                        sx={{
                            input: {
                                color: '#fff'
                            },
                            '& label.Mui-focused': {
                                color: 'white'
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'white'
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white'
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white'
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white'
                                }
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Image htmlColor="white" />
                                </InputAdornment>
                            )
                        }}
                        variant="outlined"
                    />
                    <Button
                        size="large"
                        sx={{
                            width: '400px'
                        }}
                        variant="contained"
                        onClick={handlePost}
                    >
                        Publique seu Jogo
                    </Button>
                </S.ModalContent>
            </S.Wrapper>
        </Modal>
    );
};

export default NewGameModal;
