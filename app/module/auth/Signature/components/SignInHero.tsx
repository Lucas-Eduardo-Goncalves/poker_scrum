import { Flex, Text } from "arkyn_components";
import logoSVG from "~/client/assets/logo.svg";

export function SignInHero() {
  return (
    <Flex align="center" space={6}>
      <img src={logoSVG} alt="PokerScrum LOGO" style={{ width: 60 }} />
      <Text as="h1" fontSize="4xl">
        Poker Scrum
      </Text>
    </Flex>
  );
}
