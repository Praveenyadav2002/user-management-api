import React, { useState } from "react";
import { login } from "../api";


export default function Login({ setToken }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(form);
    if (res.token) {
      localStorage.setItem("token", res.token);
      setToken(res.token);
    }
    alert(res.message);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col   space-y-2 border bg-blue-400 m-20 p-20 rounded-md" >
      <h2 className="text-center font-bold text-xl pt-1">Login</h2>
      <input placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <button type="submit" className="border border-black bg-green-300  p-2 rounded-lg font-bold">Login</button>
    </form>
  );
}

