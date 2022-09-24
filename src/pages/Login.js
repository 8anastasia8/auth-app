import LoginMedia from "../components/Login/LoginMedia";
import LoginForm from "../components/Login/LoginForm";
import SocialLogin from "../components/Login/SocialLogin";

export default function Login(){
    return(
        <div className='container'>
            <LoginMedia/>
            <LoginForm/>
            <SocialLogin/>
        </div>
    )
}