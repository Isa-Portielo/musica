import mongoose from "mongoose";

const url = "mongodb+srv://isabellematielobg022_db_user:Isinha13@cluster0.eokyots.mongodb.net/?appName=Cluster0";

const conexao = await mongoose.connect(url)

export default conexao;