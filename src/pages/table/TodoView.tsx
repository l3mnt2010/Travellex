import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../components/ui/Button";
import TodoEdit from "./TodoEdit";

const titles = [
  "id",
  "createDate",
  "nameCamp",
  "currentReview",
  "beginReview",
  "targetReview",
  "status",
  "campType",
  "content",
  "linkChiendich",
  "currentLike",
];

const TodoView = () => {
  const [data, setData] = useState([]);
  const [native, isNative] = useState(false);
  const [getprop, setProp] = useState(0);
  const [getprops, setProps] = useState(0);
  const [getObjEdit, setObjEdit] = useState({})
  const handleDelete = async (id:number) => {
    alert("are you sure click delete !");
    await axios
      .delete(`https://5cebbeb877d47900143b8ddc.mockapi.io/api/review/${id}`)
      .then((response) => {
        const newData = data.filter((item) => item["id"] !== id);
        setData(newData);
      })
      .catch((error) => alert(error));

    isNative(false);
  };
   
  const handleEdit =  async () =>{
    axios.get(`https://5cebbeb877d47900143b8ddc.mockapi.io/api/review/${getprops}`)
      .then(res =>{
        console.log(res.data);
        setObjEdit(res.data);
        return res.data;
       
      })
  }

  useEffect(() => {
    axios
      .get("https://5cebbeb877d47900143b8ddc.mockapi.io/api/review")
      .then((response) => setData(response.data))
      .catch((error) => alert(error));
  }, []);

  return (
    <>
      <table className={"font-serif text-xs ml-10"}>
        <thead className={native ? "opacity-10" : "font-serif"}>
          <tr>
            {titles.map((items) => {
              return <th className="boder border-slate-950">{items}</th>;
            })}
            <th className="boder border-slate-950">Option</th>
            <th className="boder border-slate-950">Option</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item["id"]}>
              <td
                className={
                  native ? "opacity-10" : "border border-gray-400 rounded-lg"
                }
              >
                {item["id"]}
              </td>
              <td
                className={
                  native ? "opacity-10" : "border border-gray-400 rounded-lg"
                }
              >
                {item["createDate"]}
              </td>
              <td
                className={
                  native ? "opacity-10" : "border border-gray-400 rounded-lg"
                }
              >
                {item["nameCamp"]}
              </td>
              <td
                className={
                  native ? "opacity-10" : "border border-gray-400 rounded-lg"
                }
              >
                {item["currentReview"]}
              </td>
              <td
                className={
                  native ? "opacity-10" : "border border-gray-400 rounded-lg"
                }
              >
                {item["beginReview"]}
              </td>
              <td
                className={
                  native ? "opacity-10" : "border border-gray-400 rounded-lg"
                }
              >
                {item["targetReview"]}
              </td>
              <td
                className={
                  native ? "opacity-10" : "border border-gray-400 rounded-lg"
                }
              >
                {item["status"]}
              </td>
              <td
                className={
                  native ? "opacity-10" : "border border-gray-400 rounded-lg"
                }
              >
                {item["campType"]}
              </td>
              <td
                className={
                  native ? "opacity-10" : "border border-gray-400 rounded-lg"
                }
              >
                {item["content"]}
              </td>
              <td
                className={
                  native ? "opacity-10" : "border border-gray-400 rounded-lg"
                }
              >
                {item["linkChiendich"]}
              </td>
              <td
                className={
                  native ? "opacity-10" : "border border-gray-400 rounded-lg"
                }
              >
                {item["currentLike"]}
              </td>
              <td className={native ? "opacity-10" : "pl-3"}>
                <button
                  className="bg-red-600 w-16 h-6 hover:bg-white-600"
                  onClick={() => {isNative(true) ; setProp(item['id'])}}
                  
                >
                  Delete
                </button>
              </td>
              <td className={native ? "opacity-10" : "pl-3"}>
                <button className="bg-blue-600 w-16 h-6 hover:bg-indigo-500" 
                    onClick={()=>{setProps(item['id']); handleEdit()}}>
                  Edit
                </button>
              </td>
              <div
                className={
                  !native
                    ? "hidden"
                    : " absolute top-1/2 left-1/3 opacity-100 z-50 ml-14"
                }
              > 
                <div className="w-96 h-96 boder border-red-500">
                  <p className="font-sans mb-4">Bạn có chắc chắc muốn xóa User Review này !</p>
                  <div>
                  <button
                    className="w-40 h-14 m-3 bg-green-600"
                    onClick={() => isNative(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="w-40 h-14 m-3 bg-red-500"
                    onClick={() => handleDelete(getprop)}
                  >
                    OK
                  </button>
                  </div>
                </div>
              </div>
            </tr>
          ))}
        </tbody>

      </table>
    </>
  );
};
export default TodoView;
