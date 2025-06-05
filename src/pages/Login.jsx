import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const getLoginData = {
    username: "",
    password: "",
  };

  const navi = useNavigate();
  const [inputLoginData, setInPutLoginData] = useState(getLoginData);

  const hdlChange = (e) => {
    setInPutLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const hdlLogin = async (e) => {
    e.preventDefault();

    try {
      await fetch(
        "http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/login",
        {
          method: "post",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(inputLoginData),
        }
      );
      navi("/todo");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-30 ">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 mx-auto">
        <legend className="fieldset-legend text-4xl">Welcome</legend>

        <input
          type="text"
          className="input"
          placeholder="Name"
          name="username"
          value={inputLoginData.username}
          onChange={hdlChange}
        />

        <input
          type="password"
          className="input"
          placeholder="Password"
          name="password"
          value={inputLoginData.password}
          onChange={hdlChange}
        />

        <button className="btn btn-warning mt-4 text-4xl" onClick={hdlLogin}>
          LOGIN
        </button>
      </fieldset>
    </div>
  );
}
