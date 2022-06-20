import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { config } from "../consts";
import logo from "./../images/logo.png";

export function Header() {
  const pages = [
    { href: "/#teenused", title: "teenused" },
    { href: "/blog", title: "Blogi" },
    { href: "/tood", title: "Tehtud tööd" },
    { href: "/meist", title: "Meist" },
  ];
  const { pathname } = useRouter();
  return (
    <nav className="w-full shadow-lg p-2 bg-white bg-opacity-10 z-20 absolute">
      <div className="mx-auto max-w-screen-lg flex justify-between">
        <Link href="/" passHref>
          <div className="h-20 w-40 relative cursor-pointer">
            <Image src={logo} alt="logo" layout="fill" className=" object-contain"></Image>
          </div>
        </Link>
        <div className="flex flex-col justify-end space-y-3  ">
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
      </div>
    </nav>
  );
}
