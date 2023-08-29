import { tag_links } from '../../../data/tagLinks';
import Logo from '../../../assets/images/wons-logo.svg';
import Logout from '../../../assets/images/logout.svg';
import Avatar from '../../../assets/images/avatar.png';

import './LeftSidebar.css';
import TagList from '../../../components/TagList/TagList';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
    return (
        <aside className='left-sidebar'>
            <nav className='left-sidebar-nav'>
                <Link
                    className='logo'
                    to='/'
                >
                    <img
                        src={Logo}
                        alt='Wons'
                        className='logo-img'
                    />
                    <span className='logo-name'>WONS</span>
                </Link>
                <TagList tagLinks={tag_links} />
            </nav>
            <div className='logout'>
                <div className='lantern-wrapper'>
                    <button className='upgrade-btn'>Upgrade Now</button>
                </div>
                <div className='user'>
                    <img
                        src={Avatar}
                        alt='avatar'
                        className='user-avatar'
                    />
                    <div className='user-info'>
                        <span className='user-name'>Easin Arafat</span>
                        <div className='user-status'>Free Account</div>
                    </div>
                    <button className='logout-btn'>
                        <img
                            src={Logout}
                            alt='logout'
                            className='logout-icon'
                        />
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default LeftSidebar;
