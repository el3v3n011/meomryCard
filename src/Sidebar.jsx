
import PropTypes from 'prop-types';
import "./Sidebar.css"

const Sidebar = ({ onInputChange }) => {
  const handlechange = (e) => {
    onInputChange(e.target.value);
  }

  return (
    <>
      <div className="sidebar">
      <label htmlFor="keyword">Enter a Keyword to Display:</label>
      <input type="text" id="keyword" onChange={handlechange}/>
      </div>
    </>
  );
}

Sidebar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
};

export default Sidebar;