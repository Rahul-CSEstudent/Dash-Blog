import React from 'react';
import styles from "./Contact.module.css"


const contact = () => {
  return (
      <div className= {styles.body}>
    <div className= {styles.container}>
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
            <div className={styles.textBox}><textarea className='outline-1 outline-black outline' required="required"></textarea>
            <span className={styles.text}>Type Your Message Here...</span>
            <span className={styles.line}></span>
            </div>
        </div>
    </div>
    </div>

    <div className={styles.row100}>
        <div className={styles.col}>
            <input type='submit' value="Send"></input>
        </div>
    </div>
    </div>

</div>
</div>


  )
}

export default contact