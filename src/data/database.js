export const posts = [
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/jussaraalves.png",
      name: "Jussara Alves",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Hi" },
      { type: "paragraph", content: "I am learning how to use CSS modules." },
      { type: "link", content: "jucs@gmail.com" },
    ],
    publishedAt: new Date("2024-01-22 07:13:54"),
  },
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/CesarCanoff.png",
      name: "Cesar Canoff",
      role: "Programmer",
    },
    content: [
      { type: "paragraph", content: "Hello there!" },
      {
        type: "paragraph",
        content:
          "This is a great tech post discussing the latest advancements in artificial intelligence.",
      },
      { type: "link", content: "canoff.web/ia-projects" },
    ],
    publishedAt: new Date("2024-03-22 07:13:54"),
  },
];
