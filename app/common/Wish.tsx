import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db, sendWish } from "../firebase";
import { RxEnvelopeOpen } from "react-icons/rx";
import { RevealWrapper } from "next-reveal";
import { AiOutlineClockCircle } from "react-icons/ai";

const Wish = () => {
  const [inputValue, setInputValue] = useState<{
    name: string;
    wish: string;
  }>({
    name: "",
    wish: "",
  });
  const [wishData, setWishData] = useState<DocumentData[]>([]);
  useEffect(() => {
    const q = query(collection(db, "wish"), orderBy("time", "desc"));

    return onSnapshot(q, (querySnapshot) => {
      setWishData(
        querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, []);

  function getZero(num: number) {
    return num < 10 ? `0${num}` : num;
  }

  return (
    <section id="wish">
      <div className="bg-[url('/images/bg.png')] bg-center bg-no-repeat bg-cover px-8 py-16 lg:px-10 space-y-8 -mt-4">
        <RevealWrapper duration={2500} origin="bottom" className="space-y-8">
          <h1 className="text-xl italic font-light text-center text-gray-900">
            Wishes
          </h1>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Nama"
              className="text-[0.8rem] py-2 px-3 placeholder:text-[#5a5a5a50] text-gray-900 border-b border-[#A99D87] rounded "
              value={inputValue.name}
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
            />
            <textarea
              placeholder="Berikan Ucapan dan Doa"
              className="h-24 text-[0.8rem] py-2 px-3 placeholder:text-[#5a5a5a50] text-gray-900 border-b border-[#A99D87] rounded"
              value={inputValue.wish}
              onChange={(e) =>
                setInputValue({ ...inputValue, wish: e.target.value })
              }
            />
            <button
              onClick={() => {
                if (inputValue.name === "")
                  return alert("Mohon masukkan nama anda.");
                if (inputValue.wish === "")
                  return alert("Mohon masukkan ucapan dan doa anda.");

                sendWish(inputValue.name, inputValue.wish);
                setInputValue({
                  ...inputValue,
                  name: "",
                  wish: "",
                });
              }}
              className="text-[0.75rem] bg-[#06a1da] flex items-center w-fit rounded text-white gap-2 py-2 px-4 font-bold hover:scale-90 ease-linear duration-[0.2s]"
            >
              <RxEnvelopeOpen />
              <span>Kirim</span>
            </button>
          </div>
        </RevealWrapper>
        <div className="space-y-4 max-h-[400px] overflow-y-auto">
          {wishData.map((data) => {
            const date = new Date(data.time?.seconds * 1000);
            return (
              <div
                key={data.id}
                className="bg-white p-4 border-b border-[#a99d87] rounded font-light text-[#424242] flex flex-col gap-2"
              >
                <p className="flex items-center gap-2">
                  <span className="font-extrabold text-sm">{data.name}</span>
                </p>
                <p className="text-[0.75rem]">{data.wish}</p>
                <p className="flex items-center gap-1 text-[0.75rem]">
                  <AiOutlineClockCircle />
                  <span className="flex gap-2">
                    <span>
                      {getZero(date.getDate())}/{getZero(date.getMonth())}/
                      {getZero(date.getFullYear())}
                    </span>
                    <span>
                      {getZero(date.getHours())}:{getZero(date.getMinutes())}:
                      {getZero(date.getSeconds())}
                    </span>
                  </span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Wish;
