import { useState } from "react";
// hook from react-redux to manually dispatch function directly inside for an action creator
import { useDispatch } from "react-redux";
import { actionCreators } from "../state";

const RepositoriesList: React.FC = () => {
  // use local state to track user input
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // prevent page from reloading when form is submitted
    event.preventDefault();

    dispatch(actionCreators.searchRepositories(term));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
    </div>
  );
};

export default RepositoriesList;
