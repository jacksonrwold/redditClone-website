import { Box, Button } from "@chakra-ui/core";
import { Form, Formik } from "formik";
import React, { useState } from "react"
import { InputField } from "../components/InputField";
import { Wrapper } from "../components/Wrapper";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import { useForgotPasswordMutation } from "../generated/graphql";


export const ForgotPassword: React.FC<{}> = ({}) => {
    const [complete, setComplete] = useState(false)
    const [,forgotPassword] = useForgotPasswordMutation()
    return (
        <Wrapper variant="small">
            <Formik 
                initialValues={{email: ""}} 
                onSubmit={async (values, {setErrors}) => { 
                    await forgotPassword(values);
                    setComplete(true)
                }}
            >
                {({isSubmitting}) => complete ? <Box>if an account with that email exists, we sent it an email</Box> : (
                    <Form>
                        <InputField 
                            name="email" 
                            placeholder="email" 
                            label="Email"
                            type="email"
                        />

                        <Button mt={4} type="submit" isLoading={isSubmitting} variantColor="teal">Forgot Password</Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>);
};

export default withUrqlClient(createUrqlClient)(ForgotPassword);