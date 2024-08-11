import { RevealWrapper } from "next-reveal";
import AccountBank from "./partials/AccountBank";

const WeddingGift = () => {
  return (
    <section id="gift">
      <div className="bg-[url('/images/profile.jpg')] bg-cover bg-center relative px-8 pt-8 pb-12 lg:px-10 lg:pt-10 lg:pb-14">
        <div className="bg-transparent bg-[linear-gradient(360deg,#EAEAEA_53%,#06a1da_100%)] opacity-90 absolute inset-0"></div>
        <div className="space-y-8">
          <RevealWrapper duration={2500} origin="bottom" className="space-y-8">
            <h1 className="text-xl italic font-light text-center text-white">
              Wedding Gift
            </h1>
          </RevealWrapper>

          <RevealWrapper duration={2500} origin="bottom">
            <div className="flex flex-col gap-3">
              <p className="text-[0.8rem] text-white text-center">
                Bagi bapak/ibu/saudara/i yang ingin mengirimkan hadiah
                pernikahan dapat melalui virtual account atau e-wallet di bawah
                ini:
              </p>
            </div>
          </RevealWrapper>

          <RevealWrapper duration={2500} origin="bottom">
            <div className="flex flex-col gap-3">
              <AccountBank
                bank="BCA"
                number="7150943013"
                name="Subroto Yudha Harsanto"
              />
              <AccountBank
                bank="Sea Bank"
                number="901269753626"
                name="Siti Wulandari"
              />
              <AccountBank
                bank="DANA"
                number="089627671920"
                name="Subroto Yudha Harsanto"
              />
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
};

export default WeddingGift;
