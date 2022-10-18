import Contact from "../components/Contact";

const Chirurgie = () => {
  return (
    <div>
      <Contact />
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <h2>
            Césarienne <div class="textStyle3">sans douleur</div>
          </h2>
          <h3>En cas de césarienne préventive ou en urgence</h3>
          <p>
            Notre équipe respecte le principe de la césarienne sans douleur, et
            la technique de césarienne extra-péritonéale permet une mobilité et
            une récupération précoces pour mieux s'occuper de bébé : pas de
            sonde urinaire, moins de douleurs, une mobilité dans les deux
            heures, un repas normal le premier jour.
          </p>
          <a
            href="https://www.doctolib.fr/gynecologue-obstetricien/evry/olivier-ami"
            class="more"
          >
            prendre rdv
          </a>
        </div>
        <div>
          <h2>
            infos <span class="textStyle3">chirurgie</span>
          </h2>
          <ul class="_list1 padBot1">
            <li>
              <a href="http://www.allodocteurs.fr/grossesse-enfant/accouchement/cesarienne/comment-mieux-vivre-sa-cesarienne_16109.html">
                Césarienne extrapéritonéale
              </a>
            </li>
            <li>
              <a href="http://www.parismatch.com/Actu/Sante/Le-Pr-Jacques-henri-Ravina-135715">
                Traitement des Fibromes
              </a>
            </li>
            <li>
              <a href="http://www.allodocteurs.fr/se-soigner/chirurgie/coelioscopie/la-coelioscopie-une-revolution-chirurgicale_216.html">
                Coelioscopie
              </a>
            </li>
            <li>
              <a href="http://sante.lefigaro.fr/sante/examen/hysteroscopie/quest-ce-que-cest">
                Hystéroscopie
              </a>
            </li>
            <li>
              <a href="http://www.ameli-sante.fr/prolapsus-genital/quest-ce-que-le-prolapsus-genital.html">
                Descente d'organes
              </a>
            </li>
            <li>
              <a href="http://www.ameli-sante.fr/cancer-du-col-de-luterus/quest-ce-que-le-cancer-du-col-de-luterus.html">
                Cancer du col de l'utérus
              </a>
            </li>
            <li>
              <a href="http://www.ameli-sante.fr/cancer-du-sein/quest-ce-que-le-cancer-du-sein.html">
                Cancer du sein
              </a>
            </li>
            <li>
              <a href="http://www.allodocteurs.fr/se-soigner/chirurgie/hysterectomie/hysterectomie-l-039-ablation-de-l-039-uterus_265.html">
                Hystérectomie par coelioscopie
              </a>
            </li>
          </ul>
          <a href="http://www.ameli-sante.fr/" class="more">
            En savoir plus
          </a>
        </div>
      </div>
    </div>
  );
};
export default Chirurgie;
