import {Article} from "./article";

export interface Ligne {
  uuidContientCommande: string,
  uuidCommande: string,
  contenue: Article[]
}
