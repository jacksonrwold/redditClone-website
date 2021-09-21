import React from "react"
import { withUrqlClient } from "next-urql"
import { createUrqlClient } from "../../utils/createUrqlClient"
import { useRouter } from "next/router";
import { usePostQuery } from "../../generated/graphql";
import { Layout } from "../../components/Layout";
import { Box, Heading } from "@chakra-ui/core";

const Post = ({}) => {
    const router = useRouter();
    const intId = typeof router.query.id === 'string' ? parseInt(router.query.id) : -1;
    const [{data, error, fetching}] = usePostQuery({
        pause: intId === -1,
        variables: {
            id: intId
        }
    })
    router.query.id
    
    if (fetching) {
        <Layout>
            Loading...
        </Layout>
    }
    
    if (error) {
        <Layout>
            {error.message}
        </Layout>
    }

    if (!data?.post) {
        return <Layout>
            <Box>could not find post</Box>
        </Layout>
    }

    return (
        <Layout>
            <Heading mb={4}>{data.post.title}</Heading>
            {data.post.text}
        </Layout>
    );
}

export default withUrqlClient(createUrqlClient, {ssr: true})(Post)