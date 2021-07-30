let studente ={
    nome:"",
    congnome:"",
    eta:0
}

let studenti=[
    {
        nome: "marco",
        congnome: "martani",
        eta: 0
    },
    {
        nome: "marco",
        congnome: "martani",
        eta: 0
    },
    {
        nome: "marco",
        congnome: "martani",
        eta: 0
    }, 
    {
        nome: "marco",
        congnome: "martani",
        eta: 0
    }, 
    {
        nome: "marco",
        congnome: "martani",
        eta: 0
    }, 
    {
        nome: "marco",
        congnome: "martani",
        eta: 0
    }
]
let contatore=0;
for (var key in studente){
    console.log(key)
    contatore++;
}

for (var key in studente) {
    studente[key]=prompt(key)
}
studenti.push(studente);

for (let i =0;i <studenti.length;i++){
    console.log(studenti[i].nome);
    console.log(studenti[i].congnome);
}