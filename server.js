// Servidor proxy UTF-8 para metadatos de Fidelísima
import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint principal: /metadata
app.get("/metadata", async (req, res) => {
  try {
    const url = "https://st3.inkaniserver.net:2000/json/stream/8008";
    const response = await fetch(url);

    // Leer los bytes y decodificarlos como ISO-8859-1
    const buffer = await response.arrayBuffer();
    const text = new TextDecoder("iso-8859-1").decode(buffer);

    // Intentar parsear a JSON
    const data = JSON.parse(text);

    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.json(data);
  } catch (error) {
    console.error("❌ Error al obtener metadatos:", error.message);
    res.status(500).json({ error: "No se pudo obtener datos del servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Servidor proxy UTF-8 ejecutándose en puerto ${PORT}`);
});
