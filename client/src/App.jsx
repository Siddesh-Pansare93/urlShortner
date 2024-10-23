import { useRef, useState } from 'react';
import {ToastContainer , toast } from 'react-toastify'
import svg from "./assets/urlShortner.svg"

function App() {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");


  const urlRef = useRef(null)

  const handleShorturl = async () => {
    const response = await fetch("https://minimizer-api.vercel.app/?vercelToolbarCode=aK9IMpcVfPG7dmQ/api/url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: url })
    });
    const data = await response.json();
    setShortenUrl(data);
  };


  const copyLinkToClipboard = ()=>{
    window.navigator.clipboard.writeText(shortenUrl);
    toast.success("Link Succesfully copied to clipboard ")
    // setShortenUrl("")
  }

  return (
    
    <div className='bg-white h-screen w-screen flex flex-col justify-center items-center p-4'>

      <h1 className='text-blue-700 text-3xl sm:text-4xl font-bold mb-6 text-center'>URL Shortener</h1>
      <img src={svg} className='h-[30%] m-10'/>
      <div className='flex flex-col w-full max-w-md'>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className='text-[1.5rem] h-12 mb-4 rounded-lg p-2 border border-black focus:border-green-600'
          placeholder='Enter your URL here'
        />
        <button 
          className="bg-blue-600 h-12 w-[50%] font-semibold text-xl p-3 rounded-xl  hover:bg-blue-600" 
          onClick={handleShorturl}
        >
          Shorten
        </button>
      </div>
      <div className='flex w-full max-w-md justify-center mt-6'>
        <input 
          type='text' 
          className='text-2xl h-12 bg-gray-200 border border-blue-300 w-full text-center rounded-md' 
          disabled 
          value={shortenUrl || ""}
          ref={urlRef}
          placeholder='---'
        />
        <button 
        className='bg-orange-500 ml-4 p-2 rounded-lg font-bold  hover:scale-[1.1]'
        onClick={copyLinkToClipboard}
        >
          Copy 
        </button>
      </div>
    </div>
  );
}

export default App;
