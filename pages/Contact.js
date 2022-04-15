import { useState, useEffect } from "react";
import Sidebar from "../components/NavBar";
// import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div>
      <Sidebar />
      <div className="h-20"></div>
      <FormInput type="text" />
      {/* <div className={styles.container}>
        <h2>Contact Us</h2>
        <div className={styles.row100}>
          <div className={styles.col}>
            <div className={styles.inputBox}>
              <input type="text" name="" required="required"></input>
              <span className={styles.text}>First Name</span>
              <span className={styles.line}></span>
            </div>
          </div>

          <div className={styles.col}>
            <div className={styles.inputBox}>
              <input type="text" name="" required="required"></input>
              <span className={styles.text}>Last Name</span>
              <span className={styles.line}></span>
            </div>
          </div>

          <div className={styles.row100}>
            <div className={styles.col}>
              <div className={styles.inputBox}>
                <input type="text" name="" required="required"></input>
                <span className={styles.text}>Email</span>
                <span className={styles.line}></span>
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.inputBox}>
                <input type="text" name="" required="required"></input>
                <span className={styles.text}>Moblie</span>
                <span className={styles.line}></span>
              </div>
            </div>
          </div>

          <div className={styles.row100}>
            <div className={styles.col}>
              <div className={styles.inputBox}>
                <div className={styles.textBox}>
                  <textarea
                    className="outline-1 outline-black outline"
                    required="required"
                  ></textarea>
                  <span className={styles.text}>Type Your Message Here...</span>
                  <span className={styles.line}></span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.row100}>
            <div className={styles.col}>
              <input type="submit" value="Send"></input>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

const FormInput = (props) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div
      class="flex h-12 w-64 flex-col items-start justify-end p-2 bg-red-500"
      onClick={handleFocus}
    >
      <div class="text-lg text-teal-400">hello</div>
      <input
        type={props.type}
        class={
          "w-full border-0 bg-teal-400 outline-none transition-[height] duration-500 ease-in-out" +
          (isFocused ? " h-8" : " border-b-2")
        }
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
export default Contact;
