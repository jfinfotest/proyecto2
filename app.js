let dia = 6;
let intento = 0;
let maxIntentos = 3;
let horario;

switch (dia) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        horario = 18;
        break;
    case 6:
        horario = 10;
        break;
    case 7:
        horario = 14;
        break;
    default:
        horario = 0;
}

console.log(`Horario base para día ${dia}: ${horario}:00`);

while (intento < maxIntentos) {
    let ajustar = intento < 2 ? true : false; // Simula que los primeros 2 intentos requieren ajuste
    if (!ajustar) break;
    intento++;
    horario++;
    console.log(`Intento ${intento}: Ajustando a ${horario}:00`);
}

console.log(`Horario final para la cita: ${horario}:00`);
