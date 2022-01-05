/* eslint-disable react/no-children-prop */
import { Box, Stack } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

export default function SideBarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink
          icon={RiDashboardLine}
          children="Dashboard"
          href="/dashboard"
        />
        <NavLink icon={RiContactsLine} children="Usuários" href="/users" />
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink
          icon={RiInputMethodLine}
          children="Formulários"
          href="/forms"
        />
        <NavLink
          icon={RiGitMergeLine}
          children="Automação"
          href="/automation"
        />
      </NavSection>
    </Stack>
  );
}
