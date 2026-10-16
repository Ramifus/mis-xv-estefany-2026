// src/scripts/pase.ts
// La frase del pase, armada en un solo lugar: cualquier componente que
// muestre cuántas personas entran con la invitación la saca de acá.
//
// El número llega de la página (/pase1, /pase2...). El index no manda
// número y usa PASE_GENERAL: la clienta pidió que todas las invitaciones
// muestren el pase, y el general es para dos personas.

export const PASE_GENERAL = 2;

/** El número y la palabra por separado ("2" y "personas"), y la frase entera. */
export function datosDelPase(pases: number) {
    const numero = pases > 0 ? pases : PASE_GENERAL;
    const unidad = numero === 1 ? "persona" : "personas";
    return { numero, unidad, texto: `${numero} ${unidad}` };
}
