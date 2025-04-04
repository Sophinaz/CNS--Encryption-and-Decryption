import React, { useState } from "react";

const GeneratePairOfKeys = () => {
  const [publicKey, setPublicKey] = useState("");
  const [privateKey, setPrivateKey] = useState("");

  return (
    <div className="border-2 rounded-xl p-8">
      <div className="flex flex-col items-center space-y-6">
        <h1 className="font-bold text-xl">Generate public key and private key</h1>
        <button className=" font-semibold w-36 text-white h-12 rounded-xl bg-blue-950">Generate</button>
      </div>
      <div className="mt-10">
        <h1 className="font-semibold">Public Key: <span className="ml-2 font-extrabold">{publicKey}</span></h1>
        <h1 className="font-semibold">Private Key: <span className="ml-2 font-extrabold">{privateKey}</span></h1>
      </div>
    </div>
  );
};

export default GeneratePairOfKeys;
