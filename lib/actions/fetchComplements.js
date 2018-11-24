import { FETCH_COMPLEMENTS, ID_PRODUCT } from "../constants";
import { createAction } from "redux-actions";
import { apiGetComplements } from "../api"
import { baseUrl} from "../utils";

const urlComplements = `${baseUrl}/api/product/complementos/${ID_PRODUCT}?_format=json`;

export const fetchComplements = createAction(FETCH_COMPLEMENTS, apiGetComplements(urlComplements));