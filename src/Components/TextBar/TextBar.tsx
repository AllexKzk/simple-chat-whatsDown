import TextArea from './TextArea';
import SendIcon from '@mui/icons-material/Send';
import './textbar.css';
import { IconButton } from '@mui/material';

export default function TextBar(){

    return (
        <div className='text-bar'>
            <TextArea/>
            <IconButton>
                <SendIcon/>
            </IconButton>
        </div>
    );
}