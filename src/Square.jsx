import PropTypes from 'prop-types';

export const Square = ({value, onSquareClick}) => {
//  const [value, setValue] = useState(null) 
 
  return (
      <button 
      className="square"
      onClick={ onSquareClick }
      >{ value }</button>
)
};
Square.propTypes = {
    value: PropTypes.string,
    onSquareClick: PropTypes.func
  }