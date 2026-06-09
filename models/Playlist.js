import conexao from "../config/conexao.js";

const PlaylistSchema = new conexao.Schema({
  nome: String,
  musica1: String,
  musica2: String,    
  musica3: String
});

const Playlist = conexao.model("Playlist", PlaylistSchema);

export default Playlist;