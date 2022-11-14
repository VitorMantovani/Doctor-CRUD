import express from "express";
import { AppDataSource } from "./database/data-source";
import { Specialty } from "./database/entities/specialty";
const port = 4000;

//Espera que a conexão com o bd seja feita para iniciar o express
AppDataSource.initialize().then(() => {
    const app = express();

    //Tipo de dado que vai ser trabalhado na aplicação
    app.use(express.json());

    app.get("/", (req, res) => {
        return res.json("funcionando")
    })

    app.listen(port);
})




