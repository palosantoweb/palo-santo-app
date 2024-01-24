import { getSession } from "@auth0/nextjs-auth0";

export async function getStaticProps() {
    const session = await getSession();
    const sessionEmail = session.user.email
    console.log('bbbb', sessionEmail)
  
    return {
      props: {
        session: sessionEmail
      }
    }
  }