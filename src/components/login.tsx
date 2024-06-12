import { Button } from "@/components/ui/button";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Login() {
  const guestSessionId = useActionData() as string;
  const navigate = useNavigate();

  useEffect(() => {
    if (guestSessionId) {
      localStorage.setItem("guestSessionId", guestSessionId);
      navigate("/", { replace: true });
    }
  }, [guestSessionId, navigate]);

  const logOut = () => {
    localStorage.removeItem("guestSessionId");
    navigate("/", { replace: true });
  };

  const isLogIn = Boolean(localStorage.getItem("guestSessionId"));

  return (
    <>
      <Form action="login" method="post">
        {!isLogIn && (
          <Button variant="destructive" type="submit">
            Log in as a guest
          </Button>
        )}
      </Form>
      {isLogIn && (
        <Button variant="destructive" onClick={logOut}>
          Log out
        </Button>
      )}
    </>
  );
}
