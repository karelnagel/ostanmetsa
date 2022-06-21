import { config } from "../consts";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-main bg-cover ">
      <div className="bg-black bg-opacity-30 px-10 py-20 text-white">
        <div className="mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-start justify-items-center text-center md:text-lg text-whit">
          <div>
            <h2 className="uppercase font-bold  text-center mb-2 md:mb-4 text-lg md:text-xl ">Meist lähemalt</h2>
            <p>
              Oleme noor firma kuid kasvame jõudsalt tänu usaldusväärsele koostööle oma koostööpartneritega ja klientidega. Meie eesmärk on majandada
              metsanduses läbipaistvalt ja ausalt.
            </p>
          </div>
          <div className="">
            <h2 className="uppercase font-bold text-center mb-2 md:mb-4 text-lg md:text-xl">Võta ühendust</h2>
            <div className="flex flex-col space-y-1 ">
              <a href={`mailto:${config.email}`}>{config.email}</a>
              {config.people.map((p, i) => (
                <a key={i} href={`tel:${p.phone}`}>
                  {p.name}: {p.phone}
                </a>
              ))}
              <a href="https://goo.gl/maps/jqmyP2Pqc4ELVpng8">Põllu 2 Võru linn</a>
            </div>
          </div>
          <Link href="#" passHref>
            <button className="btn">Tagasi üles</button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
