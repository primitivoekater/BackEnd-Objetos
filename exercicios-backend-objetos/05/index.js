const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
    
}
const aula1={
    identificador:1,
    nomeAula:"Intro_prog"
}
const aula2={
    identificador:2,
    nomeAula:"variaveis"
}
const aula3={
    identificador:3,
    nomeAula:"array"
}
const aula4={
    identificador:4,
    nomeAula:"objetos"
}
curso.aulas.push(aula1,aula2,aula3,aula4)
console.log(curso.aulas)