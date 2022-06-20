import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { config } from "../consts";
import logo from "./../images/logo.png";

export function Header() {
  const [open, setOpen] = useState(false);

  const pages = [
    { href: "/#teenused", title: "teenused" },
    { href: "/blog", title: "Blogi" },
    { href: "/tood", title: "Tehtud tööd" },
    { href: "/meist", title: "Meist" },
  ];
  const { pathname } = useRouter();
  return (
    <nav className="w-full shadow-lg px-4 py-2 bg-white bg-opacity-10 z-20 absolute">
      <div className="mx-auto max-w-screen-lg flex justify-between items-center">
        <Link href="/" passHref>
          <div className="h-14 md:h-20 w-28 md:w-40 relative cursor-pointer">
            <Image src={logo} alt="logo" layout="fill" className=" object-contain"></Image>
          </div>
        </Link>
        {/* Desktop menu */}
        <div className=" flex-col justify-end space-y-3 hidden md:flex">
          <div className="flex space-x-3 justify-end child-hover:text-primary text-secondary child-hover:cursor-pointer">
            <Link href={`mailto:${config.email}`}>{config.email}</Link>
            <Link href={`tel:${config.phone.replace(" ", "")}`}>{config.phone}</Link>
          </div>
          <div className="flex uppercase font-bold text-xl">
            {pages.map((page, i) => {
              const selected = pathname.toLowerCase().includes(page.href);
              return (
                <Link key={i} href={page.href} passHref>
                  <div className="group cursor-pointer child:duration-300">
                    <p className={`mx-3 ${selected ? "text-primary" : "text-secondary"} group-hover:text-primary`}>{page.title}</p>
                    <div className={`w-full h-1 ${selected ? "bg-primary" : "bg-secondary"} group-hover:bg-primary`}></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Mobile menu */}
        <div onClick={() => setOpen((o) => !o)} hidden={open} className="flex flex-col space-y-1 md:hidden">
          {[1,2,3].map(i=><div key={i} className="w-6 h-0.5 bg-black"></div>)}
        </div>
        <div onClick={() => setOpen((o) => !o)} className={`${open ? "" : "translate-x-full"} fixed right-0 left-0 top-0 bottom-0 duration-200 `}>
          <div className="flex flex-col bg-white shadow-lg drop-shadow-lg w-[60vw] ml-auto h-full p-4 space-y-2 items-center">
            {pages.map((page, i) => {
              const selected = pathname.toLowerCase().includes(page.href);
              return (
                <Link key={i} href={page.href} passHref>
                  <p className={`${selected ? "text-primary" : "text-secondary"} uppercase font-bold text-lg`}>{page.title}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
