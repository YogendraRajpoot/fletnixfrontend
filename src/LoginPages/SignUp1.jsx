import React from "react";
import styles from "../Style/SignUp1.module.css";
import { Link, useNavigate } from "react-router-dom";
import { FooterComp } from "../components/FooterComp";
import { LOGO } from "../constant";

const SignUp1 = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={LOGO} alt="" />
        </div>
        <Link className={styles.signbtn} to="/login">
          Sign In
        </Link>
      </div>
      <div className={styles.middlebox}>
        <img src={LOGO} alt="" />
        <p>STEP 1 OF 3</p>
        <h2>Finish setting up your account</h2>
        <p>
          Netflix is personalised for you. Create a password to watch on any
          device at any time.
        </p>
        <button
          onClick={() => {
            navigate("/signup2");
          }}
        >
          Next
        </button>
      </div>
      <FooterComp />
    </div>
  );
};

export default SignUp1;
