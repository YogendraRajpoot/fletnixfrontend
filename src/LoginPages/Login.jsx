import { CircularProgress } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../Style/Login.module.css";
import {
  get_signin_error,
  get_signin_loading,
  userlogin,
} from "../Redux-Store/Home/Action";
import { BACKENDURL, LOGO } from "../constant";

const Login = () => {
  const initState = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = React.useState(initState);
  // const userData = useSelector((state) => state.userData)
  const { signin_loading, signin_error } = useSelector((state) => ({
    signin_loading: state.signin_loading,
    signin_error: state.signin_error,
  }));

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value } = e.currentTarget;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.password === "") {
      alert("Fill the Credential");
    }
    dispatch(get_signin_loading(true));
    dispatch(get_signin_error(false));
    fetch(`${BACKENDURL}/api/auth/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => {
        setFormData(initState);
        if (res.token) {
          dispatch(userlogin(res.token));
          JSON.stringify(res.token);
          localStorage.setItem("token", res.token);
          navigate("/homepage");
        } else {
          navigate("/");
          alert(res.error);
        }
      })
      .catch((err) => {
        setFormData(initState);
        console.log(err);
        navigate("/");
        dispatch(get_signin_error(false));
      })
      .finally(() => {
        dispatch(get_signin_loading(false));
      });
  };

  if (signin_loading)
    return (
      <div
        style={{
          width: "100px",
          margin: "auto",
          marginTop: "20%",
        }}
      >
        {" "}
        <CircularProgress style={{ height: "200px", width: "200px" }} />
      </div>
    );
  else if (signin_error) return <h1>Something Went Wrong</h1>;
  else
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={LOGO} alt="" />
        </div>
        <div className={styles.loginbox}>
          <form action="post" onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <input
              className={styles.loginbox_input}
              type="email"
              placeholder="Email or phone number"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              className={styles.loginbox_input}
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <input className={styles.signIn} type="submit" value="Sign In" />
          </form>
        </div>
        <div className={styles.footer}>
          <p>Questions? Call 000-800-040-1843</p>
          <div className={styles.links}>
            <div>
              <p>FAQ</p>
              <p>Cookie Preferences</p>
            </div>
            <div>
              <p>Help Centre</p>
              <p>Corporate Information</p>
            </div>
            <div>
              <p>Terms of Use</p>
            </div>
            <div>
              <p>Privacy</p>
            </div>
          </div>
          <select name="" id="">
            <option value="">English</option>
            <option value="">हिन्दी </option>
          </select>
        </div>
      </div>
    );
};

export default Login;
