import STYLES from "./Avatar.module.css";
import { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...rest }: AvatarProps) {
  return (
    <img
      className={hasBorder ? STYLES.avatarWithBorder : STYLES.avatar}
      {...rest}
    />
  );
}
