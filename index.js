import express from "express";
import Genero from './models/Genero.js';
import Musica from './models/Musica.js';
import Artista from './models/Artista.js';
import Playlist from './models/Playlist.js';


const app = express();
const PORT = 3010;

// Configura o EJS como motor de views
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// pasta onde ficam os arquivos .ejs
app.set("views", "./views");

//Liberar acesso a pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/genero/lst", async (req, res) => {
  const generos = await Genero.find();
  res.render("genero/lst", { generos });
});
app.get("/genero/add", (req, res) => {
  res.render("genero/add");
});
app.post('/genero/add', async (req, res) => {
  const { nome} = req.body;
  await Genero.create({ nome});
  res.render("genero/addok");
});
app.get('/genero/del/:id', async (req, res) => {
const genero = await Genero.findByIdAndDelete(req.params.id)
res.redirect("/genero/lst")
});
app.get('/genero/edt/:id', async (req, res) => {
const genero = await Genero.findById(req.params.id)
res.render("genero/edt", {genero})
});
app.post('/genero/edt/:id', async (req, res) => {
const genero = await Genero.findByIdAndUpdate(req.params.id, req.body)
res.render("genero/edtok")
});
app.post('/genero/lst', async (req, res) => {
  const { pesquisar } = req.body;
  const generos = await Genero.find({
    nome: new RegExp(pesquisar, 'i')
  });
  res.render("genero/lst", { generos });
})



app.get("/musica/lst", async(req, res) => {
  const musicas = await Musica.find();
  res.render("musica/lst", { musicas });
});
app.get("/musica/add", (req, res) => {
  res.render("musica/add");
});
app.post("/musica/add", async (req, res) => {
  const {titulo, duracao, artista, anoLancamento} = req.body;
  await Musica.create({ titulo, duracao, artista, anoLancamento });
  res.render("musica/addok");
});
app.get('/musica/del/:id', async (req, res) => {
const musica = await Musica.findByIdAndDelete(req.params.id)
res.redirect("/musica/lst")
});
app.get('/musica/edt/:id', async (req, res) => {
const musica = await Musica.findById(req.params.id)
res.render("musica/edt", {musica})
});
app.post('/musica/edt/:id', async (req, res) => {
const musica = await Musica.findByIdAndUpdate(req.params.id, req.body)
res.render("musica/edtok")
});
app.post('/musica/lst', async (req, res) => {
  const { pesquisar } = req.body;
  const musicas = await Musica.find({
    titulo: new RegExp(pesquisar, 'i')
  });
  res.render("musica/lst", { musicas});
})


app.get("/artista/lst", async(req, res) => {
  const artistas = await Artista.find();
  res.render("artista/lst", { artistas });
});
app.get("/artista/add", (req, res) => {
  res.render("artista/add");
});
app.post("/artista/add", async (req, res) => {
  const {nome, pais, anoInicio} = req.body;
  await Artista.create({ nome, pais, anoInicio });
  res.render("artista/addok");
});
app.get('/artista/del/:id', async (req, res) => {
const artista = await Artista.findByIdAndDelete(req.params.id)
res.redirect("/artista/lst")
});
app.get('/artista/edt/:id', async (req, res) => {
const artista = await Artista.findById(req.params.id)
res.render("artista/edt", {artista})
});
app.post('/artista/edt/:id', async (req, res) => {
const artista = await Artista.findByIdAndUpdate(req.params.id, req.body)
res.render("artista/edtok")
});
app.post('/artista/lst', async (req, res) => {
  const { pesquisar } = req.body;
  const artistas = await Artista.find({
    nome: new RegExp(pesquisar, 'i')
  });
  res.render("artista/lst", { artistas });
})


app.get("/playlist/lst", async(req, res) => {
  const playlists = await Playlist.find();
  res.render("playlist/lst", { playlists });
});
app.get("/playlist/add", (req, res) => {
  res.render("playlist/add");
});
app.post("/playlist/add", async (req, res) => {
  const {nome, musica1, musica2, musica3} = req.body;
  await Playlist.create({ nome, musica1, musica2, musica3 });
  res.render("playlist/addok");
});
app.get('/playlist/del/:id', async (req, res) => {
const playlist = await Playlist.findByIdAndDelete(req.params.id)
res.redirect("/playlist/lst")
});
app.get('/playlist/edt/:id', async (req, res) => {
const playlist = await Playlist.findById(req.params.id)
res.render("playlist/edt", {playlist})
});
app.post('/playlist/edt/:id', async (req, res) => {
const playlist = await Playlist.findByIdAndUpdate(req.params.id, req.body)
res.render("playlist/edtok")
});
app.post('/playlist/lst', async (req, res) => {
  const { pesquisar } = req.body;
  const playlists = await Playlist.find({
    nome: new RegExp(pesquisar, 'i')
  });
  res.render("playlist/lst", { playlists });
})

app.listen(PORT, ()=>{
 console.log(
    `Servidor rodando em http://localhost:${PORT}`)
});