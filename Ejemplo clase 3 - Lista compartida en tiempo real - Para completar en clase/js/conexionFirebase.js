"use strict";

// Importamos las funciones básicas de Firebase desde la CDN.
// initializeApp → sirve para arrancar/conectar nuestra aplicación con Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

// Importamos el módulo de autenticación.
// Aunque en este ejemplo no lo usemos aún, nos permite identificar usuarios
import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Importamos Analytics (opcional).
// Firebase puede registrar estadísticas de uso de la aplicación
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";

// Configuración del proyecto Firebase.
// Estos datos identifican nuestro proyecto en la nube.
// NO son secretos: la seguridad real se gestiona con las reglas de Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyBIBB1u1CkFEKSZgSYxro96p59kmxFVr8c",
  authDomain: "fir-170db.firebaseapp.com",
  projectId: "fir-170db",
  storageBucket: "fir-170db.firebasestorage.app",
  messagingSenderId: "509650969213",
  appId: "1:509650969213:web:d6d9d2609e500fae500714",
  measurementId: "G-B1ZPK42LLF",
};

// Inicializamos Firebase usando la configuración anterior.
// A partir de aquí, la aplicación queda conectada al proyecto Firebase
const app = initializeApp(firebaseConfig);

// Inicializamos el sistema de autenticación asociado a esta app.
// Permite gestionar usuarios (login, logout, etc.)
const autentificacion = getAuth(app);

// Exportamos la app y la autenticación para poder usarlas en otros archivos.
// Por ejemplo, para acceder a Firestore o comprobar usuarios logueados
export { app, autentificacion };
