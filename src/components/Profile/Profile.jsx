import css from './Profile.module.css';

export default function Profile({
    userProfile: { username, tag, location, avatar,
        stats: { followers, views, likes } } }) {
    return (
        <div className={css.container}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt="User avatar"
                    width={200}
                    height={200}
                    className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tagLocation}>@{tag}</p>
                <p className={css.tagLocation}>{location}</p>
            </div>
            <ul className={css.stats}>
                <li className={css.statsLi}>
                    <span className={css.label}>Followers</span>
                    <span className={css.quantity}>{followers}</span>
                </li>
                <li className={css.statsLi}>
                    <span className={css.label}>Views</span>
                    <span className={css.quantity}>{views}</span>
                </li>
                <li className={css.statsLi}>
                    <span className={css.label}>Likes</span>
                    <span className={css.quantity}>{likes}</span>
                </li>
            </ul>
        </div> 
    )
}