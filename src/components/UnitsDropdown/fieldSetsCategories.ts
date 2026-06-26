import type { UnitsCategory } from "../../interfaces/unitsCategories";

export const fieldsSetsCategories: UnitsCategory[] = [
  {
    id: "temperature",
    label: "Temperature",
    options: [
      { value: "celsius", label: "Celsius °C" },
      { value: "fahrenheit", label: "Fahrenheit °F" },
    ],
  },
  {
    id: "wind",
    label: "Wind Speed",
    options: [
      { value: "kmh", label: "km/h" },
      { value: "mph", label: "mph" },
    ],
  },
  {
    id: "precipitation",
    label: "Precipitation",
    options: [
      { value: "mm", label: "Milimeters (mm)" },
      { value: "inches", label: "Inches(in)" },
    ],
  },
];
