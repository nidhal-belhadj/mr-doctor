import Contact from "../components/Contact";

const Grossesse = () => {
  return (
    <div>
      <Contact />
      <h2>
        SUIVI ET ACCOUCHEMENT <span class="textStyle3">PERSONNALISÉS</span>
      </h2>
      <div style={{ display: "flex" }}>
        <div>
          <h3>ACCOUCHEMENT NATUREL</h3>
          <p class="padNull">
            Un suivi personnalisé pour accoucher dans les conditions que vous
            souhaitez, et en toute sécurité.
          </p>

          <h3 style={{ paddingTop: "1rem" }}>MAL DE DOS</h3>
          <p class="padNull">
            Le centre de gravité de votre corps se déplace vers l'avant, cela
            provoque de fréquentes lombalgies.
          </p>

          <h3 style={{ paddingTop: "1rem" }}>TROUBLES DU SOMMEIL</h3>
          <p class="padNull">
            La grossesse inverse fréquemment le cycle veille/sommeil. Faites des
            siestes si cela est possible.
          </p>
        </div>
        <div>
          <h3>CONSEILS ALIMENTAIRES</h3>
          <p class="padNull">
            Les conseils alimentaires au cours de la grossesse dépendent en
            partie des résultats de votre bilan. Parlez-en avec votre médecin.
          </p>

          <h3 style={{ paddingTop: "1rem" }}>PRISE DE POIDS</h3>
          <p class="padNull">
            La prise de poids normale est d'environ 1 kg par mois, soit 9 à 12
            Kg au cours d'une grossesse.
          </p>

          <h3 style={{ paddingTop: "1rem" }}>CÉSARIENNE NATURELLE</h3>
          <p class="padNull">
            Notre équipe respecte les principes de la "césarienne naturelle"
            anglo-saxons.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Grossesse;
