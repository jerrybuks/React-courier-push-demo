import { CourierProvider } from "@trycourier/react-provider";
import { Toast } from "@trycourier/react-toast";
import { Inbox } from "@trycourier/react-inbox";
import "./App.css";

const userId = Math.round(Math.random() * 10e16).toString(36);

function App({ children }) {
  return (
    <CourierProvider
      clientKey={process.env.REACT_APP_COURIER_CLIENT_KEY}
      userId={userId}
    >
      <Toast />
      <Inbox />
      {children}
    </CourierProvider>
  );
}

export default App;
