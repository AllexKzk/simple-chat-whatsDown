import { IconButton, Typography } from '@mui/material';
import './namebar.css';

export default function NameBar(props: {contact: string}){
    return (
        <div className="name-bar">
            <Typography variant='h5' m='5px'>Contact: {props.contact}</Typography>
        </div>
    );
}