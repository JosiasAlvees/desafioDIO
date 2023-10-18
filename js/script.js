let personagem = ["Goku", 2000];

if (personagem [1] < 1000) {
    console.log(`O personagem ${personagem[0]} é Ferro seu xp é de ${personagem[1]}`)
}else if ((personagem[1] > 1001) && (personagem[1] < 2000)) {
    console.log(`O personagem ${personagem[0]} é Bronze seu xp é de ${personagem[1]}`)
}else if ((personagem[1] > 2001) && (personagem[1] < 5000)) {
    console.log(`O personagem ${personagem[0]} é Prata seu xp é de ${personagem[1]}`)
}else if ((personagem[1] > 6001) && (personagem[1] < 7000)) {
    console.log(`O personagem ${personagem[0]} é Ouro seu xp é de ${personagem[1]}`)
}else if ((personagem[1] > 7001) && (personagem[1] < 8000)) {
    console.log(`O personagem ${personagem[0]} é Platina Diamante seu xp é de ${personagem[1]}`)
}else if ((personagem[1] > 8001) && (personagem[1] < 9000)) {
    console.log(`O personagem ${personagem[0]} é Ascendente seu xp é de ${personagem[1]}`)
}else if ((personagem[1] > 9001) && (personagem[1] < 10000)) {
    console.log(`O personagem ${personagem[0]} é Imortal seu xp é de ${personagem[1]}`)
}else {
    console.log(`O personagem ${personagem[0]} é Radiante seu xp é de ${personagem[1]}`)
}