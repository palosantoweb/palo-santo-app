'use client'
import { Dropdown,Spinner,TextInput } from "keep-react";
import { useState } from "react";

export const DropdownComponent = ({data, loading, error, selectedValue, setSelectedValue, setInfoForms}) => {
    const [searchTerm, setSearchTerm] = useState('');


    const handleSelectedValue = (value) =>{
        setSelectedValue(value)
        setInfoForms('nationality', value)
    }

    const handleChange = (e) => {
        const { value } = e.target;
        setSearchTerm(value);
      };

    const filteredData = data ? data.filter(({ name }) => name.common.toLowerCase().includes(searchTerm.toLowerCase())) : [];


    return (
        <div className="relative w-full">
        <Dropdown
          label={selectedValue ? selectedValue : 'Nacionalidad'}
          type="secondary"
          size="sm"
          dismissOnClick={true}
          className="border border-gray-400"
        >
          <div className="p-3">
            <TextInput
              id="#id-8yj95h"
              placeholder="Buscar"
              color="gray"
              value={searchTerm}
              handleOnChange={(e) => handleChange(e)}
            />
          </div>
          {error && <Dropdown.Item> Ha ocurrido un error</Dropdown.Item>}
          {loading && <Dropdown.Item> <Spinner /></Dropdown.Item>}
          {filteredData.length > 0 && (
            <div className="max-h-60 overflow-y-auto">
              {filteredData.map(({ name }, index) => (
                <Dropdown.Item key={index} onClick={() => handleSelectedValue(name.common)}>
                  {name.common}
                </Dropdown.Item>
              ))}
            </div>
          )}
        </Dropdown>
      </div>

    );
  }