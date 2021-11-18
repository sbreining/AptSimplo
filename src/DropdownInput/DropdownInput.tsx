import React from 'react';

interface Input {
  onKeyPress: CallableFunction
}

const DropdownInput: React.FC<Input> = ({ onKeyPress }: Input) => {
  const handleKeyDown = (evt: any) => {
    if (evt.key === "Enter") {
      const val = Number(evt.target.value);
      onKeyPress(!isNaN(val) ? val : 4);
    }
  }
  return (
    <div>
      <input type="text" onKeyDown={handleKeyDown}/>
      <datalist id="opts">
        <option>One</option>
        <option>Two</option>
        <option>Three</option>
      </datalist>
    </div>
  );
}

export default DropdownInput;