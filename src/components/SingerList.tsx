import React from "react";

const singers = [
  { name: "شادمهر عقیلی" },
  { name: "معین و نعمت" },
  { name: "محسن لرستانی" },
  { name: "مهستی" },
  { name: "هایده" },
  { name: "امیر تتلو" },
  { name: "محمدرضا گلزار" },
  { name: "سیاوش قمیشی" },
  { name: "رضا پیشرو" },
  { name: "حمیرا" },
  { name: "ابی" },
  { name: "محسن چاوشی" },
  { name: "ساسی مانکن" },
  { name: "حامیم" },
  { name: "ابراهیم تاتلیس" },
  { name: "هایده و مهستی" },
  { name: "امیرحسین مقصودلو (امیر تتلو)" },
  { name: "معین و هایده" },
];

const SingerList = () => (
  <div
    className="w-full h-full bg-[#181820] text-white rounded-2xl p-8 flex flex-col gap-8"
    dir="rtl"
  >
    <div className="flex items-center justify-between mb-6">
      <h1 className="text-4xl font-bold">خوانندگان</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="...جستجوی خواننده"
            className="bg-[#23232b] text-white rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-[#23232b]"
          />
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 6.5 6.5a7.5 7.5 0 0 0 10.6 10.6Z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
    <div className="flex gap-4 mb-8">
      <button className="bg-[#23232b] text-white rounded-md px-6 py-2">
        محبوب‌ترین
      </button>
      <button className="bg-[#23232b] text-white rounded-md px-6 py-2">
        جدیدترین
      </button>
    </div>
    <div className="grid grid-cols-6 gap-y-8 gap-x-4">
      {singers.map((singer, idx) => (
        <div key={idx} className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="text-blue-400 font-bold">{singer.name}</span>
            <img
              src="https://via.placeholder.com/24x24"
              alt={singer.name}
              className="inline-block rounded-full w-6 h-6 object-cover"
            />
          </div>
          <span className="text-sm text-white/80">{singer.name}</span>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-8">
      <div className="flex items-center gap-1 bg-[#23232b] rounded-md px-4 py-2">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            className={`px-2 py-1 rounded ${
              n === 1 ? "bg-green-600 text-white" : "text-white/80"
            }`}
          >
            {n}
          </button>
        ))}
        <span className="text-white/50 px-2">...</span>
        <button className="text-white/80 px-2 py-1 rounded">»</button>
      </div>
    </div>
  </div>
);

export default SingerList;
