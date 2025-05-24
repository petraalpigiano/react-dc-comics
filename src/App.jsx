import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Info from "./components/Info.jsx";
import Footer from "./components/Footer.jsx";
import Alert from "./components/Alert.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Alert>
        <ul>
          <li>Il fumetto non è piu in circolazione</li>
          <li>Se ne hai una copia potrebbe valere milioni</li>
          <li>Attento, i fan pazzi ti potrebbe entrare in casa!</li>
        </ul>
      </Alert>
      <Main />
      <Info />
      <Footer />
    </>
  );
}
