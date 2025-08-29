import { Button, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

import emailjs from "@emailjs/browser";

const TEENUSED = ["Metsa ost", "Kinnistu müük", "Raieõiguse võõrandamine", "Puidu müük", "Veoteenused", "Kompleksteenus", "Metsa majandamine"];

const NEXT_PUBLIC_SERVICE_ID = "service_b8f420e";
const NEXT_PUBLIC_TEMPLATE_ID = "ostanmetsa";
const NEXT_PUBLIC_USER_ID = "aW073kT0d8YmT0MKN";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [teenus, setTeenus] = useState(TEENUSED[0]);
  const [status, setStatus] = useState<"sending" | "sent" | "start">("start");

  const submit = async (e: any) => {
    e.preventDefault();
    console.log("sending");
    if (status === "sending") return;
    setStatus("sending");
    try {
      const result = await emailjs.send(NEXT_PUBLIC_SERVICE_ID!, NEXT_PUBLIC_TEMPLATE_ID!, { name, email, question, teenus }, NEXT_PUBLIC_USER_ID);
      console.log(result.text);
    } catch (e) {
      console.log(e);
    }
    setStatus("sent");
  };

  return (
    <div className="basis-2/5 bg-gradient-primary p-4 shadow-lg rounded-lg">
      {status !== "sent" ? (
        <form onSubmit={submit} className="flex flex-col space-y-2">
          <h4 className="font-bold text-xl mb-2">Võta meiega ühendust, vastame 24 tunni jooksul!</h4>
          <TextField label="Sinu nimi" variant="filled" required value={name} onChange={(e) => setName(e.target.value)} />
          <TextField label="E-mail või telefoninumber" variant="filled" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Katastrinumber / küsimus" variant="filled" required value={question} onChange={(e) => setQuestion(e.target.value)} />
          <TextField label="Milline teenus?" select required variant="filled" onChange={(e) => setTeenus(e.target.value)} value={teenus}>
            {TEENUSED.map((teenus, i) => (
              <MenuItem key={i} value={teenus}>
                {teenus}
              </MenuItem>
            ))}
          </TextField>
          <button type="submit" className="btn">
            {status === "sending" ? "Saadan..." : "Saada"}
          </button>
        </form>
      ) : (
        <div className="flex flex-col space-y-6">
          <h4 className="font-bold text-xl mb-2">Email saadetud, võtame Teiega ühendust 24 tunni jooksul!</h4>
          <button className="btn" onClick={() => setStatus("start")}>
            Saada uuesti
          </button>
        </div>
      )}
    </div>
  );
}
