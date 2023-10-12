import React from 'react';

interface CheckboxGroupProps {
  includeNumbers: boolean;
  setIncludeNumbers: (value: boolean) => void;
  includeSymbols: boolean;
  setIncludeSymbols: (value: boolean) => void;
  includeUppercase: boolean;
  setIncludeUppercase: (value: boolean) => void;
  includeLowercase: boolean;
  setIncludeLowercase: (value: boolean) => void;
  easyToRead: boolean;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  includeNumbers,
  setIncludeNumbers,
  includeSymbols,
  setIncludeSymbols,
  includeUppercase,
  setIncludeUppercase,
  includeLowercase,
  setIncludeLowercase,
  easyToRead,
}) => {
  return (
    <div className="checkbox-group">
      <label className='labels'>
        <input className='input-label'
          type="checkbox"
          checked={includeNumbers}
          onChange={() => setIncludeNumbers(!includeNumbers)}
          disabled={easyToRead} // Disable if easyToRead is checked
        />
        Include Numbers
      </label>
      <label className='labels'>
        <input className='input-label'
          type="checkbox"
          checked={includeSymbols}
          onChange={() => setIncludeSymbols(!includeSymbols)}
          disabled={easyToRead} // Disable if easyToRead is checked
        />
        Include Symbols
      </label>
      <label className='labels'>
        <input className='input-label'
          type="checkbox"
          checked={includeUppercase}
          onChange={() => setIncludeUppercase(!includeUppercase)}
        />
        Include Uppercase
      </label>
      <label className='labels'>
        <input className='input-label'
          type="checkbox"
          checked={includeLowercase}
          onChange={() => setIncludeLowercase(!includeLowercase)}
        />
        Include Lowercase
      </label>
    </div>
  );
};

export default CheckboxGroup;
