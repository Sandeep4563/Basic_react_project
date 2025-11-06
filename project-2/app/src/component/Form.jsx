import React from "react";
import styles from "./Form.module.css";
import Btn from "./Button";
import { MdMessage, MdPadding } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
const Form = () => {
  return (
    <div className={styles["main-content"]}>
      <div className={styles["form-btn"]}>
        <div className={styles.two_btn}>
          <Btn name="Via Support Chat" icon={<MdMessage />} />
          <Btn name="Via Call" icon={<IoCallSharp/>}/>
        </div>

        <Btn istrue={true} name="Via Email Form" icon={<MdMessage />} />
      </div>
      <form className={styles.form_sec}>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="email">Email</label>
          <input type="email" />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="textarea">Text</label>
          <textarea name="textarea"></textarea>
        </div>
      </form>
    </div>
  );
};

export default Form;
