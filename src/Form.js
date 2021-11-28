import { useState } from "react";
import axios from "axios";

function Form(props) {
  const [userName, setUserName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${userName}`);
    props.onSubmit(resp);
    console.log(resp.data);
    setUserName("");
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <input
          onChange={(event) => setUserName(event.target.value)}
          value={userName}
          className="form__input"
          type="text"
          placeholder="Github Username ..."
          required
        />
        <button className="form__submit"> ➕ </button>
      </form>
    </>
  );
}

export default Form;
