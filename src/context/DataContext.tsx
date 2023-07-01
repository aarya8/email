import axios from "axios";
import React, { useReducer, useEffect, PropsWithChildren } from "react";
import {
  DataReducer,
  DispatchActions,
  EmailDataType,
  intialState,
} from "../reducer/dataReducer";
import { CreateContext } from "./Createcontext";
type DataContextProps = {
  emailData: EmailDataType[];

  filter: string;
  pageno: number;
  body: { id: string; body: string };
  dispatch: React.Dispatch<DispatchActions>;
};
export const [useData, DataContextProvider] = CreateContext<DataContextProps>();

export function DataProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(DataReducer, intialState);

  useEffect(() => {
    (async function () {
      try {
        const {
          data: { list },
        } = await axios.get("https://flipkart-email-mock.now.sh/");

        dispatch({
          type: "INITIALIZE_DATA",
          payload: list,
        });
        dispatch({
          type: "ADD_EMAILDATA",
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <DataContextProvider
      value={{
        emailData: state.emailData,
        filter: state.filter,
        pageno: state.pageno,
        body: state.body,
        dispatch,
      }}
    >
      {children}
    </DataContextProvider>
  );
}
