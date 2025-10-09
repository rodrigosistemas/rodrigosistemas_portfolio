type AvailableAreas = 'Programación Web' | 'Ciberseguridad' | 'Desarrollo de Software & Datos';

export interface Card {
    id: number,
    title: string,
    image: string,
    description: string,
    area: AvailableAreas,
    complete: boolean,
    demo?: boolean,
    github?: boolean,
    linkdemo?: string,
    linkgithub?: string
}