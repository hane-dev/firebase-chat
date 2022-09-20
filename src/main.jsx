import React from "react";
import ReactDOM from "react-dom/client";
import { FirebaseAppProvider } from "reactfire";
import App from "./App";
import firebaseConfig from "./firebaseConfig";
import FirestoreComponents from "./utils/firebase/FirestoreComponents";
import './assets/app.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <FirestoreComponents>
        <App />
      </FirestoreComponents>
    </FirebaseAppProvider>
  </React.StrictMode>
);
