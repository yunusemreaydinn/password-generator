import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className="checkbox">
      <label className='labels'>
        <input className='input-label' type="checkbox" checked={checked} onChange={handleCheckboxChange} />
        <span className='bottom-label'>{label}</span>
      </label>
    </div>
  );
};

export default Checkbox;