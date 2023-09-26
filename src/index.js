require("dotenv").config();
const express = require("express");
const app = express();
const instanciaAxios = require("./axios");
const PORT = process.env.PORTA || 3000;

app.use(express.json());

app.get("/posts", async (req, res) => {
  try {
    const { data } = await instanciaAxios.get("https://jsonplaceholder.typicode.com/posts");

    return res.json(data);
  } catch (error) {
    return res.status(500).json({ Mensagem: "Erro interno de servidor!" });
  }
});
app.get("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const { data } = await instanciaAxios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ Mensagem: "Erro interno de servidor!" });
  }
});
app.get("/consulta/:cep", async (req, res) => {
  const { cep } = req.params;
  try {
    const { data } = await instanciaAxios.get(`https://viacep.com.br/ws/${cep}/json/`);
    console.log(data);
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ Mensagem: "Erro interno de servidor!" });
  }
});

app.listen(PORT, console.log(`Servidor em pé na porta ${PORT}`));
