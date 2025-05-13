let costoTotal = 0;

for (let dia = 1; dia <= 7; dia++) {
    let consumo = Math.floor(Math.random() * 5) + 1; // Consumo aleatorio entre 1 y 5
    let costoDiario = consumo > 3 ? 2 : 1;
    costoTotal += costoDiario;

    console.log(`Día ${dia}: Consumo ${consumo} litros, Costo: $${costoDiario}, Total acumulado: $${costoTotal}`);

    if (costoTotal > 10) {
        console.log("Costo total superó $10, deteniendo el seguimiento");
        break;
    }
}

console.log(`Costo total final: $${costoTotal}`);
