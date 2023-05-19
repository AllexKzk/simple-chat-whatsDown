import {  useState } from 'react';
import './auth.css';
import { useNavigate } from 'react-router-dom';
import { send } from 'process';
import authUser from '../../api/authApi';
import { Alert, AlertColor } from '@mui/material';
import { IStateInstance, errHandlingMessage } from '../../api/interfaces';

interface IAuth{
    id: string, 
    token: string
}

interface IAlert{
    message: string,
    severity: AlertColor
}

export default function Auth(){
    const [inputData, setData] = useState<IAuth>({id: '', token: ''});
    const [alert, setAlert] = useState<IAlert | undefined>(undefined);
    const navigate = useNavigate();

    const sendData = () => {
        if (inputData.id.length && inputData.token.length){
            localStorage.setItem('id', inputData.id);           //store id
            localStorage.setItem('token', inputData.token);     //store token
            localStorage.setItem('story', JSON.stringify({}));  //prep story of messages

            authUser()
            .then((data: IStateInstance) => {                   //200
                setAlert({
                    message: 'Authorized',
                    severity: 'success'
                });
                navigate('/');                                  //go to chat
            })
            .catch((err: Error) => {                            //err
                const authHandling: errHandlingMessage = {      //with message == res.status
                    '401': 'Wrong id or token',
                    'Failed to fetch': 'Uncorrect format of data'
                }
                setAlert({
                    message: authHandling[err.message],
                    severity: 'error'
                });
            })
        }
    }

    return (
        <div className='login-base'>
            <div className='login-dialog'>
                <div className='label'>
                    <h1 className='login-label'> Welcome to the </h1>
                    <h1 className='login-label big'>  whatsDown </h1>
                </div>
                <input placeholder='id' onChange={(ev) => setData({...inputData, id: ev.target.value})}/>
                <input type='password' placeholder='token' onChange={(ev) => setData({...inputData, token: ev.target.value})} />
                {alert ? <Alert severity={alert?.severity}>{alert?.message}</Alert> : <></>}
                <button onClick={sendData}> LOG IN </button>
            </div>  
        </div>
    );
}