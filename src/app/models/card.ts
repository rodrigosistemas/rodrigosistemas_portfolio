type AreasDisponibles = 'Programación Web' | 'Ciberseguridad' | 'Desarrollo de Software & Datos';

export interface Card {
    id: number,
    name: string,
    description: string,
    area: AreasDisponibles
}