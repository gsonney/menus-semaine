// ============================================================
//  Données de la semaine — c'est le SEUL fichier à modifier
//  chaque semaine. Garder 7 jours, du lundi au dimanche.
//  - programme : qui vient / ce qui se passe ce jour-là
//  - midi / soir : liste de plats (laisser [] si rien)
//  - notes : astuces de recette, rappels…
//  Chaque élément s'écrit soit "texte" (identique dans les deux
//  langues, ex. un prénom), soit { fr: "…", pt: "…" }.
// ============================================================
window.SEMAINE = {
  debut: "2026-11-23", // date du lundi (AAAA-MM-JJ)
  jours: [
    { // Lundi
      programme: [{ fr: "Isa sortie", pt: "Isa sai" }],
      soir: [
        { fr: "Pâtes sauce tomate", pt: "Massa com molho de tomate" },
        { fr: "Brocoli", pt: "Brócolos" },
      ],
    },
    { // Mardi
      soir: [{ fr: "Risotto betterave", pt: "Risotto de beterraba" }],
    },
    { // Mercredi
      programme: ["TESED"],
      soir: [
        "Ramen",
        { fr: "Œuf", pt: "Ovo" },
        { fr: "Brocoli", pt: "Brócolos" },
      ],
      notes: [{ fr: "Penser aux lentilles !", pt: "Não esquecer as lentilhas!" }],
    },
    { // Jeudi
      soir: [
        { fr: "Riz complet", pt: "Arroz integral" },
        { fr: "Chou", pt: "Couve" },
        { fr: "Carottes", pt: "Cenouras" },
        { fr: "Curcuma", pt: "Açafrão-da-terra" },
      ],
      notes: [
        { fr: "Griller graines de moutarde et gingembre", pt: "Tostar sementes de mostarda e gengibre" },
        { fr: "→ ajouter chou et carottes", pt: "→ juntar a couve e as cenouras" },
        { fr: "→ riz : 3× son volume d'eau", pt: "→ arroz: 3× o volume de água" },
      ],
    },
    { // Vendredi
      soir: [
        { fr: "Daurade", pt: "Dourada" },
        { fr: "Courge", pt: "Abóbora" },
        { fr: "Riz", pt: "Arroz" },
        { fr: "Choux de Bruxelles", pt: "Couves de Bruxelas" },
      ],
    },
    { // Samedi
      programme: ["Luisa"],
      midi: [
        { fr: "Lentilles", pt: "Lentilhas" },
        { fr: "Poireau", pt: "Alho-francês" },
        { fr: "Riz", pt: "Arroz" },
        { fr: "Navet", pt: "Nabo" },
      ],
      soir: [{ fr: "Restes", pt: "Restos" }],
    },
    { // Dimanche
      programme: ["Pedro", { fr: "Marché de Noël ?", pt: "Mercado de Natal?" }],
    },
  ],
};
