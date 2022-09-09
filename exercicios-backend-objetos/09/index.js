const participantes = [
    { nome: "João" },
    { nome: "Ana" },
    { nome: "Beatriz" },
    { nome: "Maria" },
    { nome: "Ana Clara" },
    { nome: "Joana" },
    { nome: "Augusto" },
    { nome: "Renan" },
    { nome: "Patricia" },
    { nome: "Carlos" },
    { nome: "Renato" },
    { nome: "José" },
    { nome: "Roberto" },
    { nome: "Sara" },
    { nome: "Junior" },
    { nome: "Pedro" },
    { nome: "Vitor" },
    { nome: "Antonio" },
]
for (obj of participantes)
{
    if (obj.nome==="Carlos"){
        console.log(`Galera... O Carlos está na posição ${participantes.indexOf(obj)} , corre lá! `)
    }
}
//carlos se encontra na posição 9 ja que a contagem de index começa na posição 0. para qualquer outro fim, carlos esta na posição