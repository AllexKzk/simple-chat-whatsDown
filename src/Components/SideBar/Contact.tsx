import { Typography } from '@mui/material';
import './sidebar.css';
import { useNavigate } from 'react-router-dom';
import { IMessage } from '../../api/interfaces';

interface IContact{
    name: string
}

export default function Contact(props: IContact){
    const navigate = useNavigate();

    const openChat = () => {
        navigate(`/chat/${props.name}`);
    }
    
    return (
        <div id={props.name} className='contact' onClick={openChat}>
            <Typography variant='h6' noWrap>
                {props.name}
            </Typography>
        </div>
    );
}