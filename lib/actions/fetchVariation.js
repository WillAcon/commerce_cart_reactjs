import { ID_PRODUCT, FETCH_VARIATION } from "../constants";
import { createAction } from "redux-actions";
import { apiGetVariation } from "../api"
import { baseUrl} from "../utils";

const urlVaritation = `${baseUrl}/api/product/variation/${ID_PRODUCT}?_format=json`;

export const fetchVariation = createAction(FETCH_VARIATION, apiGetVariation(urlVaritation));