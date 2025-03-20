"use client";
import {
  useDecryptWith3DESMutation,
  useDecryptWithAESMutation,
  useDecryptWithOTPMutation,
  useEncryptWith3DESMutation,
  useEncryptWithAESMutation,
  useEncryptWithOTPMutation,
} from "@/lib/redux/api/getApi";
import AlgorithmSelector from "./components/algorithmSelector";
import TextBox from "./components/textBox";
import { useState } from "react";

export default function Home() {
  const [method, setMethod] = useState("aes");
  const [encryptMessage, setEncryptMessage] = useState("");
  const [decryptMessage, setDecryptMessage] = useState("");

  const [encryptWithAES] = useEncryptWithAESMutation();
  const [decryptWithAES] = useDecryptWithAESMutation();
  const [encryptWith3DES] = useEncryptWith3DESMutation();
  const [decryptWith3DES] = useDecryptWith3DESMutation();
  const [encryptWithOTP] = useEncryptWithOTPMutation();
  const [decryptWithOTP] = useDecryptWithOTPMutation();

  const setMethodOfEncryption = (choice: string) => {
    setMethod(choice);
  };

  const handleEncrypt = async (message: string, secret: string) => {
    try {
      const data = {
        message: message,
        secret: secret,
      };

      const result = await encryptWithAES(data);
      console.log("result", result)
    } catch (error) {
      console.log("error", error);
      alert("Failed");
    }
  };

  const handleDecrypt = (message: string, secret: string) => {};

  return (
    <main>
      <h1 className="text-4xl font-extrabold text-center mt-10">
        Secure Encryption Tool
      </h1>

      <div className="text-center flex justify-center mt-5 text-lg">
        <h3 className="w-3/4 r">
          Encrypt and decrypt messages using industry-standard algorithms.
          Choose between OTP, AES, and 3DES for your security needs.
        </h3>
      </div>

      <div className="justify-center mt-10 flex">
        <AlgorithmSelector setMethodOfEncryption={setMethodOfEncryption} />
      </div>

      <div className=" flex px-5 justify-around my-10">
        <div className="border-2 py-8 rounded-xl w-2/5">
          <TextBox
            takeAction={handleEncrypt}
            action="Encrypt"
            messageToShow="temp message"
            title="Encrypt a message"
          />
        </div>
        <div className="border-2 py-8 rounded-xl w-2/5">
          <TextBox
            takeAction={handleDecrypt}
            action="Decrypt"
            messageToShow=""
            title="Decrypt a message"
          />
        </div>
      </div>
    </main>
  );
}
