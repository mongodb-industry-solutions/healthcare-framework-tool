
"use client";


import { useState } from "react";

import Image from "next/image";
import Button from "@leafygreen-ui/button";
import Modal from "@leafygreen-ui/modal";
import TextInput from "@leafygreen-ui/text-input";
import { PasswordInput } from "@leafygreen-ui/password-input";
import {
    H1,
    H2,
    H3,
    Body,
    Subtitle,
    Description
} from "@leafygreen-ui/typography";

const Login = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Button onClick={() => setOpen((o) => !o)}>Log In</Button>
            <Modal open={open} setOpen={setOpen} size="medium">
                <TextInput
                    label="Email Address"
                    placeholder="Placeholder"
                />

                <PasswordInput
                    label="New password"
                    stateNotifications={[
                        {
                            notification: "i'm an error",
                            state: "error"
                        },
                        {
                            notification: "i'm a warning",
                            state: "warning"
                        },
                        {
                            notification: "i'm valid",
                            state: "valid"
                        },
                        {
                            notification: "i'm waiting",
                            state: "none"
                        }
                    ]}
                    autoComplete="new-password"
                    id="new-password"
                    onChange={() => console.log("onChange callback")}
                />

                <Button variant="primary">Submit</Button>
            </Modal>
        </div>
    );
};

export default Login;