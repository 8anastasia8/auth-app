import '../../styles/main.css'

export default function SocialLogin() {
    return (
        <div className='social-login-box'>
            <p className='secondary-txt login-txt'>Or connect with social</p>
            <div className='social-btns'>
                <button className='social-login-btn'>Facebook</button>
                <button className='social-login-btn'>Google</button>
            </div>
        </div>
    )
}