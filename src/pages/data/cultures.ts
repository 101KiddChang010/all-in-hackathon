const cultures = [
  {
    title: "African",
    img: "/images/african.jpg",
    alt: "African American",
    link: {
      pathname: "/culture",
      query: {
        // how to access object key for object value :D
        race: "African",
        history: "/",
        culture: "/",
        famous: "/",
        gallery: "/",
      },
    },
  },
  {
    title: "Indian",
    img: "/images/indian.jpg",
    alt: "Indian American",
    link: {
      pathname: "/culture",
      query: {
        race: "Indian",
        history: "",
        culture: "",
        famous: "",
        gallery: "",
      },
    },
  },
  {
    title: "Chinese",
    img: "/images/chinese.jpg",
    alt: "Chinese American",
    link: {
      pathname: "/culture",
      query: {
        race: "Chinese",
        history: "",
        culture: "",
        famous: "",
        gallery: "",
      },
    },
  },
  {
    title: "Hispanic",
    img: "/images/hispanic.jpg",
    alt: "Hispanic American",
    link: {
      pathname: "/culture",
      query: {
        race: "Hispanic",
        history: "",
        culture: "",
        famous: "",
        gallery: "",
      },
    },
  },
  {
    title: "Native American",
    img: "/images/native_american.jpg",
    alt: "Native American",
    link: {
      pathname: "/culture",
      query: {
        race: "Native American",
        history: "",
        culture: "",
        famous: "",
        gallery: "",
      },
    },
  },
];

export default cultures;

export const African = {
  history: {
    data: 'In a defining moment of the civil rights movement, Dr. Martin Luther King, Jr. delivered his "I Have a Dream" speech on August 28, 1963, on the steps of the Lincoln Memorial in Washington, D.C. King\'s soaring rhetoric demanding racial justice and an integrated society became a rallying cry for the movement. And though the civil rights leader was assassinated five years later, his words and his vision continued to inspire generations.',
  },
};
