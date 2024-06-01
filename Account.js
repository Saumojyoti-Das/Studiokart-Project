import React, { useState } from 'react';

import Profile from './profile';

const Account = () => {
  const [activeForm, setActiveForm] = useState('login');

  const handleFormChange = (formName) => {
    setActiveForm(formName);
  };

  return (
    <div className="account">
      
      {activeForm === 'login' && <Profile />}
    
      <div>
        {activeForm !== 'login' && (
          <button onClick={() => handleFormChange('login')}>Login</button>
        )}
       
      </div>
    </div>
  );
};

export default Account;
