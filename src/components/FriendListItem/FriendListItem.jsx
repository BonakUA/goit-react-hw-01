import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
    const statusClasses = clsx(css.text, isOnline ? css.isActive : css.isRetired);
    return (
        <div>
            <img className={css.avatar} src={avatar} alt="User avatar" width="100" />
            <p className={css.text}>{name}</p>
            <p className={statusClasses}>{isOnline ? 'Online' : 'Offline'}</p>
        </div>
    );
}