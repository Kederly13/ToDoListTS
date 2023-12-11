import { uid } from 'uid';

import classes from './TagItems.module.sass';

interface ITagItems {
    tags: string[];
};

export const TagItems: React.FC<ITagItems> = ({ tags }) => (
    <ul className={classes.tagItems}>
        {tags.map((value) => (
            <li className={classes.tagItems__item} key={uid()}>
                {value}
            </li>
        ))}
    </ul>
);