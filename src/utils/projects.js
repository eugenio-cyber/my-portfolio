import ShortenerLinks from "../assets/shortener-links.png";
import DinDin from "../assets/din-din.png";
import Pagamentos from "../assets/pagamentos.png";
import VirtualRoom from "../assets/virtual-rooms.png";
import DigitalAirport from "../assets/digital-airport.png";

export const projects = [
  {
    title: "Digital Airport",
    text: "Uma solução com o objetivo de digitalizar os aeroportos, permitindo que o usuário tenha tudo na palma da mão.",
    link: "https://digital-airport.vercel.app/",
    img: DigitalAirport,
    technologies: [
      "NextJS",
      "Material UI",
      "TypeScript",
      "MongoDB",
      "GitHub Pages",
    ],
  },
  {
    title: "Meu Link",
    text: "Se trata de uma aplicação que faz o encurtamento dos seus links e com o auxílio da API do bit.ly.",
    link: "https://eugenio-cyber.github.io/reactjs-link-shortener",
    img: ShortenerLinks,
    technologies: ["ReactJS", "React Router", "React Icons", "GitHub Pages"],
  },
  {
    title: "DinDin",
    text: "O objetivo desse projeto foi o desenvolvimento duma aplicação para controles de finanças pessoais.",
    link: "https://dindin-app-three.vercel.app/",
    img: DinDin,
    technologies: ["ReactJS", "NodeJS", "PostgreSQL", "Vercel"],
  },
  {
    title: "PayPay",
    text: "Esse projeto se trata de uma aplicação capaz de gerenciar devedores, com várias funcionalidade implementadas.",
    link: "https://paypay-app.vercel.app/",
    img: Pagamentos,
    technologies: ["ReactJS", "Material UI", "NodeJS", "PostgreSQL", "Vercel"],
  },
  {
    title: "Virtual Rooms",
    text: "Sistema de exibição de vídeos em salas virtuais com a possibilidade de conversa simultânea.",
    link: "https://github.com/eugenio-cyber/virtual-rooms-test",
    img: VirtualRoom,
    technologies: ["ReactJS", "Material UI", "NodeJS", "Socket.IO"],
  },
];
