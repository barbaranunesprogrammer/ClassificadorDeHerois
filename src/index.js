import personagens from "./services/database.js";
import nivelXp from "./services/classificacoes.js";

console.table(personagens);



for (let i = 0; i < personagens.length; i++) {
  const personagem = personagens[i];
  const nivel = nivelXp(personagem.xp);
  console.log(`O Herói de nome ${personagem.nome} está no nível de ${nivel} \n`);
}