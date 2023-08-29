import TagLink from '../TagLink/TagLink';
import './TagList.css';
import { v4 as uuidv4 } from 'uuid';

const TagList = ({ tagLinks }) => {
    return (
        <ul className='tag-link-list'>
            {tagLinks.map((tagLink) => (
                <li
                    key={uuidv4()}
                    className='tag-link-item'
                >
                    <TagLink tagLink={tagLink} />
                </li>
            ))}
        </ul>
    );
};

export default TagList;
