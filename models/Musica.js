import conexao from "../config/conexao.js";

const MusicaSchema = new conexao.Schema({
  titulo: String,
  duracao: String,
  artista: String,
  anoLancamento: Number
});

const Musica = conexao.model("Musica", MusicaSchema);

export default Musica;