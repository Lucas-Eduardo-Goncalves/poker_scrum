import { Flex, Text } from "arkyn_components";
import type { TextProps } from "arkyn_components/dist/types";

import logoSVG from "~/client/assets/logo.svg";

export function SignUpHero() {
  const linkStyle: TextProps = {
    as: "link",
    hoverStyle: "underline",
    style: {
      display: "inline",
      width: "min-content",
      whiteSpace: "nowrap",
      color: "var(--primary-500)",
    },
  };

  return (
    <Flex direction="column" space={4}>
      <Flex align="center" space={6} style={{ marginBottom: 50 }}>
        <img src={logoSVG} alt="PokerScrum LOGO" style={{ width: 60 }} />
        <Text as="h1" fontSize="4xl">
          Poker Scrum
        </Text>
      </Flex>

      <Text as="p" style={{ color: "var(--terceary-300)" }}>
        By registering, you accept our{" "}
        <Text href="/term-of-use" {...linkStyle}>
          terms of use
        </Text>
        <br /> and our{" "}
        <Text href="/privacy-policy" {...linkStyle}>
          privacy policy
        </Text>
        .
      </Text>

      <Text href="/" {...linkStyle}>
        Back to Log in!
      </Text>
    </Flex>
  );
}
