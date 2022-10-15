import './browsepage.css';
import { Link } from 'react-router-dom';

export const BrowsePage = (props) => {
    return (
        <div className='browse-container'>
            <Link to='/' className='title'>Clubify</Link>
        </div>
    )
}