# ¿De dónde sale `firebaseConfig`?

Ese objeto sale de aquí:

**Consola de Firebase (web)**  
https://console.firebase.google.com

Cuando haces esto:

- Creas un **proyecto Firebase**
- Dentro del proyecto, **registras una app web**
- Firebase te muestra un **bloque de configuración**

Ese bloque es exactamente el **`firebaseConfig`**

---

## Paso a paso

### 1️ Crear proyecto

En la consola de Firebase:

- Botón **“Añadir proyecto”**
- Le pones un nombre (ej. `fir-170db`)
- (Activar o no Analytics da igual para este punto)

➡️ Aquí se genera el **`projectId`**

---

### 2️ Añadir una aplicación web

Dentro del proyecto:

- Botón **</> Web**
- Nombre de la app (ej. *“mi-app-web”*)
- Firebase registra esa app dentro del proyecto

Aquí Firebase **genera automáticamente los identificadores**

---

### 3️ Firebase te da este código

Algo como:

```js
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};
```
Ese código lo copias y lo pegas en tu archivo JavaScript
(normalmente llamado `conexionFirebase.js` o `firebase.js`)

# ¿Qué es cada dato?

## apiKey
🔑 Identifica tu proyecto cuando una app se conecta.  
⚠️ **No es secreta**.

---

## authDomain
🌐 Dominio que usa Firebase para la **autenticación**  
(login con Google, email, etc.).

---

## projectId
🆔 Identificador único del proyecto Firebase.  
Es el **“nombre oficial”** del proyecto en Google.

---

## storageBucket
🪣 Lugar donde se guardan **archivos**  
(imágenes, PDFs, etc.).

---

## messagingSenderId
📨 Identificador interno relacionado con  
mensajería y notificaciones.

---

## appId
🆔 Identifica **esta app concreta** dentro del proyecto.  
(una app Android tendría otro distinto).

---

## measurementId
📊 Identificador de **Google Analytics**  
(solo existe si activas Analytics).
