import './index.scss';
import LogoS from '../../../assets/images/logo-pfp.png'

const Logo = () => {

    return (
        <div className='logo-container'>
            <img className='solid-logo' src ={LogoS} alt="A" />
        </div>
    )
}

export default Logo