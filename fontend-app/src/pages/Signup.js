import React, { useState } from "react";
import { signup } from "../api";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signup(form);
    alert(res.message);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col border p-16 m-20 space-y-2 bg-green-300 rounded-md px-20" >
      <h2 className="text-center font-bold text-xl">Signup</h2>
      <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit" className="border p-2 bg-blue-300 font-bold rounded-md border-solid border-black  ">Signup</button>
    </form>
  );
}
