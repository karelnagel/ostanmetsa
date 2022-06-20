import Layout from "../components/Layout";
import { works } from "../consts";

export default function Meist() {
  return (
    <Layout title="Tehtud tööd" description="Mõned näited meie tööst ja konkurentsivõimest" top={<h1>Tehtud tööd</h1>}>
      <div className="flex flex-col space-y-6 items-">
        {works.map(({ work, year }, i) => (
          <div key={i}>
            <h3 className="font-bold text-xl">Mõned näited meie tööst ja konkurentsivõimest {year} aastal:</h3>
            <ul className=" text-lg">
              {work.map((too, i) => (
                <li key={i}>{`${too.location} (${too.county}), ${too.types.join(" ja ")} ost, ${too.size ? too.size + "tm, " : ""} müüja ${
                  too.seller
                }`}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}
