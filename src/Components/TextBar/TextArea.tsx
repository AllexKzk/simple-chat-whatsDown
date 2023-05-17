import { TextareaAutosize } from '@mui/material';
import './textbar.css';

export default function TextArea() {
    return (
        <div className='textarea-base'>
            <TextareaAutosize maxRows={4} placeholder='Input...'/>
        </div>
    );
}