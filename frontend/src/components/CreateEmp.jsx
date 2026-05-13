import { useForm } from "react-hook-form";
import { useState,useContext } from "react";
import { useNavigate } from "react-router";
import { counterContextObj } from "../contexts/ContextProvider";

function CreateEmp() {
  const {counter , changeCounter}=useContext(counterContextObj);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //form submit
  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      //make HTTP POST req
      let res = await fetch("http://localhost:4000/emp-api/employees", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      });

      if (res.status === 201) {
        //navigate to employees component programatically
        navigate("/list");
      } else {
        let errorRes = await res.json();
        console.log("error responce is ", errorRes);
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(error);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }

  return (
    <div>
      <div>
      <h1 classname="text-4xl">Counter : {counter}</h1>
      <button className="bg-yellow-300 p-5" onClick={changeCounter}>change</button>
    </div>
      <h1 className="text-5xl text-center text-gray-600">Create New Employee</h1>
      {/* form */}
      <form className=" max-w-md mx-auto mt-10" onSubmit={handleSubmit(onFormSubmit)}>
        <input
          type="text"
          placeholder="Enter name "
          {...register("name")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="email"
          placeholder="Enter Email "
          {...register("email")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />

        <input
          type="number"
          placeholder="Enter mobile number"
          {...register("mobile")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter designation"
          {...register("designation")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />
        <input
          type="text"
          placeholder="Enter name of the company"
          {...register("companyName")}
          className="mb-3 border border-2 p-3 w-full rounded-2xl"
        />

        <button type="submit" className="text-2xl rounded-2xl bg-gray-600 text-white block mx-auto p-4">
          Add Emp
        </button>
      </form>
    </div>
  );
}

export default CreateEmp;