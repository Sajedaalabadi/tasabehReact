import React, { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);
  const [buttonText, setButtonText] = useState('سبحان الله');
  const [buttonColor, setButtonColor] = useState('#FFFFF');

  const handleButtonClick = () => {
    setCounter(counter + 1);
    if (counter % 10 === 9) {
      setButtonColor('#FFFFFF');
    } else {
      setButtonColor(counter % 10 === 0 ? '#58f5e3' : '#FFFFFF');
    }
    switch (counter % 4) {
      case 0:
        setButtonText('سبحان الله');
        break;
      case 1:
        setButtonText('الحمد لله');
        break;
      case 2:
        setButtonText('لا إله إلا الله');
        break;
      case 3:
        setButtonText('الله اكبر');
        break;
      default:
        setButtonText('سبحان الله');
        break;
    }
  };

  return (
    
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',flexDirection:'column' }}>
      <div  style={{ backgroundColor : 'white', opacity:0.8,borderRadius: '10px'}}>
      <p style={{fontWeight: 'bold',display: 'flex', justifyContent: 'center', alignItems: 'center',color:'black'}}>صدقة جارية لروح المرحوم الشاب زيد علي العويدي ابو مشعل</p>

      </div>
      <br/>
      <button style={{ borderRadius: '50%', width: '150px', height: '150px', backgroundColor: buttonColor, color: '#000000', fontSize: '20px', fontWeight: 'bold' }} onClick={handleButtonClick}>
        {buttonText}
      </button><br/>
      <p style={{fontWeight: 'bold',display: 'flex', justifyContent: 'center', alignItems: 'center',color:'white'}}>عدد التسبيحات:`${counter}`</p>
    </div>

  );
}


export default App;




