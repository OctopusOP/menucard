"use client";

import React, { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState({});
  const [pritam, setPritam] = useState(false);

  const fetcher = async () => {
    const res = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );
    const temp = await res.json();
    setData(temp);
    setPritam(false);
  };

  useEffect(() => {
    fetcher();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center transition-all duration-300 hover:shadow-blue-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          {data.setup}
        </h1>

        {pritam && (
          <p className="text-lg text-gray-600 mb-4">{data.punchline}</p>
        )}

        <button
          onClick={() => setPritam(true)}
          className="mr-3 inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md"
        >
          Show Answer
        </button>
        <button
          onClick={() => setPritam(false)}
          className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium shadow-md"
        >
          Hide Answer
        </button>

        <button
          className="mt-8 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 active:scale-95 transition-transform"
          onClick={fetcher}
        >
          Fetch New Joke
        </button>
      </div>
    </div>
  );
};

export default page;
