import stylish_coffee_chair from "@/public/images/assets/stylish_coffee_chair.svg";
import leviosa from "@/public/images/assets/leviosa.svg";
import lolito from "@/public/images/assets/lolito.svg";
import respira from "@/public/images/assets/respira.svg";
import grifo from "@/public/images/assets/grifo.svg";
import muggo from "@/public/images/assets/muggo.svg";
import pingky from "@/public/images/assets/pingky.svg";
import potty from "@/public/images/assets/potty.svg";

export const products = [
  {
    id: 1,
    name: "Slytherin",
    category: "Stylish coffee table",
    price: "250",
    oldPrice: "150",
    discount: "30%",
    image: stylish_coffee_chair,
    new: false,
  },
  {
    id: 2,
    name: "Leviosa",
    category: "Stylish cafe chair",
    price: "1.000",
    oldPrice: "2.000",
    discount: "50%",
    image: leviosa,
    new: false,
  },
  {
    id: 3,
    name: "Lolito",
    category: "Luxury big sofa",
    price: "7.000",
    oldPrice: "14.000",
    discount: "50%",
    image: lolito,
    new: false,
  },
  {
    id: 4,
    name: "Respira",
    category: "Outdoor bar table and stool",
    price: "5.000",
    oldPrice: "",
    discount: "",
    image: respira,
    new: true,
  },
  {
    id: 5,
    name: "Grifo",
    category: "Night lamp",
    price: "70",
    oldPrice: "",
    discount: "",
    image: grifo,
    new: true,
  },
  {
    id: 6,
    name: "Muggo",
    category: "Small couch",
    price: "750",
    oldPrice: "",
    discount: "",
    image: muggo,
    new: true,
  },
  {
    id: 7,
    name: "Pingky",
    category: "Cute couch",
    price: "10.000",
    oldPrice: "20.000",
    discount: "50%",
    image: pingky,
    new: false,
  },
  {
    id: 8,
    name: "Potty",
    category: "Minimalist couch",
    price: "9.000",
    oldPrice: "",
    discount: "",
    image: potty,
    new: true,
  },
];
