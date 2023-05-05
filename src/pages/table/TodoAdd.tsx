import React, { useState } from "react";
import axios from "axios";
import { Params } from "react-router-dom";
import TodoEdit from './TodoEdit';
const API = "https://5cebbeb877d47900143b8ddc.mockapi.io/api/review";


export const ChangeTable = () => {
  const [id, setId] = useState("");
  const [createDate, setcreateDate] = useState("");
  const [nameCamp, setnameCamp] = useState("");
  const [currentReview, setcurrentReview] = useState("");
  const [beginReview, setbeginReview] = useState("");
  const [targetReview, settargetReview] = useState("");
  const [status, setstatus] = useState("");
  const [campType, setcampType] = useState("");
  const [content, setcontent] = useState("");
  const [linkChiendich, setlinkChiendich] = useState("");
  const [currentLike, setcurrentLike] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let send = {
      id: `${id}`,
      createDate: `${createDate}`,
      nameCamp: `${nameCamp}`,
      currentReview: `${currentReview}`,
      beginReview: `${beginReview}`,
      targetReview: `${targetReview}`,
      status: `${status}`,
      campType: `${campType}`,
      content: `${content}`,
      linkChiendich: `${linkChiendich}`,
      currentLike: `${currentLike}`,
    };

    axios
      .post(API, send)
      .then((response) => {
        alert("POST API SUCCESSED !!!");
      })
      .catch((error) => {
        alert("ERROR IS BEING !");
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="lamhihi"
      method="post"
      action="https://5cebbeb877d47900143b8ddc.mockapi.io/api/review"
      className=" ml-10 border border-black w-full bg-black"
    >
    <div className="w-full h-full pl-20">
      <div className="flex flex-col mt-5 mb-2">
        <label className="text-left">id:</label>
        <input
          type={"text"}
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="w-4/6"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">createDate:</label>
        <input
          type={"datetime-local"}
          name="createDate"
          value={createDate}
          onChange={(e) => setcreateDate(e.target.value)}
          className="w-4/6"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">nameCamp:</label>
        <input
          type={"text"}
          name="nameCamp"
          value={nameCamp}
          onChange={(e) => setnameCamp(e.target.value)}
          className="w-4/6"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">currentReview:</label>
        <input
          type={"text"}
          name="currentReview"
          value={currentReview}
          onChange={(e) => setcurrentReview(e.target.value)}
          className="w-4/6"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">beginReview:</label>
        <input
          type={"text"}
          name="beginReview"
          value={beginReview}
          onChange={(e) => setbeginReview(e.target.value)}
          className="w-4/6"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">targetReview:</label>
        <input
          type={"text"}
          name="targetReview"
          value={targetReview}
          onChange={(e) => settargetReview(e.target.value)}
          className="w-4/6"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-left">status:</label>
        <input
          type={"text"}
          name="status"
          value={status}
          onChange={(e) => setstatus(e.target.value)}
          className="w-4/6"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-left">campType:</label>
        <input
          type={"text"}
          name="campType"
          value={campType}
          onChange={(e) => setcampType(e.target.value)}
          className="w-4/6"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">content:</label>
        <input
          type={"text"}
          name="content"
          value={content}
          onChange={(e) => setcontent(e.target.value)}
          className="w-4/6"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-left">linkChiendich:</label>
        <input
          type={"text"}
          name="linkChiendich"
          value={linkChiendich}
          onChange={(e) => setlinkChiendich(e.target.value)}
          className="w-4/6"
        />
      </div>

      <div className="flex flex-col mb-3">
        <label className="text-left">CurrentLike:</label>
        <input
          type={"text"}
          name="currentLike"
          value={currentLike}
          onChange={(e) => setcurrentLike(e.target.value)}
          className="w-4/6"
        />
      </div>
      </div>
      <button className="w-20 h-10 bg-green-400 mb-10 ml-20" type="submit">Submit</button>
    </form>
  );
};
export default ChangeTable;
