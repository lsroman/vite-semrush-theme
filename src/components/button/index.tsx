import ButtonSemRush, { type IButtonProps } from "@semcore/button";
import styles from "./button.shadow.css";

export function Button(props: IButtonProps) {
  return <ButtonSemRush styles={styles} {...props} />;
}
