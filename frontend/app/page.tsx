import Image from "next/image";
import AlgorithmSelector from "./components/algorithmSelector"; 

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

    </main>
  );
}
