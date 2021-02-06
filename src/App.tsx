import React, { useEffect, useState } from 'react';
import './App.css';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import randomColor from 'randomcolor';

function App() {
  const [color, setColor] = useState<string>('random');
  const [randColor, setRandColor] = useState<string[]>([]);
  const [dropdownOpen, setDropDownOpen] = useState<boolean>(false);
  const [categoryStr, setCategoryStr] = useState<string>('Category');
  const [darker, setDarker] = useState<boolean>(false);

  useEffect(() => {
    const colors = randomColor({
      count: 40,
      luminosity: darker ? 'dark' : 'light',
      hue: color
    })
    setRandColor(colors);
  }, [color, darker]);

  const toggle = () => setDropDownOpen(!dropdownOpen);
  
  const handleDropdownClick = (name: string) => {
    setColor(name)
    setCategoryStr(name)
  }
  
  return (
    <div className="App">
      <div>
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
            {categoryStr}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => handleDropdownClick('red')}>Red</DropdownItem>
            <DropdownItem onClick={() => handleDropdownClick('green')}>green</DropdownItem>
            <DropdownItem onClick={() => handleDropdownClick('yellow')}>yellow</DropdownItem>
            <DropdownItem onClick={() => handleDropdownClick('blue')}>blue</DropdownItem>
            <DropdownItem onClick={() => handleDropdownClick('brown')}>brown</DropdownItem>
            <DropdownItem onClick={() => handleDropdownClick('gray')}>gray</DropdownItem>
            <DropdownItem onClick={() => handleDropdownClick('purple')}>purple</DropdownItem>
            <DropdownItem onClick={() => handleDropdownClick('pink')}>pink</DropdownItem>
            <DropdownItem onClick={() => handleDropdownClick(color)}>other</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

        <input type='checkbox' name='text' value="darker" onClick={() => setDarker(!darker)}></input>
        <h4 style={{ marginLeft: 10 }}>darker</h4>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[0]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[1]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[2]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[3]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[4]}` }} />
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[5]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[6]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[7]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[8]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[9]}` }} />
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[10]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[11]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[12]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[13]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[14]}` }} />
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[15]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[16]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[17]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[18]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[19]}` }} />
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[20]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[21]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[22]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[23]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[24]}` }} />
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[25]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[26]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[27]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[28]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[29]}` }} />
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[30]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[31]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[32]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[33]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[34]}` }} />
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[35]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[36]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[37]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[38]}` }} />
        <div style={{ width: 150, height: 150, backgroundColor: `${randColor[39]}` }} />
      </div>
    </div>
  );
}

export default App;
