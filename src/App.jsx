import "./App.css";
import FriendList from "./components/FriendList/FriendList";
import Profile from "./components/Profile/Profile";
import userData from "./userData.json";
import friends from "./friends.json";
import transactionData from "./transactionsData.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

function App() {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.image}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactionData} />
    </>
  );
}

export default App;
