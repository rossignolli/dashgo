import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface IProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData }: IProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Carlos Vitor Vigarani Rossignolli</Text>
          <Text color="gray.300" fontSize="small">
            carlosvitorvigarani@hotmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" src="https://github.com/rossignolli.png" />
    </Flex>
  );
}
