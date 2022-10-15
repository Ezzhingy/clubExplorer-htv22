import './adminpage.css';
import { Link } from 'react-router-dom';

export const AdminPage = (props) => {
    return (
        <div className='adminpage-container'>
            <Link to='/' className='title'>Clubify</Link>
            <form className='admin-form'>
                <div className='input-container'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' required />
                </div>
                <div className='categories-container'>
                    <label className='categories-title'>Categories</label>
                    <div className='check-container'>
                        <label htmlFor='categories0'>Athletics</label>
                        <input type='checkbox' id='categories0' name='same-category' defaultChecked></input>
                    </div>
                    <div className='check-container'>
                        <label htmlFor='categories1'>Academic</label>
                        <input type='checkbox' id='categories1' name='same-category'></input>
                    </div>
                    <div className='check-container'>
                        <label htmlFor='categories2'>Arts</label>
                        <input type='checkbox' id='categories2' name='same-category'></input>
                    </div>
                    <div className='check-container'>
                        <label htmlFor='categories3'>Culture</label>
                        <input type='checkbox' id='categories3' name='same-category'></input>
                    </div>                      
                </div>
                <div className='members-container'>
                    <label className='members-title'>Number of Members</label>
                    <div className='radio-containers'>
                        <label htmlFor='members0'>Less than 25</label>
                        <input type='radio' id='members0' name='same-member' defaultChecked></input>
                    </div>
                    <div className='radio-containers'>
                        <label htmlFor='members1'>25-50</label>
                        <input type='radio' id='members1' name='same-member'></input>
                    </div>
                    <div className='radio-containers'>
                        <label htmlFor='members2'>50-75</label>
                        <input type='radio' id='members2' name='same-member'></input>
                    </div>
                    <div className='radio-containers'>
                        <label htmlFor='members3'>75-100</label>
                        <input type='radio' id='members3' name='same-member'></input>
                    </div>
                    <div className='radio-containers'>
                        <label htmlFor='members4'>Greater than 100</label>
                        <input type='radio' id='members4' name='same-member'></input>
                    </div>
                </div>
                <div className='input-container'>
                    <label htmlFor='email'>Email</label>
                    <input id='email' type='email' required></input>
                </div>
                <div className='input-container'>
                    <label htmlFor='phone-number'>Phone Number</label>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="phone-number" placeholder='123-456-7890' required></input>
                </div>
                <button>Add Club</button>
            </form>
        </div>
    )
}