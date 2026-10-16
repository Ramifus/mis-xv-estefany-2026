// src/scripts/pase.ts
// La frase del pase, armada en un solo lugar: cualquier componente que
// muestre cuántas personas entran con la invitación la saca de acá.
//
// El número llega de la página (/pase1, /pase2...). El index no manda
// número: es la invitación general, sin pase, y devuelve null.

/** El número y la palabra por separado ("2" y "personas"), y la frase entera. */
export function datosDelPase(pases: number) {
    if (!pases || pases < 1) return null;
    const unidad = pases === 1 ? "persona" : "personas";
    return { numero: pases, unidad, texto: `${pases} ${unidad}` };
}
