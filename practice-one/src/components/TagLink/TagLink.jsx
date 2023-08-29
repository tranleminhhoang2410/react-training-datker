import { NavLink } from 'react-router-dom';
import './TagLink.css';

const TagLink = ({ tagLink }) => {
    const { path, name, icon, activeIcon } = tagLink;

    return (
        <NavLink
            to={path}
            className={({ isActive }) => (isActive ? 'link__wrapper active' : 'link__wrapper')}
        >
            <img
                className='link__icon'
                src={icon}
                alt={name}
            />
            <figure className='link__icon-active-background'>
                <img
                    className='link__icon-active'
                    src={activeIcon}
                    alt={name}
                />
            </figure>
            <span className='link__name'>{name}</span>
        </NavLink>
    );
};

export default TagLink;
