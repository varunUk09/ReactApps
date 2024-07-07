import { useRouteError } from "react-router-dom";
import Layout from "../Components/Layout";

export default function ErrorPage() {
  const error = useRouteError();
  const erroPageLayout = (
    <>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </>
  );
  return <Layout children={erroPageLayout} id={"errorPage"} />;
}
