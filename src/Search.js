import React, {useState} from 'react';
import './Search.css';


/** Search: Component renders search bar
 *    - Holds state of formData (i.e., search term)
 *    - Holds props of updateSearchTerm
 *    - Used in Companies and Jobs components
 */

function Search({ updateSearchTerm }) {

  const [formData, setFormData] = useState("");

  return (
    <div>
      {/* To add form here based on logic above */}
    </div>
  )
}

export default Search;