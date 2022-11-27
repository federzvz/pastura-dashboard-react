import * as React from 'react';
import { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import "./style.css";
import { Menu } from 'react-admin';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
const MyLoginPage = ({ theme }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();

    const handleSubmit = e => {
        e.preventDefault();
        login({ username, password }).catch(() =>
            notify('Usuario o contraseña invalido')
        );
    };

    return (
        <div className="container">
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
                integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
                crossorigin="anonymous"
            />
            <div className="form-box">
                <div className="header-form">
                    <h4 className="text-primary text-center">
                        {/* <i className="fa fa-user-circle" style={{fontSize:"110px"}}></i> */}
                        {/* <FontAwesomeIcon icon="fa-solid fa-user" size="6x"/> */}
                        <AccountCircleIcon fontSize='inherit'
                            style={{
                                height: "7em",
                                width: "7em"
                            }}
                        />
                    </h4>
                    <div className="image">
                    </div>
                </div>
                <div className="body-form">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    {/* <i class="fa fa-user"></i> */}

                                    <PersonIcon viewBox="0 0 28 28" />
                                </span>
                            </div>
                            <input type="text" name="username" className="form-control" placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)}/>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    {/* <i class="fa fa-lock"></i> */}
                                    <LockIcon viewBox="0 0 28 28" />
                                </span>
                            </div>
                            <input type="password" name="password" className="form-control" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-secondary btn-block" style={{width: '100%'}}>INGRESAR</button>
                        <div className="message" style={{alignSelf: 'center'}}>
                            {/* <div><input type="checkbox" /> Remember ME</div> */}
                            <Menu>
                                <Menu.Item to="/pasturas" primaryText="Ingresar como invitado" style={{color: 'white'}}/>
                            </Menu>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default MyLoginPage;