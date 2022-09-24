import resetPass from '../../media/resetImg.jpg';
import '../../styles/main.css'

export default function ResetMedia(){
    return (
        <div className='pages-media'>
            <img className='auth-img' src={resetPass} alt="forget-pass"/>
            <h1>Forgot Password</h1>
        </div>
    )
}