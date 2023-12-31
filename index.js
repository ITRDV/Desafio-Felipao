// Declarando variaveis
let nickname = "Dragon"
let xp = 10

// Switch Case
switch (xp) {
    case xp <= 1000:
        console.log ("O Herói de nome " +nickname+ " está no nível de Ferro")
        break;
    case xp >= 1001 && xp <= 2000:
        console.log ("O Herói de nome " +nickname+ " está no nível de Bronze")
        break;    
    case  xp >= 2001 && xp <= 5000:
        console.log ("O Herói de nome " +nickname+ " está no nível de Prata")
        break;
    case xp >= 5001 && xp <= 7000:
        console.log ("O Herói de nome " +nickname+ " está no nível de Ouro")
        break; 
    case xp >= 7001 && xp <= 8000:
        console.log ("O Herói de nome " +nickname+ " está no nível de Platina")
        break; 
    default: 
    console.log ("O Herói de nome " +nickname+ " está no nível de Radiante")
}
 