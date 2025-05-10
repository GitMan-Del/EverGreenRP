"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <div className="w-full flex justify-center items-center h-screen relative overflow-hidden">
      <img
        className="absolute pointer-events-none top-0 left-0 w-full h-full object-cover"
        src="/BG.png"
        alt="bg"
      />
      <Navbar />
      <div className="flex flex-row justify-between items-center w-[70%] z-50 text-white mx-auto  rounded-2xl p-10">
        <div className="flex flex-col space-y-10 text-left mr-10">
          <h1 className="font-extrabold text-5xl leading-normal">
            Pentru cei care nu doar joaca , <br /> ci traiesc Roleplay-ul.
          </h1>
          <p className="text-xl font-light max-w-[500px]">
            EverGreen RP este locul unde povestile prind viata, iar fiecare
            personaj e mai mult decat un nume pe ecran. O comunitate construita
            de pasionati, pentru pasionati, unde roleplay-ul nu este doar un joc
            - este o experienta. Intra intr-un univers viu, plin de actiune,
            emotie si creativitate, intra si scrie-ti propria poveste.
          </p>
          <div className="flex flex-row items-center space-x-4">
          <Link href="/play">
            <div className="relative w-[200px] h-[55px] cursor-pointer group">
              <svg
                viewBox="0 0 400 150"
                className="absolute top-0 left-0 w-full h-full"
                preserveAspectRatio="none"
              >
               <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#00E690" />
                    <stop offset="50%" stopColor="#81DBBA" />
                    <stop offset="100%" stopColor="#00B572" />
                  </linearGradient>
                </defs>
                <polygon
                  points="70,0 380,0 330,150 0,150"
                  fill="url(#gradient)"
                  stroke="#00ff99"
                  strokeWidth="4"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-2xl italic drop-shadow-lg">
                  JOACA ACUM
                </span>
              </div>
            </div>
          </Link>

          
          <Link href="https://discord.gg/linkul-tau" target="_blank">
            <div className="relative w-[300px] h-[60px] cursor-pointer  group">
              <svg
                viewBox="0 0 400 150"
                className="absolute top-0 left-0 w-full h-full"
                preserveAspectRatio="none"
              >
                <polygon
                  points="20,0 380,0 360,150 0,150"
                />
              </svg>

              <div className="absolute inset-0 flex items-center justify-left  gap-5 px-4 z-20">
                <div className="h-10 w-10  blur-xl bg-gray-300 absolute bottom-5 left-20 z-10"></div>
                <div className="flex flex-col justify-center p-3">
                  <span className="text-white font-bold text-2xl  drop-shadow-lg leading-tight">
                    Membrii Discord
                  </span>
                  <span className="text-white text-sm opacity-80">
                  Alatura-te comunitatii si pe discord! 
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-7">
                    <Image
                      src="/Avatar3.png"
                      alt=""
                      width={30}
                      height={30}
                      className="rounded-full "
                    />
                    <Image
                      src="/Avatar2.png"
                      alt=""
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <Image
                      src="/Avatar.png"
                      alt=""
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                  </div>
                    <div className="bg-[#00E676] p-2 flex items-center justify-center rounded-lg text-md font-bold text-black">
                      +396
                    </div>
                </div>
              </div>
            </div>
          </Link>

          </div>
        </div>
        <div className="relative w-[500px] overflow-hidden rounded-2xl shadow-lg">
          <video
            className="w-full h-auto rounded-2xl"
            controls={false}
            poster="/2.png"
            preload="metadata"
          >
            <source src="/test.mp4" type="/test.mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
     </div>
     <section className="w-full relative h-screen  text-white overflow-hidden">
     <div className="w-96 h-96 z-10 bg-[#00E676] absolute bottom-0 left-24 blur-[250px]"></div>
      <img
        className="absolute pointer-events-none top-0 left-0 w-full h-full object-cover"
        src="/Bg2.png"
        alt="bg"/>
     
      <img
        className="absolute pointer-events-none bottom-0 right-0 w-full h-full object-fill"
        src="/gtao-artwork.png"
        alt="bg"/>

{/* bg-gradient-to-b from-0% from-[#00E690] to-100% to-[#008050] border-2   border-[#00764A]/40  */}
          <div className="relative z-10 flex flex-row items-center p-10 w-full h-full">
            <div className="flex space-x-10 w-full justify-end">
              {/* Card 1 */}
              <div className="w-[250px] h-[300px] rounded-2xl overflow-hidden relative group">
                <img className="object-cover w-full h-full" src="/img1.png" alt="Music System" />
                <div className="absolute bottom-0 w-full h-1/3 bg-black/30 backdrop-blur-md p-4 flex flex-col justify-center">
                <div className="flex space-x-2 items-center">
                  <div className="h-5 w-1 bg-[#00E676]"></div>
                  <h3 className="text-white text-lg font-semibold">Music System</h3>
                </div>
                  <p className="text-gray-300 text-sm">Descopera mai mult <span className="text-green-400 underline cursor-pointer">aici.</span></p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-[250px] h-[300px] rounded-2xl overflow-hidden relative group">
                <img className="object-cover w-full h-full" src="/img2.png" alt="Car Crafting" />
                <div className="absolute bottom-0 w-full h-1/3 bg-black/30 backdrop-blur-md p-4 flex flex-col justify-center">
                  <div className="flex space-x-2 items-center">
                  <div className="h-5 w-1 bg-[#00E676]"></div>
                  <h3 className="text-white text-lg font-semibold">Car Crafting</h3>
                </div>
                  <p className="text-gray-300 text-sm">Descopera mai mult <span className="text-green-400 underline cursor-pointer">aici.</span></p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-[250px] h-[300px] rounded-2xl overflow-hidden relative group">
                <img className="object-cover w-full h-full" src="/img3.png" alt="Sistem Vamal" />
                <div className="absolute bottom-0 w-full h-1/3 bg-black/30 backdrop-blur-md p-4 flex flex-col justify-center">
                <div className="flex space-x-2 items-center">
                  <div className="h-5 w-1 bg-[#00E676]"></div>
                  <h3 className="text-white text-lg font-semibold">Sistem Vamal</h3>
                </div>
                  <p className="text-gray-300 text-sm">Descopera mai mult <span className="text-green-400 underline cursor-pointer">aici.</span></p>
                </div>
              </div>
            </div>
          </div>



     
      <div className="absolute bottom-0 w-full">
     
        <img 
          className="w-full h-64 object-cover opacity-95" 
          src="/test.svg" 
          alt="a" 
        />
     
        <div className="absolute bottom-20 left-30 text-white flex flex-row items-center space-x-4">
          <div className="flex bg-[#D9D9D9] rounded-2xl w-20 h-20 items-center justify-center">
            <h1 className="text-black">ICON</h1>
          </div>
          <div className="flex items-left flex-col">
          <h1 className="text-5xl font-extrabold">De Ce Să Alegi Serverul Nostru de Roleplay?</h1>
          <p className="text-xl mt-2">Descopera aici cateva beneficii si avantaje a le serverului.</p>
          </div>
        </div>
      </div>
    </section>

    
    </div>
  );
}
