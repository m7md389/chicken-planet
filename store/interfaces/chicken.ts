import EggInterface from "./egg";
import VaccineInterface from "./vaccine";

export default interface ChickenInterface {
  name: string;
  temperature: string;
  life_time: number;
  weight: number;
  color: string;
  sound: string;
  price: number;
  quantity: number;
  images: string[];
  description: string;
  origin: string;
  egg: EggInterface;
  vaccine: VaccineInterface[];
}
