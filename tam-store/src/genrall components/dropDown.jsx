import Dropdown from 'react-bootstrap/Dropdown';

function DropDown({options, goal, border}) {
  return (
    <Dropdown >
      <Dropdown.Toggle className='mainDropDown' style={{borderWidth:border?border+'px':0 ,padding:border?0+'px' +20+'px':0}}>
        {goal}
      </Dropdown.Toggle>
   
      <Dropdown.Menu>

      {options?
        options.map((option ,index)=>(
        <Dropdown.Item key={index}>{option}</Dropdown.Item>
      ))
      :null}
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;