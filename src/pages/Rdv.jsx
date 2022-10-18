import Contact from "../components/Contact";

const Rdv = () => {
  const infos = { display: "flex", justifyContent: "space-between" };
  return (
    <div>
      <Contact />
      <h2>
        TROUVER <span class="textStyle3">LE CABINET MÉDICAL</span>
      </h2>
      <div style={{ display: "flex" }}>
        <div>
          <iframe
            title="address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.3612829818167!2d2.282438515869641!3d48.87038890781551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66ff125c72523%3A0xf3b4ca47aa784d7c!2s4%20Rue%20de%20Sontay%2C%2075116%20Paris!5e0!3m2!1sfr!2sfr!4v1666097376944!5m2!1sfr!2sfr"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div style={{ width: "50%" }}>
          <h3>4 rue de Sontay,75016 PARIS.</h3>
          <div style={infos}>
            <div>Assistante:</div>
            <div>06 59 25 37 11</div>
          </div>
          <div style={infos}>
            <div>Téléphone:</div>
            <div>01 45 00 78 12</div>
          </div>
          <div style={infos}>
            <div>FAX:</div>
            <div>01 78 76 78 52</div>
          </div>
          <div style={infos}>
            <div>E-mail:</div>
            <a href="mailto:olivier.ami@watog.org">olivier.ami@watog.org</a>
          </div>
          <div style={infos}>
            <div>RdV en ligne:</div>
            <a
              class="_link2"
              href="https://www.doctolib.fr/gynecologue-obstetricien/evry/olivier-ami"
            >
              Doctolib.fr
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rdv;
