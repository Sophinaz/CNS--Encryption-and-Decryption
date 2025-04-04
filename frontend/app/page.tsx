"use client";
import {
  useDecryptWith3DESMutation,
  useDecryptWithAESMutation,
  useDecryptWithOTPMutation,
  useDecryptWithRSAMutation,
  useEncryptWith3DESMutation,
  useEncryptWithAESMutation,
  useEncryptWithOTPMutation,
  useEncryptWithRSAMutation,
} from "@/lib/redux/api/getApi";
import AlgorithmSelector from "./components/algorithmSelector";
import TextBox from "./components/textBox";
import { useState } from "react";
import GeneratePairOfKeys from "./components/GeneratePairOfKeys";

export default function Home() {
  const [method, setMethod] = useState("aes");
  const [encryptMessage, setEncryptMessage] = useState("");
  const [decryptMessage, setDecryptMessage] = useState("");
  const [enMessage, setEnMessage] = useState("");
  const [decMessage, setDecMessage] = useState("");
  const [rsaEncMessage, setRSAEncMessage] = useState("");
  const [rsaDecMessage, setRSADecMessage] = useState("");

  const [encryptWithAES] = useEncryptWithAESMutation();
  const [decryptWithAES] = useDecryptWithAESMutation();
  const [encryptWith3DES] = useEncryptWith3DESMutation();
  const [decryptWith3DES] = useDecryptWith3DESMutation();
  const [encryptWithOTP] = useEncryptWithOTPMutation();
  const [decryptWithOTP] = useDecryptWithOTPMutation();
  const [decryptWithRSA] = useDecryptWithRSAMutation();
  const [encryptWithRSA] = useEncryptWithRSAMutation();

  const setMethodOfEncryption = (choice: string) => {
    setMethod(choice);
  };

  interface typeData {
    message: string;
    secret: string;
  }
  interface typeResult {
    data: {};
  }

  const handleEncrypt = async (
    message: string,
    secret: string,
    encryptionMethod: (data: typeData) => void
  ) => {
    try {
      const data = {
        message: message,
        secret: secret,
      };

      const result: any = await encryptionMethod(data);
      console.log("result", result);
      setEnMessage(result.data.encryptedMessage);
    } catch (error) {
      console.log("error", error);
      alert("Failed");
    }
  };

  const handleDecrypt = async (
    message: string,
    secret: string,
    decryptionMethod: (data: typeData) => void
  ) => {
    try {
      const data = {
        message: message,
        secret: secret,
      };

      const result: any = await decryptionMethod(data);
      setDecMessage(result.data.decryptedMessage);
    } catch (error) {
      alert("Failed");
    }
  };

  const handleGeneralEncryption = (message: string, secret: string) => {
    if (method === "aes") {
      handleEncrypt(message, secret, encryptWithAES);
    } else if (method === "3des") {
      handleEncrypt(message, secret, encryptWith3DES);
    } else {
      handleEncrypt(message, secret, encryptWithOTP);
    }
  };

  const handleGeneralDecryption = (message: string, secret: string) => {
    if (method === "aes") {
      handleDecrypt(message, secret, decryptWithAES);
    } else if (method === "3des") {
      handleDecrypt(message, secret, decryptWith3DES);
    } else {
      handleDecrypt(message, secret, decryptWithOTP);
    }
  };

  const encryptWithPublicKey = async (message: string, publicKey: string) => {
    try {
      const data = {
        message: message,
        secret: publicKey,
      };
      console.log("data", data)
      const result = await encryptWithRSA(data);
      setRSAEncMessage(result.data.encryptedMessage);
    } catch (error) {
      console.error(error);
    }
  };


  const decryptWithPrivateKey = async (message: string, privateKey: string) => {
    try {
      const data = {
        message: message,
        secret: privateKey,
      };
      const result = await decryptWithRSA(data);
      setRSADecMessage(result.data.decryptedMessage);
    } catch (error) {
      console.error(error);
    }
  };

  const generatePairOfKeys = () => {};

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
            takeAction={handleGeneralEncryption}
            action="Encrypt"
            messageToShow={enMessage}
            title="Encrypt a message"
            Ekey="Encryption key"
          />
        </div>
        <div className="border-2 py-8 rounded-xl w-2/5">
          <TextBox
            takeAction={handleGeneralDecryption}
            action="Decrypt"
            messageToShow={decMessage}
            title="Decrypt a message"
            Ekey="Decryption key"
          />
        </div>
      </div>

      <h1 className="text-center mt-2 mb-2 font-bold text-2xl">
        RSA Encryption and Decryption
      </h1>

      {/* <div className="flex justify-center">
        <GeneratePairOfKeys />
      </div> */}

      <div className=" flex px-5 justify-around my-10">
        <div className="border-2 py-8 rounded-xl w-2/5">
          <TextBox
            takeAction={encryptWithPublicKey}
            action="Encrypt"
            messageToShow={rsaEncMessage}
            title="Use your public key to encrypt your message"
            Ekey="public key"
          />
        </div>
        <div className="border-2 py-8 rounded-xl w-2/5">
          <TextBox
            takeAction={decryptWithPrivateKey}
            action="Decrypt"
            messageToShow={rsaDecMessage}
            title="Use your private key to decrypt your message"
            Ekey="private key"
          />
        </div>
      </div>
    </main>
  );
}
