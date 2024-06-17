import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <div className={css.container}>
            <ul className={css.friendList}>
                {friends.map(friend => (
                    <li key={friend.id} className={css.item}>
                        <FriendListItem friend={friend} />
                    </li>
                ))}
            </ul>
        </div>
    );
}