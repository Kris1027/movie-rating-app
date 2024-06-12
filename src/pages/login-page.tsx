import { Button } from "@/components/ui/button";
import { Form, useActionData } from "react-router-dom";
import { useEffect } from "react";

export function LoginPage() {
  const guestSessionId = useActionData() as string;

  useEffect(() => {
    if (guestSessionId) {
      localStorage.setItem("guestSessionId", guestSessionId);
    }
  }, [guestSessionId]);

  const logOut = () => {
    localStorage.removeItem("guestSessionId");
  };

  return (
    <div className="flex gap-4">
      <Form action="/login" method="post">
        <Button type="submit">Log in as a guest</Button>
      </Form>
      <Button onClick={logOut}>Log out</Button>
    </div>
  );
}
