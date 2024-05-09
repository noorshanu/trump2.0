import React from "react";
import { FaTelegram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
function Hero() {
  return (
    <section className=" bg-main py-[2rem] sm:py-[8rem]">
      <div className=" container-wrapper">
        <div className=" flex flex-col justify-center items-center pt-0 sm:pt-[1rem]">
          <h1 className=" asul-bold text-xl sm:text-3xl font-semibold py-4">
            Laugh, stake, and collect rewards with TrumpWif on Solana!
          </h1>
          <img
            src="images/logo.png"
            alt=""
            className=" rounded-full h-[350px] mb-4"
          />

          <div className="bg-[#ab3435] rounded-full py-2 px-4 my-3">
            <a
              href="https://solscan.io/token/8n7ied5xpzGbLiL7nGL5dwoTfFYudfxbqHa3pQaG5ihy"
              target="_blank"
              className="asul-bold text-xs sm:text-2xl"
            >
            8n7ied5xpzGbLiL7nGL5dwoTfFYudfxbqHa3pQaG5ihy
            </a>
          </div>

          <div className="flex justify-center gap-4 items-center">
            <a
              href="https://www.dextools.io/app/en/solana/pair-explorer/BdXhxzBizWqK88A8YZfWxuSoEgodpQmKgS6LSzWrpRWv?t=1715246688168"
              target="_blank"
              className="bg-[#ab3435] rounded-full text-lg sm:text-2xl py-2 px-6 font-bold asul-bold  border-2 border-black"
            >
              DEXTOOLS
            </a>

            <div className=" flex justify-center gap-4 items-center">
              <a
                href="https://t.me/trumpwifs"
                target="_blank"
                className=" text-5xl "
              >
                <FaTelegram />
              </a>

              <a
                href="https://twitter.com/trump_wif1"
                target="_blank"
                className=" text-5xl"
              >
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
