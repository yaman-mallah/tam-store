import Dropdown from 'react-bootstrap/Dropdown';

function DropDown({options, goal}) {
  return (
    <Dropdown >
      <Dropdown.Toggle className='mainDropDown'>
        {goal}
      </Dropdown.Toggle>
   
      <Dropdown.Menu>
      {options.map((option ,index)=>(
        <Dropdown.Item key={index}>{option}</Dropdown.Item>
      ))}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;