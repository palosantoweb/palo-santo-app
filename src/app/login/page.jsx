"use client";
import { Label, TextInput, Button } from "keep-react";

 const LogInComponent = () => {
    return (
      <div className="flex flex-col items-center justify-center mb-12">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-md">
          <h1 className="text-3xl mb-6 text-center font-semibold">Iniciar Sesión</h1>
  
          <div className="mb-4">
            <Label htmlFor="#email" value="Correo Electrónico" />
            <TextInput
              id="email"
              placeholder="example@gmail.com"
              color="gray"
              sizing="md"
              addonPosition="left"
            />
          </div>
  
          <div className="mb-6">
            <Label htmlFor="#password" value="Contraseña" />
            <TextInput
              id="password"
              placeholder="********"
              color="gray"
              sizing="md"
              type="password"
            />
          </div>
          <div className="bg-[#CC8942] rounded-md flex items-center justify-center w-full">
          <Button color="secondary" size="md" className="text-white text-justify">
            Iniciar Sesión
          </Button>
          </div>
         
         </div>
         </div>)
  }
export default LogInComponent;