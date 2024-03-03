// imports
import NextAuth from "next-auth"

// importing providers
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                  prompt: "consent",
                  access_type: "offline",
                  response_type: "code"
                }
              }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }