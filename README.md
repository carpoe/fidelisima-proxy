# Fidelísima Proxy UTF-8 🎧

Pequeño servidor en Node.js que actúa como *proxy* para los metadatos del streaming de Radio Fidelísima, corrigiendo tildes, ñ y otros caracteres al convertir de **ISO-8859-1 a UTF-8**.

## 🚀 Cómo desplegar en Render

1. Sube este repositorio a tu cuenta de GitHub (por ejemplo, `fidelisima-proxy`).
2. Ve a [https://render.com](https://render.com) → inicia sesión.
3. Clic en **New → Web Service**.
4. Conecta tu cuenta de GitHub y selecciona este repositorio.
5. Configura:
   - **Environment:** Node
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
6. Render generará una URL pública como:

   ```
   https://fidelisima-proxy.onrender.com/metadata
   ```

7. Usa esa URL en tu app Android en lugar del JSON original.
