import React, { useEffect, useState } from "react";
import { getProfile, updateProfile, deleteProfile } from "../api";

export default function Profile({ token }) {
  const [profile, setProfile] = useState({});
  const [newName, setNewName] = useState("");

  useEffect(() => {
    getProfile(token).then(setProfile);
  }, [token]);

  const handleUpdate = async () => {
    const res = await updateProfile({ name: newName }, token);
    alert(res.message);
  };

  const handleDelete = async () => {
    const res = await deleteProfile(token);
    alert(res.message);
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="flex flex-col justify-center items-center border mt-24 p-32 space-y-3 border-black rounded-lg bg-orange-500 ">
      <h2 className="border border-solid border-black p-2 w-20 text-center bg-blue-500 rounded-lg font-bold text-xl w-[100px] ">Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>

      <input placeholder="New Name" onChange={(e) => setNewName(e.target.value)} />
      <button onClick={handleUpdate} className="border p-2 bg-slate-700 text-white rounded-lg font-bold ">Update</button>
      <button onClick={handleDelete} className="border p-2 bg-slate-700 text-white font-bold rounded-md">Delete Account</button>
    </div>
  );
}
