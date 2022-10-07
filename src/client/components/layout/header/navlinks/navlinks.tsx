import { coinSchema } from "@/src/server/schemas/coin.schema";
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

  const renderLinks = () =>{
    const links = currentLinks.map(link => 
      <NavlinksItem>
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
      </HeaderNavlinks>
    </HeaderNavbar>
  )
}


export default Navlinks;