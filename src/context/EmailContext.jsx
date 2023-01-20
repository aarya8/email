import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { EmailReducer, intialState } from "../reducer/EmailReducer";

const EmailContext = createContext();
export const useEmail = () => useContext(EmailContext);

export function EmailProvider({ children }) {
  const [state, dispatch] = useReducer(EmailReducer, intialState);
  useEffect(() => {
    (async function () {
      try {
        const {
          data: { list },
        } = await axios.get("https://flipkart-email-mock.now.sh/");

        dispatch({
          type: "INITIALIZE_DATA",
          payload: list.map((obj) => ({
            ...obj,
            read: false,
            favorite: false,
          })),
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <EmailContext.Provider
      value={{
        apiData: state.apiData,
        filter: state.filter,
        pageno: state.pageno,
        body: state.body,
        dispatch,
      }}
    >
      {children}
    </EmailContext.Provider>
  );
}
