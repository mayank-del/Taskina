import React,{useState} from 'react';
import './page.css'

function Page({options}) {


  const [isOpen, setIsOpen] = useState(false);
  const [checkedOptions, setCheckedOptions] = useState({});
  const [isAllSelected, setIsAllSelected] = useState(false);

  

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleCheckboxChange = (option) => {
    setCheckedOptions((prevCheckedOptions) => ({
      ...prevCheckedOptions,
      [option]: !prevCheckedOptions[option],
    }));
  };

  const handleSelectAllChange = () => {
    const newCheckedOptions = {};
    options.forEach((option) => {
      newCheckedOptions[option] = !isAllSelected;
    });
    setCheckedOptions(newCheckedOptions);
    setIsAllSelected(!isAllSelected);
  };

  const handleDone = () => setIsOpen(false);

  return (
    <div className='main-container'>
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        All pages
            <input
              type="checkbox"
              checked={isAllSelected}
              onChange={handleSelectAllChange}
            />
            
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          
          {options.map((option) => (
            <label key={option} className="dropdown-item">
            {option}
              <input
                type="checkbox"
                checked={!!checkedOptions[option]}
                onChange={() => handleCheckboxChange(option)}
              />
              
            </label>
          ))}
          <button className="done-button" onClick={handleDone}>
            Done
          </button>
        </div>
      )}
    </div>
    </div>
  );
}

export default Page