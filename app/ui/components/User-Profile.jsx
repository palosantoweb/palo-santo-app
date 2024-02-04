export function UserProfile({session}){
    

    return(
        <div>
        {!!session?.user && (
            <div className=" mr-6 flex flex-col items-end text-[#CC8942]">
               <a href="api/auth/logout"> Logout</a>
               <p className="text-sm">({session.user.email})</p>
            </div>
        )}
    </div>
    )

}