import { useState } from "react";
import List from "./List";
import { ListContext } from "./ListContext";

const ListContainer = () => {
  const [listState, setListState] = useState({
    searchTerm: "",
    movies: [
      {
        id: 1,
        name: "Fast X",
        description:
          "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted and outdriven every foe in their path. Now, they must confront the most lethal opponent they've ever faced. Fueled by revenge, a terrifying threat emerges from the shadows of the past to shatter Dom's world and destroy everything -- and everyone -- he loves.",
      },
      {
        id: 2,
        name: "The Little Mermaid",
        description:
          "The youngest of King Triton's daughters, Ariel is a beautiful and spirited young mermaid with a thirst for adventure. Longing to find out more about the world beyond the sea, Ariel visits the surface and falls for the dashing Prince Eric. Following her heart, she makes a deal with the evil sea witch, Ursula, to experience life on land.",
      },
      {
        id: 3,
        name: "Spider-Man: Across the Spider-Verse",
        description:
          "After reuniting with Gwen Stacy, Brooklyn's full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. However, when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders. He must soon redefine what it means to be a hero so he can save the people he loves most.",
      },
      {
        id: 4,
        name: "Transformers: Rise of the Beasts",
        description:
          "Optimus Prime and the Autobots take on their biggest challenge yet. When a new threat capable of destroying the entire planet emerges, they must team up with a powerful faction of Transformers known as the Maximals to save Earth.",
      },
      {
        id: 5,
        name: "Guardians of the Galaxy Vol. 3",
        description:
          "Still reeling from the loss of Gamora, Peter Quill must rally his team to defend the universe and protect one of their own. If the mission is not completely successful, it could possibly lead to the end of the Guardians as we know them.",
      },
    ],
  });

  return (
    <section>
      <header>
        <input type="text" placeholder="Filter list" />
        <ListContext.Provider value={listState}>
          <List />
        </ListContext.Provider>
      </header>
    </section>
  );
};

export default ListContainer;
