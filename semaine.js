// ============================================================
//  Données de la semaine — c'est le SEUL fichier à modifier
//  chaque semaine. Garder 7 jours, du lundi au dimanche.
//  - programme : qui vient / ce qui se passe ce jour-là
//  - midi / soir : liste de plats (laisser [] si rien)
//  - notes : astuces de recette, rappels…
// ============================================================
window.SEMAINE = {
  debut: "2026-11-23", // date du lundi (AAAA-MM-JJ)
  jours: [
    {
      programme: ["Isa sortie"],
      soir: ["Pâtes sauce tomate", "Brocoli"],
    },
    {
      soir: ["Risotto betterave"],
    },
    {
      programme: ["TESED"],
      soir: ["Ramen", "Œuf", "Brocoli"],
      notes: ["Penser aux lentilles !"],
    },
    {
      soir: ["Riz complet", "Chou", "Carottes", "Curcuma"],
      notes: [
        "Griller graines de moutarde et gingembre",
        "→ ajouter chou et carottes",
        "→ riz : 3× son volume d'eau",
      ],
    },
    {
      soir: ["Daurade", "Courge", "Riz", "Choux de Bruxelles"],
    },
    {
      programme: ["Luisa"],
      midi: ["Lentilles", "Poireau", "Riz", "Navet"],
      soir: ["Restes"],
    },
    {
      programme: ["Pedro", "Marché de Noël ?"],
    },
  ],
};
