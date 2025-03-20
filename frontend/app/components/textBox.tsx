import React from "react";

interface Props {
  title: string;
  action: string;
  messageToShow: string
}

const TextBox = ({ title, action, messageToShow }: Props) => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl">{title}</h1>
      <div className="py-2 px-6 mt-4">
        <input
          className="h-32 rounded-2xl w-full border-2"
          type="text"
          name=""
          id=""
        />
      </div>
      <div className="flex justify-around mt-5 px-4 py-3">
        <h1 className="font-semibold mt-1">Encryption Key:</h1>
        <input type="text" className="w-3/5 border-2 rounded-lg h-10" />
      </div>
      <div className=" flex mt-6 justify-around">
        <button className=" font-semibold w-40 text-white h-12 p-1 rounded-xl bg-blue-950">{action}</button>
        <button className=" font-semibold w-40 text-white h-12 p-1 rounded-xl bg-blue-950">copy</button>
      </div>
      <div className="flex justify-around mt-5 px-4 py-3">
        <h1 className="font-semibold mt-1">Result:</h1>
        <h1 type="text" className="w-3/5 mt-1 font-bold" >{messageToShow}</h1>
      </div>
    </div>
  );
};

export default TextBox;
