import s from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.profile}>
      <div className={s.profileInfo}>
        <img
          className={s.profileImage}
          src={image}
          alt="User avatar"
          width={120}
        />
        <p className={s.profileName}>{name}</p>
        <p className={s.profileTag}>@{tag}</p>
        <p className={s.profileLocation}>{location}</p>
      </div>

      <ul className={s.statsList}>
        <li className={s.statItem}>
          <span className={s.statLabel}>Followers</span>
          <span className={s.statValue}>{stats.followers}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.statLabel}>Views</span>
          <span className={s.statValue}>{stats.views}</span>
        </li>
        <li className={s.statItem}>
          <span className={s.statLabel}>Likes</span>
          <span className={s.statValue}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
