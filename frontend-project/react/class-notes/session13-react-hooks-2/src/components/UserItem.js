import React from 'react';

const UserItem = ({ user }) => {
  console.log('Rendering: User Item Comp.');
  return (
    <div className="useritem">
      <img
        src={`https://avatars.dicebear.com/v2/avataaars/${user?.id}.svg`}
        alt="random-avatar"
      />
      {user?.name}
    </div>
  );
};

export default UserItem;
