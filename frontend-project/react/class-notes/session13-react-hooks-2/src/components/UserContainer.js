import React from 'react';
import UserItem from './UserItem';

const UserContainer = ({ users, add }) => {
  console.log('Rendering: User Container Comp.');
  return (
    <div className="users">
      <button id="add-button" onClick={add}>
        Add User
      </button>
      {users?.map((user) => {
        return <UserItem key={user.id} user={user} />;
      })}
    </div>
  );
};

export default React.memo(UserContainer);
