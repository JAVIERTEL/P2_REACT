import Spinner from 'react-bootstrap/Spinner';

function BasicExample() {
  return (
    <Spinner animation="border" role="status">
      <span className="spinner" id= "loading"></span>
    </Spinner>
  );
}

export default BasicExample;