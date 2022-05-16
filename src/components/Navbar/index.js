import './index.scss'
import { Link } from 'react-router-dom'
import THlogo from '../../assets/images/TH-Logo.PNG'

const Navbar = () => (
    <div className='nav-bar'>
        <Link className='avatar' to='/'>
            <img src={THlogo} alt="avatar" />
        </Link>
    </div>
)

export default Navbar