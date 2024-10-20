import { useState } from 'react';

function App() {
  const [url, setUrl] = useState("");
  const [shortenUrl, setShortenUrl] = useState("");

  const handleShorturl = async () => {
    const response = await fetch("http://localhost:8000/api/url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url: url })
    });
    const data = await response.json();
    setShortenUrl(data);
  };

  return (
    <div className='bg-black h-screen w-screen flex flex-col justify-center items-center p-4'>
      <h1 className='text-blue-700 text-3xl sm:text-4xl font-bold mb-6 text-center'>URL Shortener</h1>
      <div className='flex flex-col w-full max-w-md'>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className='text-2xl h-12 mb-4 rounded-lg p-2'
          placeholder='Enter your URL here'
        />
        <button 
          className="bg-blue-700 h-12 font-bold text-xl p-3 rounded-xl transition duration-200 hover:bg-blue-600" 
          onClick={handleShorturl}
        >
          Shorten
        </button>
      </div>
      <div className='flex w-full max-w-md justify-center mt-6'>
        <input 
          type='text' 
          className='text-2xl h-12 bg-white w-full text-center rounded-lg' 
          disabled 
          value={shortenUrl || ""}
        />
      </div>
    </div>
  );
}

export default App;
