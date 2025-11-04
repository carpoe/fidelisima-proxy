import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/metadata", async (req, res) => {
  try {
    const response = await fetch("https://st3.inkaniserver.net:2000/json/stream/8008");
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error al obtener metadatos:", error);
    res.status(500).json({ error: "No se pudo obtener datos del servidor" });
  }
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
