import { Form, useActionData, useNavigation } from "@remix-run/react";
import { Button, Flex, Input, Text } from "arkyn_components";

export function SignInForm() {
  const actionData = useActionData();
  const { state } = useNavigation();

  return (
    <Flex
      interiorSpace={12}
      direction="column"
      radii="sm"
      space={10}
      width={450}
      bg="var(--terceary-900)"
    >
      <Form method="POST" style={{ flex: 1 }}>
        <Flex space={3} direction="column">
          <Input
            placeholder="Email"
            name="email"
            defaultValue={actionData?.fields?.email}
            error={actionData?.fieldErrors?.email}
          />

          <Input
            placeholder="Password"
            name="password"
            type="password"
            defaultValue={actionData?.fields?.password}
            error={actionData?.fieldErrors?.password}
          />

          <Text
            as="link"
            fontSize="sm"
            href="/forgot"
            hoverStyle="underline"
            style={{
              width: "min-content",
              whiteSpace: "nowrap",
              color: "var(--primary-500)",
            }}
          >
            Forgot my password
          </Text>

          <Button name="_action" value="sign-in" isLoading={state !== "idle"}>
            Enter
          </Button>
        </Flex>
      </Form>

      <Flex align="center" justify="center" space={1}>
        <Text as="p">Don't have an account?</Text>
        <Text
          as="link"
          href="/signup"
          hoverStyle="underline"
          style={{
            width: "min-content",
            whiteSpace: "nowrap",
            color: "var(--primary-500)",
          }}
        >
          Create now!
        </Text>
      </Flex>
    </Flex>
  );
}
