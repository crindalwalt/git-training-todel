import React from "react";

function UserProfile() {
  const user = {
    name: "Uswa Lateef",
    email: "uswa@example.com",
    bio: "Frontend Developer | React Enthusiast",
    location: "Lahore, Pakistan",
    profilePic: "https://i.pravatar.cc/150?img=12", // 👈 Replace with your image URL
  };

  return (
    <div className="profile-card">
      <img src={user.profilePic} alt={user.name} className="profile-img" />
      <h2>{user.name}</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Location:</strong> {user.location}
      </p>
      <p>
        <strong>Bio:</strong> {user.bio}
      </p>
    </div>
  );
}

export default UserProfile;
