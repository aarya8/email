export type ApiData = {
  id: string;
  from: { email: string; name: string };
  date: Date;
  short_description: string;
  subject: string;
};

export type EmailDataType = ApiData & { read: boolean; favorite: boolean };
type StateType = {
  apiData: ApiData[];
  pageno: number;
  emailData: EmailDataType[];
  filter: string;
  body: BodyDataType;
};
type BodyDataType = { id: string; body: string };
export const intialState: StateType = {
  apiData: [],
  pageno: 1,
  emailData: [],
  filter: "",
  body: { id: "", body: "" },
};
export type DispatchActions =
  | { type: "INITIALIZE_DATA"; payload: ApiData[] }
  | { type: "ADD_EMAILDATA" }
  | { type: "ADD_FILTER"; payload: string }
  | { type: "EMAIL_READ"; payload: string }
  | { type: "UPDATE_BODY"; payload: BodyDataType }
  | { type: "TOGGLE_FAVORITES"; payload: string }
  | { type: "CHANGE_PAGENO"; payload: number };

export const DataReducer = (
  state: StateType,
  action: DispatchActions
): StateType => {
  switch (action.type) {
    case "INITIALIZE_DATA":
      return { ...state, apiData: action.payload };
    case "ADD_EMAILDATA":
      return {
        ...state,
        emailData: state.apiData.map((obj) => ({
          ...obj,
          read: false,
          favorite: false,
        })),
      };
    case "ADD_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    case "EMAIL_READ":
      return {
        ...state,
        emailData: state.emailData.map((item) =>
          item.id === action.payload ? { ...item, read: true } : item
        ),
      };
    case "UPDATE_BODY":
      return {
        ...state,
        body: action.payload,
      };
    case "TOGGLE_FAVORITES":
      return {
        ...state,
        emailData: state.emailData.map((item) =>
          item.id === action.payload ? { ...item, favorite: true } : item
        ),
      };
    case "CHANGE_PAGENO":
      return { ...state, pageno: action.payload };

    default:
      return state;
  }
};
