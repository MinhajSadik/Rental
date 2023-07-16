import { CategoryType } from "./categoryTypes";

export interface CityType extends CategoryType {
  area: Array<string>;
};