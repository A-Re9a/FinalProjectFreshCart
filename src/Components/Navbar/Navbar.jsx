
import React, { useContext, useEffect } from 'react'
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
} from "@heroui/react";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext';
import { CartContext } from '../../Contexts/CartContext';
import { WishListContext } from '../../Contexts/WishListContext';
import Logo from '../../assets/freshcart-logo.svg';


export default function Navbar() {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishListContext);
  const { Name } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const Navigate = useNavigate();
  const menuItems = [
    "Home",
    "Categories",
    "Brands",
  ];

  const { isLoggedin } = useContext(AuthContext);

  const userName = Name.split(" ")[0];
  const change = () => {

    if (document.getElementById('input').checked) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }
  return (
    <HeroUINavbar isSticky shouldHideOnScroll isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden"
        />
        <Link to={'/'}>
          <NavbarBrand>
            <img className='w-full ' src={Logo} alt='freshcart-logo' />
          </NavbarBrand>
        </Link>

      </NavbarContent>
      {isLoggedin &&
        <NavbarContent className="hidden md:flex " justify="center" >
          {menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link color="foreground" to={item == menuItems[0] ? '/' : '/' + item}>
                {item}
              </Link>

            </NavbarItem>
          ))}
          <NavbarItem>
            <NavLink to={"/Cart"} className={"relative me-1"}><i className='fas fa-shopping-cart text-green-500 fa-xl '></i><span className='text-green-800 font-bold absolute -top-3 left-2.5  '>{cart.numOfCartItems}</span></NavLink>
            <NavLink to={"/WishList"} className={"relative "}><i className='fas fa-heart text-red-600 fa-xl '></i><span className='text-red-300 font-bold absolute -top-3 left-3  '>{wishlist.count}</span></NavLink>
          </NavbarItem>
        </NavbarContent>}

      {isLoggedin ?
        <NavbarContent justify="end" className='gap-2'>

          <NavbarItem>
            <div className='items-center hidden sm:flex "'>
              <NavLink to={"/UserProfile"} className={"relative me-1"}><span class="rounded-full h-8 w-8 flex items-center justify-center text-white bg-green-500">{Name.split(" ")[0][0] == undefined || Name.split(" ")[0][0] == null || Name.split(" ")[0][0] == "" ? localStorage.getItem("Name").split(" ")[0][0] : Name.split(" ")[0][0]}</span>
              </NavLink>
              <p className='text-green-600 font-bold'>Hi,{userName == undefined || userName == null || userName == "" ? localStorage.getItem("Name").split(" ")[0] : userName}</p>
            </div>
          </NavbarItem>
          <NavbarItem>

            <label className="switch m-10">
              <input id="input" type="checkbox" onChange={change} />
              <div className="slider round">
                <div className="sun-moon">
                  <svg id="moon-dot-1" className="moon-dot" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>
                  <svg id="moon-dot-2" className="moon-dot" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>
                  <svg id="moon-dot-3" className="moon-dot" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>
                  <svg id="light-ray-1" className="light-ray" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>
                  <svg id="light-ray-2" className="light-ray" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>
                  <svg id="light-ray-3" className="light-ray" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>

                  <svg id="cloud-1" className="cloud-dark" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>
                  <svg id="cloud-2" className="cloud-dark" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>
                  <svg id="cloud-3" className="cloud-dark" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>
                  <svg id="cloud-4" className="cloud-light" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>
                  <svg id="cloud-5" className="cloud-light" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>
                  <svg id="cloud-6" className="cloud-light" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="50"></circle>
                  </svg>
                </div>
                <div className="stars">
                  <svg id="star-1" className="star" viewBox="0 0 20 20">
                    <path
                      d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                    ></path>
                  </svg>
                  <svg id="star-2" className="star" viewBox="0 0 20 20">
                    <path
                      d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                    ></path>
                  </svg>
                  <svg id="star-3" className="star" viewBox="0 0 20 20">
                    <path
                      d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                    ></path>
                  </svg>
                  <svg id="star-4" className="star" viewBox="0 0 20 20">
                    <path
                      d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </label>
          </NavbarItem>
        </NavbarContent>
        :
        <NavbarContent justify="end">
          <NavbarItem>
            <Link to={"/Login"}>Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button color="success" href="#" variant="flat" >
              <Link to={"/Register"}>Sign Up</Link>
            </Button>
          </NavbarItem>
        </NavbarContent>
      }


      {isLoggedin &&
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem onClick={() => setIsMenuOpen(false)} key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={"foreground"}
                href="#"
                size="lg"
              >
                {item}
              </Link>

            </NavbarMenuItem>

          ))}
          <NavLink to={"/Cart"} >Cart ({cart.numOfCartItems > 0 ? cart.numOfCartItems : 0})</NavLink>
          <NavLink to={"/WishList"} > WishList ({wishlist.count > 0 ? wishlist.count : 0})</NavLink>
          <NavLink to={"/UserProfile"} ><span class="rounded-full h-8 w-8 flex items-center justify-center text-white bg-green-500">{Name.split(" ")[0][0] == undefined || Name.split(" ")[0][0] == null || Name.split(" ")[0][0] == "" ? localStorage.getItem("Name").split(" ")[0][0] : Name.split(" ")[0][0]}</span></NavLink>
        </NavbarMenu>}
    </HeroUINavbar>
  );
}

