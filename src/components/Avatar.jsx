import STYLES from "./Avatar.module.css";

export function Avatar({ avatarUrl, hasBorder = true }) {
  return (
    <img
      className={hasBorder ? STYLES.avatarWithBorder : STYLES.avatar}
      src={avatarUrl}
      alt="User profile picture"
    />
  );
}
