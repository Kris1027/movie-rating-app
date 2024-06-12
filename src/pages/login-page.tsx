import { Button } from "@/components/ui/button";
import { Form, useActionData, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function LoginPage() {
  const guestSessionId = useActionData() as string;
  const navigate = useNavigate();

  useEffect(() => {
    if (guestSessionId) {
      localStorage.setItem("guestSessionId", guestSessionId);
      navigate("/");
    }
  }, [guestSessionId, navigate]);

  const logOut = () => {
    localStorage.removeItem("guestSessionId");
    navigate("/");
  };

  const isLogIn = Boolean(localStorage.getItem("guestSessionId"));

  return (
    <div className="flex gap-4">
      <Form action="/login" method="post">
        {!isLogIn && <Button type="submit">Log in as a guest</Button>}
      </Form>
      {isLogIn && <Button onClick={logOut}>Log out</Button>}
    </div>
  );
}
