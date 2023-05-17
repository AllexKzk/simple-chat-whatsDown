import { Typography } from '@mui/material';
import './sidebar.css';

interface IContact{
    name: string
}

export default function Contact(props: IContact){
    return (
        <div className='contact'>
            <Typography variant='h6' noWrap>
                {props.name}
            </Typography>
        </div>
    );
}