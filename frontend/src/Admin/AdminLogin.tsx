import React, {useState} from 'react';
import "../Intro/Intro.css";
import {useNavigate} from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
} from 'mdb-react-ui-kit';
import {Button} from "@mui/material";

export const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_email: username,
                    user_password: password,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                navigate('/admin/dashboard');
            } else {
                setErrorMessage(data.message || 'Erreur de connexion');
            }
        } catch (error) {
            setErrorMessage('Une erreur est survenue lors de la connexion');
        }
    };

    return (
        <MDBContainer fluid style={{height: '100vh'}} className="intro">

            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>
                    <MDBCard className='bg-white my-3 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px', zIndex:'1'}}>
                        <MDBCardBody className='p-2 w-100 d-flex flex-column'>
                            <h2 className="fw-bold my-3 text-center text-black">Connexion au CMS</h2>
                            {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
                            <form className="my-2" onSubmit={handleLogin}>
                                <input
                                    className="my-3 form-control"
                                    type="text"
                                    placeholder="Email"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <input
                                    className="mt-3 form-control"
                                    type="password"
                                    placeholder="Mot de passe"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <Button
                                    type="submit"
                                    sx={[{
                                        bgcolor: "var(--theme-lighter-text)",
                                        width:"50%",
                                        height: "5vh",
                                        margin:"2.5vh 25% 0 25%",
                                        borderRadius: "7px",
                                        color: "var(--important-text)!important",
                                    },
                                        (theme) => ({
                                            '&:hover': {
                                                color: "var(--important-text)!important",
                                                border:"2px solid var(--theme-lighter-text)",
                                                margin: "2.25vh 25% -.25vh 25%",
                                                height: "5.5vh",
                                            },
                                        }),
                                    ]}>
                                    Se connecter
                                </Button>
                            </form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};
