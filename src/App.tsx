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
  const [matchColors, setMatchColors] = useState<string[]>([]);
  const [isMatch, setIsMatch] = useState<boolean>(false);

  useEffect(() => {
    const colors = randomColor({
      count: 40,
      luminosity: darker ? 'dark' : 'light',
      hue: color
    })
    setRandColor(colors);
  }, [color, darker]);

  useEffect(() => {
    const colors = randomColor({
      count: 40,
      luminosity: darker ? 'dark' : 'light',
      hue: color
    })

    if(randColor.length > 0){
      const uniqueColors = randColor.filter((x, i, a) => a.indexOf(x) == i)
      console.log('uniqueColors', uniqueColors);
      setMatchColors(uniqueColors);
    }
    setMatchColors(colors)
  }, [isMatch, darker])

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

        <input type='checkbox' name='text' value="match" onClick={() => setIsMatch(!isMatch)}></input>
        <h4 style={{ marginLeft: 10 }}>match color</h4>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[0]}` :  `${randColor[0]}`}} />
          {isMatch ? `${matchColors[0]}` :  `${randColor[0]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[1]}` :  `${randColor[1]}` }} />
          {isMatch ? `${matchColors[1]}` :  `${randColor[1]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[2]}` :  `${randColor[2]}` }} />
          {isMatch ? `${matchColors[2]}` :  `${randColor[2]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[3]}` :  `${randColor[3]}` }} />
          {isMatch ? `${matchColors[3]}` :  `${randColor[3]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[4]}` :  `${randColor[4]}` }} />
          {isMatch ? `${matchColors[4]}` :  `${randColor[4]}`}
        </div>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[5]}` :  `${randColor[5]}` }} />
          {isMatch ? `${matchColors[5]}` :  `${randColor[5]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[6]}` :  `${randColor[6]}` }} />
          {isMatch ? `${matchColors[6]}` :  `${randColor[6]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[7]}` :  `${randColor[7]}` }} />
          {isMatch ? `${matchColors[7]}` :  `${randColor[7]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[8]}` :  `${randColor[8]}` }} />
          {isMatch ? `${matchColors[8]}` :  `${randColor[8]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[9]}` :  `${randColor[9]}` }} />
          {isMatch ? `${matchColors[9]}` :  `${randColor[9]}`}
        </div>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[10]}` :  `${randColor[10]}` }} />
          {isMatch ? `${matchColors[10]}` :  `${randColor[10]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[11]}` :  `${randColor[11]}` }} />
          {isMatch ? `${matchColors[11]}` :  `${randColor[11]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[12]}` :  `${randColor[12]}` }} />
          {isMatch ? `${matchColors[12]}` :  `${randColor[12]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[13]}` :  `${randColor[13]}` }} />
          {isMatch ? `${matchColors[13]}` :  `${randColor[13]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[14]}` :  `${randColor[14]}` }} />
          {isMatch ? `${matchColors[14]}` :  `${randColor[14]}`}
        </div>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[15]}` :  `${randColor[15]}` }} />
          {isMatch ? `${matchColors[15]}` :  `${randColor[15]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[16]}` :  `${randColor[16]}` }} />
          {isMatch ? `${matchColors[16]}` :  `${randColor[16]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[17]}` :  `${randColor[17]}` }} />
          {isMatch ? `${matchColors[17]}` :  `${randColor[17]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[18]}` :  `${randColor[18]}` }} />
          {isMatch ? `${matchColors[18]}` :  `${randColor[18]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[19]}` :  `${randColor[19]}` }} />
          {isMatch ? `${matchColors[19]}` :  `${randColor[19]}`}
        </div>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[20]}` :  `${randColor[20]}` }} />
          {isMatch ? `${matchColors[20]}` :  `${randColor[20]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[21]}` :  `${randColor[21]}` }} />
          {isMatch ? `${matchColors[21]}` :  `${randColor[21]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[22]}` :  `${randColor[22]}` }} />
          {isMatch ? `${matchColors[22]}` :  `${randColor[22]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[23]}` :  `${randColor[23]}` }} />
          {isMatch ? `${matchColors[23]}` :  `${randColor[23]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[24]}` :  `${randColor[24]}` }} />
          {isMatch ? `${matchColors[24]}` :  `${randColor[24]}`}
        </div>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[25]}` :  `${randColor[25]}` }} />
          {isMatch ? `${matchColors[25]}` :  `${randColor[25]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[26]}` :  `${randColor[26]}` }} />
          {isMatch ? `${matchColors[26]}` :  `${randColor[26]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[27]}` :  `${randColor[27]}` }} />
          {isMatch ? `${matchColors[27]}` :  `${randColor[27]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[28]}` :  `${randColor[28]}` }} />
          {isMatch ? `${matchColors[28]}` :  `${randColor[28]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[29]}` :  `${randColor[29]}` }} />
          {isMatch ? `${matchColors[29]}` :  `${randColor[29]}`}
        </div>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[30]}` :  `${randColor[30]}` }} />
          {isMatch ? `${matchColors[30]}` :  `${randColor[30]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[31]}` :  `${randColor[31]}` }} />
          {isMatch ? `${matchColors[31]}` :  `${randColor[31]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[32]}` :  `${randColor[32]}` }} />
          {isMatch ? `${matchColors[32]}` :  `${randColor[32]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[33]}` :  `${randColor[33]}` }} />
          {isMatch ? `${matchColors[33]}` :  `${randColor[33]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[34]}` :  `${randColor[34]}` }} />
          {isMatch ? `${matchColors[34]}` :  `${randColor[34]}`}
        </div>
      </div>

      <div style={{
        display: 'flex', flexDirection: 'row', justifyContent: 'space-around',
        paddingBottom: 10, paddingTop: 10
      }}>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[35]}` :  `${randColor[35]}` }} />
          {isMatch ? `${matchColors[35]}` :  `${randColor[35]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[36]}` :  `${randColor[36]}` }} />
          {isMatch ? `${matchColors[36]}` :  `${randColor[36]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[37]}` :  `${randColor[37]}` }} />
          {isMatch ? `${matchColors[37]}` :  `${randColor[37]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[38]}` :  `${randColor[38]}` }} />
          {isMatch ? `${matchColors[38]}` :  `${randColor[38]}`}
        </div>
        <div>
          <div style={{ width: 150, height: 150, backgroundColor: isMatch ? `${matchColors[39]}` :  `${randColor[39]}` }} />
          {isMatch ? `${matchColors[39]}` :  `${randColor[39]}`}
        </div>
      </div>
    </div>
  );
}

export default App;
