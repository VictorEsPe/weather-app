import type { SelectedUnits } from "./selectedUnits";

export interface UnitsCategory {
    id: keyof SelectedUnits["options"];
    label: string;
    options: {
        value: string;
        label: string;
    }[];
}