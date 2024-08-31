import s from "./FriendList.module.css";
import FriendListItem from "/src/components/FriendListItem/FriendListItem";

const FriendList = ({ friends }) => {
  return (
    <ul className={s.list}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
