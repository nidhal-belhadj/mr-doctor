import Contact from "../components/Contact";

const Echographie = () => {
  return (
    <div>
      <Contact />
      <h2>
        Informations sur <span class="textStyle3">les échographies</span>
      </h2>
      <div style={{ display: "flex" }}>
        <div>
          <h3>ECHOGRAPHIE DE DATATION</h3>
          <p class="padNull">
            Il est toujours préférable de faire une échographie assez tôt pour
            dater approximativement la grossesse et vérifier qu'elle évolue bien
            en écoutant l'activité cardiaque de l'embryon.
          </p>
          <a
            href="https://www.doctolib.fr/gynecologue-obstetricien/evry/olivier-ami"
            target="new"
          >
            <span class="textStyle3">
              Pour prendre un rendez-vous, cliquez ici.
            </span>
          </a>

          <h3 style={{ paddingTop: "1rem" }}>
            Echographie morphologique 12 SA
          </h3>
          <p class="padNull">
            C'est la fin de l'embryogénèse, les membres sont visibles. Lors de
            cette échographie, la déclaration de grossesse est établie et le
            calcul de risque de trisomie 21 est prescrit.
          </p>
          <a
            href="https://www.doctolib.fr/gynecologue-obstetricien/evry/olivier-ami"
            target="new"
          >
            <span class="textStyle3">
              Pour prendre un rendez-vous, cliquez ici.
            </span>
          </a>
        </div>
        <div>
          <h3>ECHOGRAPHIE PELVIENNE</h3>
          <p class="padNull">
            La plupart des échographies gynécologiques peuvent être faites sur
            le ventre, sauf pour l'exploration de la fertilité qui nécessite la
            voie endovaginale. Nous faisons le maximum pour éviter votre
            inconfort.
          </p>
          <a
            href="https://www.doctolib.fr/gynecologue-obstetricien/evry/olivier-ami"
            target="new"
          >
            <span class="textStyle3">
              Pour prendre un rendez-vous, cliquez ici.
            </span>
          </a>

          <h3 style={{ paddingTop: "1rem" }}>ECHOGRAPHIE DE 22 SA ET 32 SA</h3>
          <p class="padNull">
            Le visage de l'enfant est surtout visible en 3D entre 20 et 28
            SA.Tous les organes sont regardés en détail.
          </p>
          <a
            href="https://www.doctolib.fr/gynecologue-obstetricien/evry/olivier-ami"
            target="new"
          >
            <span class="textStyle3">
              Pour prendre un rendez-vous, cliquez ici.
            </span>
          </a>
          <a
            href="https://www.doctolib.fr/gynecologue-obstetricien/evry/olivier-ami"
            class="more"
          >
            prendre rdv
          </a>
        </div>
      </div>
    </div>
  );
};
export default Echographie;
