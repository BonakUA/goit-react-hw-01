import css from "./App.module.css"
import Profile from "../Profile/Profile.jsx";
import userData from "../../userData.json";
import FriendList from "../FriendList/FriendList.jsx";
import friends from "../../friends.json"

export default function App() {
    return (
        <div className={css.container}>
            <Profile userProfile={userData} />
            <FriendList friends={friends} />
        </div>
    );
}