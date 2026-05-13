import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from'axios'
function ListOfEmps() {
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  const gotoEmployee=(empObj)=>{
    //navigate to /employee along with selected emp obj
    navigate("/employee", { state:  empObj});
  }
  const gotoEditEmployee=(empObj)=>{
    //navigate to /employee along with selected emp obj
    navigate("/edit-emp", { state: empObj });
  }
  //delete emp
  const deleteEmpById=async (id)=>{
    let res=await axios.delete(`http://localhost:4000/emp-api/employees/${id}`)
    if(res.status===200){
      //get latest emps data
      getEmps();
    }
  }
  //get all employees
  async function getEmps() {
      let res = await axios.get("http://localhost:4000/emp-api/employees");
      if (res.status === 200) {
        let resObj =  res.data;
        setEmps(resObj.payload);
      }
    }
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 text-2xl rounded-5xl shadow-olive-700">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            {/* 3 buutons*/}
            <div className="flex justify-around ">
              <button onClick={() => gotoEmployee(empObj)} className="bg-green-500 p-2 rounded-2xl text-white">View</button>
              <button onClick={() => gotoEditEmployee(empObj)} className="bg-blue-500 p-2 rounded-2xl text-white">Edit</button>
              <button onClick={() => deleteEmpById(empObj._id)} className="bg-red-500 p-2 rounded-2xl text-white">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;