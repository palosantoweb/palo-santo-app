'use client'
import { useState } from "react";

const CustomDropdown = ({ data, selectedValue, setSelectedValue, formState, setInfoForms }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectedValue = (value) => {
    setSelectedValue(value);
    setInfoForms('nationality', value);
    setIsOpen(false);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const filteredData = data
    ? data.filter(({ name }) => name.common.toLowerCase().includes(searchTerm.toLowerCase()))
    : [];

  return (
    <div className="relative flex flex-col text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 active:bg-gray-200 active:text-gray-800"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={handleToggle}
            data-name="nationality"
          >
            {formState.nationality !== null ? formState.nationality : selectedValue ? selectedValue : 'Nacionalidad'}
          </button>
        </span>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute z-10 left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          data-name="nationality"
        >
          <div className="py-1">
            <div className="p-3">
              <input
                type="text"
                className="border border-gray-300 p-1 w-full"
                placeholder="Buscar"
                value={searchTerm}
                onChange={(e) => handleChange(e)}
                name="nationality"
              />
            </div>
            {filteredData.length > 0 ? (
              <div className="max-h-60 overflow-y-auto" name="nationality">
                {filteredData.map(({ name }, index) => (
                  <div key={index} className="cursor-pointer py-2 px-4 hover:bg-gray-200" data-name="nationality" onClick={() => handleSelectedValue(name.common)}>
                    {name.common}
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-2 text-gray-500">No hay resultados.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown
