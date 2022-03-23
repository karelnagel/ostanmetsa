import Layout from "../components/Layout";
import { people } from "../consts";


export default function Meist() {
  return (
    <Layout
      title="Meist"
      description="Oleme noor firma kuid kasvame jõudsalt tänu usaldusväärsele koostööle oma koostööpartneritega ja klientidega. Meie eesmärk on majandada metsanduses läbipaistvalt ja ausalt."
      top={<h1>Meist</h1>}
    >
      <p>
        Oleme noor firma kuid kasvame jõudsalt tänu usaldusväärsele koostööle oma koostööpartneritega ja klientidega. Meie eesmärk on majandada
        metsanduses läbipaistvalt ja ausalt.
      </p>
      {people.map((person, i) => (
        <div key={i}>
          <h3>{person.name}</h3>
          <p>{person.position}</p>
          <a href={`mailto:${person.email}`}>{person.email}</a>
          <a href={`tel:${person.email}`}>{person.phone}</a>
        </div>
      ))}
    </Layout>
  );
}
