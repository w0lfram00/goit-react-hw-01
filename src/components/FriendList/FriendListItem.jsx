import React from "react";
import s from "./FriendList.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={clsx(s.card)}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={clsx(isOnline ? s.online : s.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
