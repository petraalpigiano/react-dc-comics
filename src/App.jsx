import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Info from "./components/Info.jsx";
import Footer from "./components/Footer.jsx";
import Alert from "./components/Alert.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Alert text="Messaggio di errore" />
      <Main />
      <Info />
      <Footer />
    </>
  );
}
