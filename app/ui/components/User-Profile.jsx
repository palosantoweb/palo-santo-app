
import { signOut } from "next-auth/react";
import { redirect } from 'next/navigation';

export function UserProfile({session}){
    
const handleClick = () =>{
    signOut('github')
    redirect("/dashboard")
    
}
    return(
        <div>
        {!!session && (
            <div className=" mr-6 flex flex-col items-end text-[#CC8942]">
               <button onClick={()=>handleClick()}> Logout</button>
               <p className="text-sm">({session.user.email})</p>
            </div>
        )}
    </div>
    )

}