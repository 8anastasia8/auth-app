import loginImg from '../../media/loginImg.jpg';
import '../../styles/main.css'

export default function LoginMedia() {
    return (
        <div className='pages-media'>
            <img className='auth-img' src={loginImg} alt="login"/>
            <h1 className='login-title'>Welcome Back!</h1>
        </div>
    )
}