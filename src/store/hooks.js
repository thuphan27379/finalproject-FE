import Context from "./Context";
import { useContext } from "./Context";

//
export const useStore = () => {
  const [state, dispatch] = useContext(Context);

  return [state, dispatch];
};
