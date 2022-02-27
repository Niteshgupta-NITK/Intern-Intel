import React from "react";
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
} from "./SiginElements";

function SignIn() {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Dolla</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlfor="for">Email</FormLabel>
                            <FormInput type="email" required></FormInput>
                            <FormLabel htmlFor="for">Password</FormLabel>
                            <FormInput type="password" required></FormInput>
                            <FormButton type="submit">Continue</FormButton>
                            <Text>Forget password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default SignIn;
