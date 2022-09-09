const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]
const jovens=[]
const adultos=[]
for(let obj of usuarios)
{
    obj.idade>18?adultos.push(obj.nome):jovens.push(obj.nome)
}
console.log(adultos)
console.log(jovens)
  
