import styles from "./GlowingCube.module.css";

const GlowingCube = () => {
  return (
    <div className={styles.margined}>
      <div className={styles.cube}>
        <div className={styles.top}></div>
        <div>
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 1 }}></span>
          <span style={{ "--i": 2 }}></span>
          <span style={{ "--i": 3 }}></span>
        </div>
      </div>
    </div>
  );
};

export default GlowingCube;
