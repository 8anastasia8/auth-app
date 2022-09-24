import {Link} from "react-router-dom";

export default function BackToLoginPage(){
    return (
        <div className='box-back-to-login'>
            <p className='secondary-txt'>Already have an account?</p>
            <p><Link to='/auth' className='box-reset-link'>Login here</Link></p>
        </div>
    )
}