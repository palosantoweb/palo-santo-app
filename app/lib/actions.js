'use server'
import { z } from "zod"
import { fetcher } from "../utils/fetcher"


const createClientFormschema = z.object({
    id: z.number(),
    name: z.string(),
    email: z.string(),
    phoneNumber: z.coerce.number(),
    nationality: z.string(),
    birthDate: z.string(),
    consultation: z.string(),
})
const createClientSchema = createClientFormschema.omit({
    id: true, 
    consultation: true
})


export const uploadClient = async (formData, nationality, consultation,  mode, id) => {
    const { name, email, phoneNumber, birthDate } = createClientSchema.parse({
        name: formData.get('name'),
        email: formData.get('email'),
        phoneNumber: formData.get('phoneNumber'),
        birthDate: formData.get('birthDate'),
        nationality: nationality, 
        consultation: consultation
    })

    const parts = birthDate.split("/"); 
    const formattedDate = new Date(parts[2], parts[1] - 1, parts[0]);
    const isoDateString = formattedDate.toISOString();

    const form = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        birthDate: isoDateString,
        nationality: nationality,
        consultation: consultation
    }



    if (mode === 'modify') {
       await fetcher(`client/modify/${id}`, {
            method: 'PUT', mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        })

    } else if(mode === 'create'){
        await fetcher(`client/register`, {
            method: 'POST', mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form)
        })

    } else{
    
    const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_FORMS,
          ...form,
        }),
      });
  
      await response.json();
    }
}