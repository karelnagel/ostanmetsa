import Layout from "../components/Layout";
import { tood } from "../consts";

export default function Meist() {
  return (
    <Layout title="Tehtud tööd" description="Mõned näited meie tööst ja konkurentsivõimest" top={<h1>Tehtud tööd</h1>}>
      {tood.map(({ tood, year }, i) => (
        <div key={i}>
          <h3>Mõned näited meie tööst ja konkurentsivõimest {year} aastal:</h3>
          <ul>
          {tood.map((too, i) => (
            <li key={i}>{`${too.location} (${too.county}), ${too.types.join(" ja ")} ost, ${too.size ? too.size+"tm, ":""} müüja ${too.seller}`}</li>
          ))}
          </ul>
        </div>
      ))}
    </Layout>
  );
}
