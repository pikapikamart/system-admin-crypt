import { coinSchema } from "@/src/server/schemas/coin.schema";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { 
  HeaderNavbar,
  HeaderNavlinks, 
  Navlink, 
  NavlinksItem} from "../header.styled";


const currentLinks = [
  {
    path: "",
    name: "Cryptocurrencies"
  },
  {
    path: "communities",
    name: "Communities"
  }
]

const Navlinks = () =>{
  const router = useRouter()
  const currentPath = router.pathname.split("/")[1]
  const { data } = useSession()

  const renderLinks = () =>{
    const links = currentLinks.map(link => 
      <NavlinksItem key={ link.name }>
        <Link
          href={ "/" + link.path }
          passHref>
          <Navlink
            aria-current={ currentPath===link.path? "page": false }>
            { link.name }
          </Navlink>
        </Link>
      </NavlinksItem>
    )

    return links
  }

  return (
    <HeaderNavbar aria-label="primary">
      <HeaderNavlinks as="ul">
        { renderLinks() }
        { data && (
          <NavlinksItem >
            <Link
              href={ "/profile" }
              passHref>
              <Navlink
                aria-current={ currentPath==="profile" ? "page": false }>
                Profile
              </Navlink>
            </Link>
          </NavlinksItem>
        ) }
      </HeaderNavlinks>
    </HeaderNavbar>
  )
}


export default Navlinks;