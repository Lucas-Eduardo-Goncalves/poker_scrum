import { Form, useActionData, useNavigation } from "@remix-run/react";
import { Button, Flex, Input } from "arkyn_components";

export function SignUpForm() {
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
      <Form method="post" style={{ flex: 1 }}>
        <Flex space={3} direction="column">
          <Input
            placeholder="Name"
            name="name"
            error={actionData?.fieldErrors?.name}
          />

          <Input
            placeholder="Email"
            name="email"
            error={actionData?.fieldErrors?.email}
          />

          <Input
            placeholder="Password"
            name="password"
            type="password"
            error={actionData?.fieldErrors?.password}
          />

          <Input
            type="password"
            placeholder="Confirm your password"
            name="confirm_password"
            error={actionData?.fieldErrors?.confirm_password}
          />

          <Button name="_action" value="signup" isLoading={state !== "idle"}>
            Create
          </Button>
        </Flex>
      </Form>
    </Flex>
  );
}
