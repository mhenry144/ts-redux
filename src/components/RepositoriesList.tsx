import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
// hook from react-redux to manually dispatch function directly inside for an action creator
import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  // use local state to track user input
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  // useSelector doesnt know 'type' ---- solution: create useTypedSelector hook and replace
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // prevent page from reloading when form is submitted
    event.preventDefault();

    //dispatch(actionCreators.searchRepositories(term));
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
