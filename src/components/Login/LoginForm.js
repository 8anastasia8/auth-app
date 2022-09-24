import '../../styles/main.css'
import {ReactComponent as User} from "../../media/user.svg";
import {ReactComponent as Lock} from "../../media/lock.svg";
import {Link} from "react-router-dom";

export default function LoginForm() {
    return (
        <form className='box'>
            <div className='box-container'>
                <input placeholder='example@email.com' type="text" className='box-input'/>
                <User className='box-icon'/>
            </div>
            <div className='box-container'>
                <input placeholder='password' type="password" className='box-input'/>
                <Lock className='box-icon'/>
            </div>
            <Link to='/auth/reset' type='button' className='box-reset-link'>Forgot Password?</Link>
            <button type='submit' className='box-submit-btn'>log in</button>
        </form>

    )
}