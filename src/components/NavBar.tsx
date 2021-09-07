import { Box, Button, Flex, Link } from "@chakra-ui/core"
import NextLink from "next/link"
import { useMeQuery } from "../generated/graphql"

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{data, fetching}] = useMeQuery()
    let body = null

    // loading
    if (fetching) {
        
    // user not logged in 
    } else if (!data?.me) {
        body = (
            <Box>
                <NextLink href="/login">
                    <Link color="black" mr={2}> Login </Link>
                </NextLink>

                <NextLink href="/register">
                    <Link color="black"> Register </Link>
                </NextLink>
            </Box>
        )

    // user is logged in    
    } else {
        body = (
            <Box>
                <Flex>
                    <Box mr={2}>
                        {data.me.username}
                    </Box>
                    <Button variant="link"> Logout </Button>
                </Flex>
            </Box>
        )
    }

    return (
        <Flex bg="tomato" p={4}>
            <Box ml={"auto"}>
                {body}
            </Box>
        </Flex>
    )
}