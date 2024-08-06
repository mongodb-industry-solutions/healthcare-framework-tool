"use client";

import styles from "./userProfile.module.css";
import Button from "@leafygreen-ui/button";
import Login from "../login/Login";


const UserProfile = () => {

    return (
        <div>
            <div className={styles.profile}>
                <div className={styles.details}>
                <Login></Login>

                </div>
            </div>

        </div>
    );
};

export default UserProfile;