// App.js
import React, { useState } from 'react';
import Button_Component from './Button_Component';

const App = () => {
  const color_array = ["Red", "Blue", "Orange", "Green", "Gray","yellow","purple","black","brown","Reset"];
  const [backgroundColor, setBackgroundColor] = useState("olive");

  const changeBackgroundColor = (color) => {
    if (color==="Reset"){
      setBackgroundColor("olive")
      return 
    }
    setBackgroundColor(color);
  };

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: backgroundColor }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {color_array.map((text_color,index) => (
            <Button_Component
              key={index}
              text_color={text_color}
              onClick_button={changeBackgroundColor}
            />
          ))
          }
        </div>
      </div>
    </div>
  );
};

export default App;
