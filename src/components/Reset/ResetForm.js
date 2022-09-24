import '../../styles/main.css'
import {ReactComponent as User} from "../../media/user.svg";

export default function ResetForm() {
    return (
        <form className='box'>
            <div className='box-container'>
                <input placeholder='example@email.com' type="text" className='box-input'/>
                <User className='box-icon'/>
            </div>
            <button type='submit' className='box-submit-btn'>reset</button>
        </form>

    )
}