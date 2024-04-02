import { BsPersonArmsUp } from "react-icons/bs";
import { LuHeartHandshake } from "react-icons/lu";
import { FaVolleyball } from "react-icons/fa6";
import { MdOnDeviceTraining } from "react-icons/md";
import { GiFruitBowl } from "react-icons/gi";
import { TbBottleFilled } from "react-icons/tb";
import { ListDaily } from "./types/types";

const list: ListDaily[] = [
  {
    title: "strength",
    icon: <BsPersonArmsUp className="icon"/>,
  },
  {
    title: "cardiovascular",
    icon: <LuHeartHandshake className="icon"/>,
  },
  {
    title: "games",
    icon: <FaVolleyball className="icon"/>,
  },
  {
    title: "cross-training",
    icon: <MdOnDeviceTraining className="icon"/>,
  },
  {
    title: "nutrltlon",
    icon: <GiFruitBowl className="icon"/>,
  },
  {
    title: "hydration",
    icon: <TbBottleFilled className="icon"/>,
  },
];

export default list;