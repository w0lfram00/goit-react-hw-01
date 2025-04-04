import React from "react";
import s from "./Profile.module.css";
import clsx from "clsx";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(s.card)}>
      <div className={clsx(s.description)}>
        <img src={image} alt="User avatar" />
        <p className={clsx(s.name)}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={clsx(s.stats)}>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
