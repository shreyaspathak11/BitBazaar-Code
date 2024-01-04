import React, { useState } from 'react';

const SignUpForm = () => {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const selectedFile = e.target.files[0];
    setAvatar(selectedFile);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can submit the form data including the avatar to your backend
  };

  return (
    <form onSubmit={handleFormSubmit}>

      <div>
        <input type="file" name="avatar" id="avatar" accept="image/*" onChange={handleAvatarChange} />
        <label htmlFor="avatar">
          <span>Browse</span>
        </label>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
