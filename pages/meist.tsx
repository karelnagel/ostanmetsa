import { ContactForm } from "../components/ContactForm";
import Layout from "../components/Layout";
import { config } from "../consts";

export default function Meist() {
  return (
    <Layout
      title="Meist"
      description="Oleme noor firma kuid kasvame jõudsalt tänu usaldusväärsele koostööle oma koostööpartneritega ja klientidega. Meie eesmärk on majandada metsanduses läbipaistvalt ja ausalt."
      top="Meist"
    >
      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
        <div className="flex  flex-col basis-3/5 space-y-10">
          <p className="text-xl font-bold">
            Oleme noor firma kuid kasvame jõudsalt tänu usaldusväärsele koostööle oma koostööpartneritega ja klientidega. Meie eesmärk on majandada
            metsanduses läbipaistvalt ja ausalt.
          </p>
          <div className="flex ">
            {config.people.map((person, i) => (
              <div key={i} className="flex flex-col items-center w-full">
                <h3 className="font-bold text-lg">{person.name}</h3>
                <p>{person.position}</p>
                <a className="text-primary" href={`mailto:${person.email}`}>
                  {person.email}
                </a>
                <a className="text-primary" href={`tel:${person.email}`}>
                  {person.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </Layout>
  );
}
