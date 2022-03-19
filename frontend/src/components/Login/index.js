import React, { useState } from "react";
import {
    FormButton,
    FormContent,
    FormH1,
    FormInput,
    FormLabel,
    FormWrap,
    Icon,
    Form,
    Text,
    Container,
} from "./LoginElements";

import axios from "axios";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function postSignIn(e) {
        e.preventDefault();

        try {
            await axios({
                method: "post",
                url: "http://localhost:3001/users",
                data: {
                    email: username,
                    password: password,
                },
            }).then((res) => {
                alert(`Account Created Successfully!!`);
            });
        } catch (err) {
            alert("Bad request!!");
        }
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Intern Intel</Icon>
                    <FormContent>
                        <Form action="#" onSubmit={postSignIn}>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlfor="for">Email</FormLabel>
                            <FormInput
                                type="email"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            ></FormInput>
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            ></FormInput>
                            <FormButton type="submit">Continue</FormButton>
                        </Form>
                        <Text>Forget password</Text>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default Login;
