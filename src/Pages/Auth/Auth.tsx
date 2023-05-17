import './auth.css';

export default function Auth(){
    return (
        <div className='login-base'>
            <div className='login-dialog'>
                <div className='label'>
                    <h1 className='login-label'> Welcome to the </h1>
                    <h1 className='login-label big'>  whatsDown </h1>
                </div>
                <input placeholder='id' />
                <input placeholder='token' />
                <button> LOG IN </button>
            </div>  
        </div>
    );
}