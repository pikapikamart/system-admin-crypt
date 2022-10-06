import { NextPage } from "next";
import { signIn } from "next-auth/react"


const Home: NextPage = () =>{

  return (
    <main>
      <button onClick={ () => {
        signIn("credentials", {
          email: "pamplona.raymart02@gmail.com",
          password: "madeinabyss",
          callbackUrl: "/"
        })
      } }>
        login as raymart
      </button>
    </main>
  )
}


export default Home;