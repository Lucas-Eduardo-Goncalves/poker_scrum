import { Button, Flex, Input, Text } from "arkyn_components";
import {
  Form,
  useActionData,
  useLocation,
  useNavigate,
  useNavigation,
} from "@remix-run/react";
import { viewStyle } from "./styles";

export function View() {
  const actionData = useActionData();
  const { state } = useNavigation();

  const navigate = useNavigate();

  const { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const sendEmail = searchParams.get("email") || null;

  return (
    <main className={viewStyle}>
      <Flex
        interiorSpace={12}
        direction="column"
        radii="sm"
        space={6}
        width={480}
        bg="var(--terceary-900)"
      >
        {sendEmail && (
          <>
            <Text as="h1" fontSize="lg" style={{ textAlign: "center" }}>
              We've sent a verification email to:
              <Text
                as="span"
                font="code"
                fontWeight="bold"
                style={{ color: "var(--primary-500)" }}
              >
                {sendEmail}
              </Text>
            </Text>

            <Flex direction="column" space={2}>
              <Text as="p">
                Write the code received by email in the field below. <br />
              </Text>
              <Text as="p">
                If you haven't received the email, check your spam folder!
              </Text>
            </Flex>

            <Form method="POST">
              <Flex direction="column" space={3}>
                <Input
                  name="code"
                  placeholder="Your code received"
                  error={actionData?.fieldErrors?.code}
                />

                <Button
                  name="_action"
                  value="verifyAccount"
                  isLoading={state !== "idle"}
                >
                  Send
                </Button>
              </Flex>
            </Form>
          </>
        )}

        {!sendEmail && (
          <>
            <Text as="h1" fontSize="lg" style={{ textAlign: "center" }}>
              This URL is broken
            </Text>

            <Button onClick={() => navigate("/")}>Back to login</Button>
          </>
        )}
      </Flex>
    </main>
  );
}
