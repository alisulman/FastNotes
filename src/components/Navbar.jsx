import React from "react";
import { Navbar, Typography, IconButton, Button, /*MobileNav, Card*/ } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6" style={{marginLeft: '-100%'}}>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <NavLink to="/" className="flex items-center text-gray-400">Home</NavLink>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <NavLink to="/allnotes" className="flex items-center text-gray-400">Notes</NavLink>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <NavLink to="/block" className="flex items-center text-gray-400">Blocks</NavLink>
            </Typography>
            <Typography as="li" variant="small" color="blue-gray" className="p-1 font-normal">
                <NavLink to="/docs" className="flex items-center text-gray-400">Docs</NavLink>
            </Typography>
        </ul>
    );

    return (
        <div className="-m-6 max-h-[768px] w-[calc(100%+48px)]">
            <Navbar className="top-0 z-10 border-none bg-black text-white h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-2">
                <div className="flex items-center justify-between pt-5 text-blue-gray-900">
                    <Typography as="a" href="/" className="ml-11 mr-4 text-xl cursor-pointer py-1.5 font-medium">
                        Fast-Note
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <div className="flex items-center gap-x-1">
                            <Button variant="text" size="sm" className="py-1 mx-2 hidden bg-black border  text-white rounded-lg hover:bg-white hover:border hover:text-black lg:inline-block">
                                <span>Log In</span>
                            </Button>
                            <Button variant="gradient" size="sm" className=" py-1 hidden bg-white border font-bold  text-black rounded-lg hover:bg-black hover:border hover:text-white lg:inline-block">
                                <span>Sign in</span>
                            </Button>
                        </div>
                        <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)}>
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                {/* <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span>Log In</span>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span>Sign in</span>
                        </Button>
                    </div>
                </MobileNav> */}
            </Navbar>
        </div>
    );
}