import React from "react"
import { NextPage } from "next"
import { Wrapper } from "../../components/Wrapper";
import { Form, Formik } from "formik";
import { InputField } from "../../components/InputField";
import { Box, Button } from "@chakra-ui/core";
import login from "../login";
import { toErrorMap } from "../../utils/toErrorMap";
import router from "next/router";

// @ts-ignore
export const ChangePassword: NextPage<{token: string}> = ({token}) => {
    return (
        <Wrapper variant="small">
            <Formik
                initialValues={{newPassword: ""}} 
                onSubmit={async (values, {setErrors}) => { 
                    // const response = await login(values);
                    // if (response.data?.login.errors) {
                    //     setErrors(toErrorMap(response.data.login.errors))
                    // } else if (response.data?.login.user) {
                    //     // if register worked
                    //     router.push("/")
                    // }
                }}
            >
                {({isSubmitting}) => (
                    <Form>
                        <InputField 
                            name="newPassword" 
                            placeholder="new password" 
                            label="New Password"
                            type="password"
                        />

                        <Button mt={4} type="submit" isLoading={isSubmitting} variantColor="teal">Change Password</Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    )
}

ChangePassword.getInitialProps = ({query}) => {
    return {
        token: query.token as string
    }
}

export default ChangePassword