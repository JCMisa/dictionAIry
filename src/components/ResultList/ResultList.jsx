import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { InputContext } from "../../App";
import Loading from "../Loading/Loading";
import Notfound from "../Error/Notfound";
import MeaningList from "./MeaningList/MeaningList";
import Example from "../Example/Example";

axios.defaults.baseURL = "https://api.dictionaryapi.dev/api/v2/entries/en";

const ResultList = () => {
  const { inputValue } = useContext(InputContext);

  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async (param) => {
    try {
      setLoading(true);
      const res = await axios(`/${param}`);
      setResponse(res.data);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputValue.length) {
      fetchData(inputValue);
    }
  }, [inputValue]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Notfound />;
  }

  console.log(response);

  return (
    <div>
      {response && (
        <div>
          <MeaningList mean={response} />
          <Example mean={response} />
        </div>
      )}
    </div>
  );
};

export default ResultList;
