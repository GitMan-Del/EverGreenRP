export default function Navbar() {
    return (
      <div className="w-full absolute top-5 left-0 p-2 z-50">
        <div className="max-w-[70%] mx-auto bg-[#0D0D0D]/60 backdrop-blur-md rounded-full flex items-center justify-between px-6 py-3 shadow-md">
          <img
            className="h-15 w-15 rounded-md"
            src="/logo.png"
            alt="logo"
          />
  
          <ul className="flex space-x-10 text-white text-sm font-medium">
            <li>
              <a
                href="#"
                className="px-4 py-2  relative rounded-lg bg-gradient-to-tr from-black/10 to-[#E2E2E2]/10  text-[#00E690] border border-[#00E690]/20 shadow-[0_0_50px_#00E690]/30 transition duration-300">Home
              <span className="absolute -bottom-3 right-1/2 translate-x-1/2  w-1 h-1 bg-[#00E690] rounded-full"></span>
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00E690] transition duration-300">Changelogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00E690] transition duration-300">Regulamente
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00E690] transition duration-300">Magazin
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  