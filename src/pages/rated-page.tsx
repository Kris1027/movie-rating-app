import { LoginPage } from "./login-page";

export function RatedPage() {
  const isLogIn = Boolean(localStorage.getItem("guestSessionId"));

  return (
    <>
      {!isLogIn && (
        <p className="text-center">
          You are not logged in <br /> <LoginPage />
        </p>
      )}
    </>
  );
}
