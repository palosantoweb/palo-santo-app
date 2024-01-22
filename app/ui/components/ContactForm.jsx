'use client'

import { Label, TextInput, Textarea } from "keep-react";

const ContactForm = () => {
    return (<>
      <div className="flex flex-col items-center w-full mb-10" >
                <form className="md:w-[50%]">
                    <div>
                        <Label htmlFor="#id-11" value="Nombre" />
                        <TextInput
                            id="#id-11"
                            color="gray"
                        />
                    </div>
                    <div>
                        <Label htmlFor="#id-12" value="Email" />
                        <TextInput
                            id="#id-12"
                            color="gray"
                        />
                    </div>
                    <div>
                        <Label htmlFor="#id-13" value="Celular" />
                        <TextInput
                            id="#id-13"
                            color="gray"
                        />
                    </div>
                    <div className="mt-12">
                        <Textarea
                            id="comment"
                            placeholder="Dejanos tu consulta.."
                            withBg={true}
                            color="gray"
                            border={true}
                            rows={4}
                        />
                    </div>
                    <button className="bg-[#CC8942] px-7 py-4 mt-7 text-white">Enviar</button>
                </form>
            </div>
 </>  );
}
 
export default ContactForm;