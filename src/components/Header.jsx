import PropTypes from 'prop-types'


function Header(props, { word }) {
  //props caught
  return (
    <header>
      <div className="container">
        <h2>{props.text}</h2>
        <h1>{word}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  word: "Programming",
};

Header.propTypes = {
    text: PropTypes.string,
}
export default Header;
