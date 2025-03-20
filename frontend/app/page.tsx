import Image from "next/image";
import AlgorithmSelector from "./components/algorithmSelector";
import TextBox from "./components/textBox";

export default function Home() {
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
        <AlgorithmSelector />
      </div>
      <div className=" flex px-5 justify-around my-10">
        <div className="border-2 py-8 rounded-xl w-2/5">
          <TextBox action="Encrypt" messageToShow="temp message" title="Encrypt a message" />
        </div>
        <div className="border-2 py-8 rounded-xl w-2/5">
          <TextBox action="Decrypt" messageToShow="" title="Decrypt a message" />
        </div>
      </div>
      
    </main>
  );
}
