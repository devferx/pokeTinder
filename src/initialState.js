// Photos
import pikachu1 from "@img/pikachu1.png";
import pikachu2 from "@img/pikachu2.png";
import pikachu3 from "@img/pikachu3.png";

import lucario1 from "@img/lucario-1.png";
import lucario2 from "@img/lucario-2.png";
import lucario3 from "@img/lucario-3.png";

import oshawott1 from "@img/oshawott-1.png";
import oshawott2 from "@img/oshawott-2.png";
import oshawott3 from "@img/oshawott-3.png";

export const initialState = {
  pokemonsCards: [
    {
      name: "Pikachu",
      desc:
        "Soy un Pokémon muy afectuoso, me encanta jugar, divertirme y sobre todo comer mucho. Cuando entro en confianza me gusta recibir lindos abrazos y caricias; al punto que mi amor evoluciona y puede llegar a ser muy electrizante. Estoy dispuesto a conocerte y capturar momentos muy divertidos juntos.",
      distance: 8,
      place: "Region de kanto",
      pictures: [pikachu1, pikachu2, pikachu3],
      skills: ["Tierno", "Amigable", "Paciente", "Leal"],
    },
    {
      name: "Lucario",
      desc:
        "Tengo una especial habilidad relacionada con el aura, que me permite entender y asimilar los sentimientos y pensamientos de los demás Pokémon. Poseo un gran sentido de justicia y como buen luchador, me caracteriza la velocidad, agilidad y flexibilidad. Soy de carácter duro y serio, pero me gustaría conocer al Pokémon que tenga un aura compatible con el mío.",
      distance: 16,
      place: "Region de Sinnoh",
      pictures: [lucario1, lucario2, lucario3],
      skills: ["Inteligente", "Fiel", "Serio", "Ágil", "Veloz"],
    },
    {
      name: "Oshawott",
      desc:
        "Me considero un Pokémon capaz de superar situaciones conflictivas para mí, lo cual me ayuda a ser muy fuerte y valiente. Soy un gran amigo, que demuestra su espíritu de corazón leal y cuando me enamoro, puedo llegar a hacer cualquier cosa, poniendo a prueba todo mi cariño.",
      distance: 24,
      place: "Region de Teselia ",
      pictures: [oshawott1, oshawott2, oshawott3],
      skills: ["Tierno", "Adorable", "Divertido"],
    },
  ],
  currentCard: 0,
  activeBottomBar: false,
  cardIsOpen: false,
  loading: true,
};
