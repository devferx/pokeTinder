// Photos
import pikachu1 from "@img/pikachu1.png";
import pikachu2 from "@img/pikachu2.png";
import pikachu3 from "@img/pikachu3.png";

export const initialState = {
  pokemonsCards: [
    {
      name: "Pikachu",
      description:
        "Soy un Pokémon muy afectuoso, me encanta jugar, divertirme y sobre todo comer mucho. Cuando entro en confianza me gusta recibir lindos abrazos y caricias; al punto que mi amor evoluciona y puede llegar a ser muy electrizante. Estoy dispuesto a conocerte y capturar momentos muy divertidos juntos.",
      distance: 8,
      place: "Region de kanto",
      pictures: [pikachu1, pikachu2, pikachu3],
      skills: ["Tierno", "Amigable", "Paciente", "Leal"],
    },
    {
      name: "",
      description: "",
      distance: "",
      place: "",
      pictures: [],
      skills: [],
    },
  ],
  currentPokemonCard: {},
  activeBottomBar: false,
  cardIsOpen: false,
  loading: true,
};
