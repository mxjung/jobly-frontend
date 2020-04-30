import React, {useState} from 'react';
import './Search.css';


/** Search: Component renders search bar
 *    - Holds state of formData (i.e., search term)
 *    - Holds props of updateSearchTerm
 *    - Used in Companies and Jobs components
 */

function Search({ setSearchTerm }) {

  const [formData, setFormData] = useState("");

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = evt => {
    evt.preventDefault();
    setSearchTerm(formData);
  };

  /** Update local state w/curr state of input elem */

  const handleChange = evt => {
    const { value } = evt.target;
    setFormData(value);
  };

  /** render form */
  return (
    <form className="Search" onSubmit={handleSubmit}>
      <input
        className="Search-input "
        id="search"
        name="search"
        value={formData}
        onChange={handleChange}
        placeholder="Enter search term..."
      />
      <button className="btn btn-primary Search-submit">Submit</button>
    </form>
  );
}

export default Search;