// Button_Component.js
import React from 'react';

const Button_Component = ({ text_color="", onClick_button}) => {
  if (text_color==="Reset"){
    return (
      <button onClick={() => onClick_button(text_color)} className='outline-none px-4 py-1 text-Black rounded-full' style={{ backgroundColor:'olive' }}>
        {text_color}
      </button>
    );
    
  }
  return (
    <button onClick={() => onClick_button(text_color)} className='outline-none px-4 py-1 text-white rounded-full' style={{ backgroundColor: text_color }}>
      {text_color}
    </button>
  );
};

export default Button_Component;
