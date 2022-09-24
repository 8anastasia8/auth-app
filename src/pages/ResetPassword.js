import ResetMedia from "../components/Reset/ResetMedia";
import ResetForm from "../components/Reset/ResetForm";
import BackToLoginPage from "../components/Reset/BackToLoginPage";

export default function ResetPassword(){
    return (
        <div className='container'>
            <ResetMedia/>
            <ResetForm/>
            <BackToLoginPage/>
        </div>
    )
}