import gamerackHome from "../assets/gamerack/home.jpeg";
import gamerackLibrary from "../assets/gamerack/library.jpeg";
import kanbanMain from "../assets/kanban/main.jpeg";
import recipesMain from "../assets/recipes/main.jpeg";
import chromeExtMain from "../assets/chrome_ext/main.jpeg";
import etchMain from "../assets/etch/main.jpeg";

export const projects = [
  {
    id: 1,
    title: "GameRack",
    description:
      "Personal Game Library Tracker — a full stack web app that lets you search for video games, add them to a personal shelf, track your status, leave ratings and reviews, and view insights about your gaming habits.",
    stack: ["Flask", "JS", "HTML", "CSS", "RAWG API"],
    links: {
      live: "https://gamerack.up.railway.app/",
      readme:
        "https://github.com/IcedPeppermintTea/GameRack/blob/main/README.md",
    },
    images: [
      { src: gamerackHome, alt: "GameRack Home Screen" },
      {
        src: gamerackLibrary,
        alt: "Library View",
      },
    ],
  },
  {
    id: 2,
    title: "Kanban Board",
    description:
      "A drag-and-drop task management board built with React and TypeScript. Tasks can be created, moved between columns, and deleted.",
    stack: ["React", "TypeScript"],
    links: {
      live: "https://icedpepperminttea.github.io/kanban-board/",
      readme:
        "https://github.com/IcedPeppermintTea/kanban-board/blob/main/README.md",
    },
    images: [{ src: kanbanMain, alt: "Kanban Board Screen" }],
  },
  {
    id: 3,
    title: "Recipe Book",
    description:
      "A dynamic recipe book built with React, TypeScript, and Tailwind CSS. Recipes are stored as individual static JSON files and rendered through a shared template: add a new recipe by adding a new JSON file, no code changes required.",
    stack: ["React", "TypeScript"],
    links: {
      live: "https://icedpepperminttea.github.io/recipes/",
      readme:
        "https://github.com/IcedPeppermintTea/recipes/blob/main/README.md",
    },
    images: [{ src: recipesMain, alt: "Recipe Screen" }],
  },
  {
    id: 4,
    title: "Word Swapper Chrome Extension",
    description:
      "A Chrome & Edge extension that automatically swaps specific words for others on every web page you visit.",
    stack: ["JS", "HTML", "CSS", "Chrome Extension API"],
    links: {
      live: "",
      readme:
        "https://github.com/IcedPeppermintTea/word-swapper-extension/blob/main/README.md",
    },
    images: [
      {
        src: chromeExtMain,
        alt: "Word Swapper Extension Screen",
      },
    ],
  },
  {
    id: 5,
    title: "Etch-a-Sketch",
    description:
      "A browser-based drawing grid where users can color through the hover action. Allows users to customize the grid to any size up to 100x100 pixels.",
    stack: ["JS", "HTML", "CSS"],
    links: {
      live: "https://icedpepperminttea.github.io/etch-a-sketch/",
      readme:
        "https://github.com/IcedPeppermintTea/etch-a-sketch/blob/main/README.md",
    },
    images: [{ src: etchMain, alt: "Etch-A-Sketch Screen" }],
  },
];
