import React from "react";
import styles from "../Style/PopUp.module.css";

const PopUp = ({ items }) => {
  return (
    <div className={styles.notifications_container}>
      <div className={styles.success}>
        <div className={styles.flex}>
          <div className={styles.flex_shrink_0}></div>
          <div className={styles.success_prompt_wrap}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p className={styles.success_prompt_heading}>{items.title}</p>
              <p className={styles.success_prompt_heading}>{items.duration}</p>
            </div>
            <div className={styles.success_prompt_prompt}>
              <p>{items.description}...</p>
            </div>
            <div className={styles.success_prompt_prompt}>
              <p>Cast: {items.cast ? items.cast : "NA"}</p>
            </div>
            <div className={styles.success_prompt_prompt}>
              <p>Director: {items.director ? items.director : "NA"}</p>
            </div>
            <div className={styles.success_prompt_prompt}>
              <p>{items.date_added}</p>
            </div>

            <div className={styles.success_prompt_prompt}>
              <p>{items.listed_in}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div className={styles.success_prompt_prompt}>
                <p>{items.rating}</p>
              </div>
              <div className={styles.success_prompt_prompt}>
                <p>{items.release_year}</p>
              </div>
            </div>

            <div className={styles.success_button_container}>
              <button type="button" className={styles.success_button_main}>
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
