import "./App.css";
import FriendList from "../FriendList/FriendList";
import friends from "/src/friends.json";
import Profile from "../Profile/Profile";
import userData from "/src/userData.json";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "/src/transactions.json";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;
