import { IconButton, Typography } from '@mui/material';
import './namebar.css';

//displays name of chat:
export default function NameBar(props: {contact: string}){
    return (
        <div className="name-bar">
            <Typography variant='h5' m='5px'>Contact: {props.contact}</Typography>
        </div>
    );
}