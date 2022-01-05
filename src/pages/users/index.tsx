import {
  Box,
  Button,
  Flex,
  Icon,
  Heading,
  Table,
  Thead,
  Tr,
  Checkbox,
  Th,
  Tbody,
  Text,
  Td,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import React from "react";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Pagination } from "../components/Pagination/Pagination";

export default function Users() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>

            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuários</Th>
                {!isWideVersion && <Th>Data de cadastro</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              {Array.from(Array(5).keys()).map((key) => (
                <Tr key={key}>
                  <Td px={["4", "4", "6"]}>
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Carlos Rossignolli</Text>
                      <Text fontWeight="sm" color="gray.300">
                        carlosvitorvigarani@hotmail.com
                      </Text>
                    </Box>
                  </Td>
                  {!isWideVersion && <Td>04 de Abril, 2021</Td>}
                  <Td>
                    {!isWideVersion && (
                      <Button
                        as="a"
                        size="sm"
                        fontSize="sm"
                        colorScheme="purple"
                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                      >
                        {isWideVersion}
                      </Button>
                    )}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
