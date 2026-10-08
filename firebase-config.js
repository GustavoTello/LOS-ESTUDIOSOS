// =======================================================
// 🔥 CONFIGURACIÓN DE FIREBASE PARA TIENDA VIRTUAL
// =======================================================

// Importar las funciones necesarias del SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-analytics.js";

// Configuración de tu proyecto Firebase
const firebaseConfig = {
  apiKey: "EL_APIKEY_ESCAPO",
  authDomain: "tienda-*****-883ef.firebaseapp.com",
  projectId: "tienda-**********",
  storageBucket: "tienda-*********************.app",
  messagingSenderId: "8*******85",
  appId: "EL_APPID_BUSCA_A_APIKEY"
};
// =======================================================
// 🚀 INICIALIZAR FIREBASE
// =======================================================
const app = initializeApp(firebaseConfig);
getAnalytics(app); // opcional: solo si usas Google Analytics

// =======================================================
// 📦 EXPORTAR INSTANCIA DE FIRESTORE
// =======================================================
export const db = getFirestore(app);
