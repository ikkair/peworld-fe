import { Html, Head, Script } from "next/document";
import "../styles/global.css"
// import "bootstrap/dist/css/bootstrap.css"
// import "bootstrap/dist/js/bootstrap.js"

export default function App({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}
