import React from "react";
import FriendListItem from "./FriendListItem";
import clsx from "clsx";
import s from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  console.log(friends);
  return (
    <div>
      <ul className={clsx(s.wrapper)}>
        {friends.map((item) => (
          <li>
            <FriendListItem
              key={item.id}
              avatar={item.avatar}
              name={item.name}
              isOnline={item.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
