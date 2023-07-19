import { Button, Flex, Text } from "arkyn_components";
import type { ButtonProps } from "arkyn_components/dist/types";

import { Bell, Settings, User } from "lucide-react";
import { headerContainer } from "../styles";
import { memo } from "react";

function BaseHeader() {
  const buttonCss: ButtonProps = { size: "sm", interiorSpace: 2 };
  const iconButtonCss = { size: 22, color: "var(--terceary-50)" };

  return (
    <header className={headerContainer}>
      <Text as="h1" font="code" fontWeight="bold" fontSize="lg">
        PokerScrum
      </Text>

      <Flex align="center" space={2}>
        <Button {...buttonCss}>
          <Bell {...iconButtonCss} />
        </Button>
        <Button {...buttonCss}>
          <Settings {...iconButtonCss} />
        </Button>
        <Button {...buttonCss}>
          <User {...iconButtonCss} />
        </Button>
      </Flex>
    </header>
  );
}

export const Header = memo(BaseHeader);
