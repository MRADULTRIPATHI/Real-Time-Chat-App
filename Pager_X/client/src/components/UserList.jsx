import React, { useState, useEffect } from 'react';
import { useChatContext, Avatar } from 'stream-chat-react';

const UserList = ({ setChannel }) => {
  const { client } = useChatContext();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await client.queryUsers(
          { id: { $ne: client.userID } }, // sab users except current
          { last_active: -1 },
          { limit: 30 }
        );
        setUsers(response.users);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, [client]);

  if (loading) {
    return <p className="user-list__message">Loading users...</p>;
  }

  // ✅ Direct message channel create function
  const startDirectMessage = async (user) => {
    try {
      const newChannel = client.channel('messaging', {
        members: [client.userID, user.id],
      });
      await newChannel.watch();
      setChannel(newChannel); // 👈 ChannelContainer me dikhane ke liye
    } catch (err) {
      console.error("Error creating channel:", err);
    }
  };

  return (
    <div className="user-list__container">
      <div className="user-list__header">
        <p>User</p>
        <p>Invite</p>
      </div>

      <div className="user-list__scroll">
        {users.length ? (
          users.map((user) => (
            <div
              key={user.id}
              className="user-item__wrapper"
              onClick={() => startDirectMessage(user)} // 👈 click action
            >
              <div className="user-item__name-wrapper">
                <Avatar image={user.image} name={user.name || user.id} size={32} />
                <p className="user-item__name">{user.name || user.id}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="user-list__message">No users found</p>
        )}
      </div>
    </div>
  );
};

export default UserList;
