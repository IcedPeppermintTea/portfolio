export const projects = [
  {
    id: 1,
    title: "GameRack",
    description:
      "Personal Game Library Tracker — a full stack web app that lets you search for video games, add them to a personal shelf, track your status, leave ratings and reviews, and view insights about your gaming habits.",
    stack: ["Flask", "JS", "HTML", "CSS"],
    links: {
      live: "https://gamerack.up.railway.app/",
      readme:
        "https://github.com/IcedPeppermintTea/GameRack/blob/main/README.md",
    },
    images: [
      { src: "src/assets/gamerack/home.jpeg", alt: "GameRack Home Screen" },
      {
        src: "src/assets/gamerack/library.jpeg",
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
    images: [
      { src: "src/assets/kanban/main.jpeg", alt: "Kanban Board Screen" },
    ],
  },
];
