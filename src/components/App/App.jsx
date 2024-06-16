import css from "./App.module.css"
import Profile from "../Profile/Profile.jsx";
import userData from "../../userData.json";

export default function App() {
    return (
        <div className={css.container}>
            <Profile userProfile={userData} />
        </div>
    );
}