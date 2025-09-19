import { TechGroup } from "./techgroup" 

export interface Panel {
    active: boolean;
    name: string;
    icon: string;
    items?: string[]; // para listas de texto (panel 1 y 2)
    techGroups?: TechGroup[]; // para el panel 3 con logos
    childPanel?: { active: boolean; name: string }[];
}