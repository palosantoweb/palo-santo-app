'use client'
import React, { createContext, useContext, useState } from 'react';

export const ClientContext = createContext();

export const ClientProvider = ({ children }) => {
    const [clients, setClients] = useState([]);

    const updateClients = (newClients) => {
        if(newClients){
                setClients((prevClients) => [...prevClients, newClients]);

        }else{
            setClients(prevClients=> [prevClients])
        }
    };


    const editClient = (editedClient) =>{
        setClients((prevClients) => {
            const updatedClients = prevClients.map((c) => {
                if (c.id === editedClient.id) {
                    return { ...c, ...editedClient };
                }
                return c;
            });
            return updatedClients;
        });
    }


    return (
        <ClientContext.Provider value={{ clients, updateClients,setClients }}>
            {children}
        </ClientContext.Provider>
    );
};

export const useClient = () => {
    return useContext(ClientContext);
};
