import { useState } from "react";
import type { SelectedUnits } from "../../interfaces/selectedUnits";
import EngineIcon from "../../assets/images/icon-units.svg";
import DropdownIcon from "../../assets/images/icon-dropdown.svg";
import CheckIcon from "../../assets/images/icon-checkmark.svg";
import { fieldsSetsCategories } from "./fieldSetsCategories";

export function UnitsDropdown() {
  const [selectedUnits, setSelectedUnits] = useState<SelectedUnits>({
    category: "Metric",
    options: {
      temperature: "celsius",
      wind: "kmh",
      precipitation: "mm",
    },
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  function switchUnits(): void {
    const toMetric: SelectedUnits = {
      category: "Metric",
      options: {
        temperature: "celsius",
        wind: "kmh",
        precipitation: "mm",
      },
    };

    const toImperial: SelectedUnits = {
      category: "Imperial",
      options: {
        temperature: "fahrenheit",
        wind: "mph",
        precipitation: "inches",
      },
    };

    if (selectedUnits.category === "Metric") {
      setSelectedUnits(toImperial);
    } else {
      setSelectedUnits(toMetric);
    }
  }

  return (
    <>
      <div className="relative">
        <button
          className="flex items-center gap-1.5 bg-bg-gray cursor-pointer px-3 py-2 rounded-lg text-xs md:text-sm hover:bg-bg-light-gray transition-colors duration-200"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <img src={EngineIcon} alt="Icone de busca" />
          Units
          <img
            src={DropdownIcon}
            alt="Icone de busca"
            className={`${isDropdownOpen ? "rotate-180" : ""} transition-transform duration-300`}
          />
        </button>

        <div
          className={`${isDropdownOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"} bg-bg-gray text-white absolute top-12 right-0 
            w-48 p-3 rounded-lg flex flex-col items-start gap-2 transition-all duration-300 ease-in-out`}
        >
          <button
            onClick={switchUnits}
            className="cursor-pointer hover:bg-bg-light-gray px-2 py-1 rounded-lg w-full text-start"
          >
            Switch to{" "}
            {selectedUnits.category === "Metric" ? "Imperial" : "Metric"}
          </button>

          {fieldsSetsCategories.map((category, index) => (
            <fieldset key={category.id} className="w-full flex flex-col gap-1">
              <legend className="text-text-light-gray text-sm px-2 mb-1">
                {category.label}
              </legend>
              {category.options.map((option) => (
                <div
                  key={option.value}
                  className="hover:bg-bg-light-gray flex items-center px-2 justify-between cursor-pointer rounded-lg"
                >
                  <label htmlFor={option.value}>{option.label}</label>

                  {option.value === selectedUnits.options[category.id] && (
                    <img src={CheckIcon} alt="Ícone de check" />
                  )}
                  <input
                    type="radio"
                    id={option.value}
                    name={category.id}
                    value={option.value}
                    checked={
                      option.value === selectedUnits.options[category.id]
                    }
                    className="hidden"
                    onChange={() =>
                      setSelectedUnits((prev) => ({
                        ...prev,
                        options: {
                          ...prev.options,
                          [category.id]: option.value,
                        },
                      }))
                    }
                  />
                </div>
              ))}
              {index < fieldsSetsCategories.length - 1 && (
                <hr className="text-text-light-gray w-full mt-1" />
              )}
            </fieldset>
          ))}
        </div>
      </div>
    </>
  );
}
