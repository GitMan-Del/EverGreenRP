"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import Navbar from "./components/navbar"
import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0) 
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoRef = useRef<HTMLIFrameElement>(null)

  // YouTube video configuration
  const youtubeVideoId = "" // Replace with your YouTube video ID
  const youtubeThumbnail = "/2.png" // Using local image file

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Function to play YouTube video
  const playVideo = () => {
    setIsVideoPlaying(true)
  }

  // Smooth scroll function with improved physics
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const smoothScroll = (targetScrollLeft: number) => {
    if (!scrollRef.current) return

    const startTime = performance.now()
    const startScrollLeft = scrollRef.current.scrollLeft
    const duration = 300 // ms

    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const easeProgress = 1 - Math.pow(1 - progress, 3) // Cubic ease-out

      if (scrollRef.current) {
        scrollRef.current.scrollLeft = startScrollLeft + (targetScrollLeft - startScrollLeft) * easeProgress
      }

      if (progress < 1) {
        requestAnimationFrame(animateScroll)
      }
    }

    requestAnimationFrame(animateScroll)
  }

  // Infinite carousel logic
  const [cards] = useState([
    {
      img: "/img1.png",
      title: "Music System",
      desc: "Descoperă mai mult",
    },
    {
      img: "/img2.png",
      title: "Car Crafting",
      desc: "Descoperă mai mult",
    },
    {
      img: "/img3.png",
      title: "Sistem Vamal",
      desc: "Descoperă mai mult",
    },
    {
      img: "/img1.png",
      title: "Al 4-lea Card",
      desc: "Info aici",
    },
    {
      img: "/img2.png",
      title: "Alt Card",
      desc: "Detalii interesante",
    },
  ])

  // Clone cards for infinite effect
  useEffect(() => {
    if (scrollRef.current) {
      // Set initial scroll position to the middle set of cards
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth / 3
    }
  }, [])

  // Enhanced drag handlers for smoother scrolling
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
    // Change cursor style
    document.body.style.cursor = "grabbing"
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    document.body.style.cursor = "default"
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    document.body.style.cursor = "default"
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2 // Adjust for smoother scrolling
    const targetScrollLeft = scrollLeft - walk
    scrollRef.current.scrollLeft = targetScrollLeft
  }

  // Handle infinite scroll effect
  const handleScroll = () => {
    if (!scrollRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current

    // When reaching the end, jump to the beginning (clone)
    if (scrollLeft + clientWidth >= scrollWidth - 20) {
      scrollRef.current.scrollLeft = 0
    }

    // When reaching the beginning, jump to the end (clone)
    if (scrollLeft <= 20) {
      scrollRef.current.scrollLeft = scrollWidth - clientWidth - 20
    }
  }

  // Duplicate cards for infinite scrolling
  const allCards = [...cards, ...cards, ...cards]

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerChildren}
        className="w-full flex justify-center items-center h-screen relative overflow-hidden"
      >
        <Image
          className="absolute pointer-events-none top-0 left-0 w-full h-full object-cover"
          src="/BG.png"
          width={1920}
          height={1080}
          alt="bg"
        />
        <Navbar />
        <div className="flex flex-row justify-between items-center w-[70%] z-50 text-white mx-auto rounded-2xl p-10">
          <motion.div variants={staggerChildren} className="flex flex-col space-y-10 text-left mr-10">
            <motion.h1 variants={fadeInUp} className="font-extrabold text-5xl leading-normal">
              Pentru cei care nu doar joaca, <br /> ci traiesc Roleplay-ul.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl font-light max-w-[500px]">
              EverGreen RP este locul unde povestile prind viata, iar fiecare personaj e mai mult decat un nume pe
              ecran. O comunitate construita de pasionati, pentru pasionati, unde roleplay-ul nu este doar un joc - este
              o experienta. Intra intr-un univers viu, plin de actiune, emotie si creativitate, intra si scrie-ti
              propria poveste.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-row items-center space-x-4">
              <Link href="/play">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-[200px] h-[55px] cursor-pointer group"
                >
                  <svg viewBox="0 0 400 150" className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#00E690" />
                        <stop offset="50%" stopColor="#81DBBA" />
                        <stop offset="100%" stopColor="#00B572" />
                      </linearGradient>
                    </defs>
                    <polygon points="70,0 380,0 330,150 0,150" fill="url(#gradient)" stroke="#00ff99" strokeWidth="4" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl italic drop-shadow-lg">JOACA ACUM</span>
                  </div>
                </motion.div>
              </Link>

              <Link href="https://discord.gg/9XFvyBvNaa" target="_blank">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative w-[300px] h-[60px] cursor-pointer group"
                >
                  <svg viewBox="0 0 400 150" className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
                    <polygon points="20,0 380,0 360,150 0,150" />
                  </svg>

                  <div className="absolute inset-0 flex items-center justify-left gap-5 px-4 z-20">
                    <div className="h-10 w-10 blur-xl bg-gray-300 absolute bottom-5 left-20 z-10"></div>
                    <div className="flex flex-col justify-center p-3">
                      <span className="text-white font-bold text-2xl drop-shadow-lg leading-tight">
                        Membrii Discord
                      </span>
                      <span className="text-white text-sm opacity-80">Alatura-te comunitatii si pe discord!</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-7">
                        <Image src="/Avatar3.png" alt="" width={30} height={30} className="rounded-full" />
                        <Image src="/Avatar2.png" alt="" width={30} height={30} className="rounded-full" />
                        <Image src="/Avatar.png" alt="" width={30} height={30} className="rounded-full" />
                      </div>
                      <div className="bg-[#00E676] p-2 flex items-center justify-center rounded-lg text-md font-bold text-black">
                        +396
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>

          {/* YouTube Video Section */}
          <motion.div variants={fadeInUp} className="relative w-[500px] overflow-hidden rounded-2xl shadow-lg">
            {!isVideoPlaying ? (
              <div className="relative cursor-pointer" onClick={playVideo}>
                <Image
                  src={youtubeThumbnail || "/placeholder.svg"}
                  alt="Video thumbnail"
                  width={500}
                  height={281}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 rounded-full bg-black/50 flex items-center justify-center"
                  >
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 5V19L19 12L8 5Z" fill="white" />
                    </svg>
                  </motion.div>
                </div>
              </div>
            ) : (
              <iframe
                ref={videoRef}
                width="500"
                height="281"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-auto rounded-2xl"
              ></iframe>
            )}
          </motion.div>
        </div>
      </motion.div>

      <section className="w-full relative h-screen text-white overflow-hidden select-none">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-96 h-96 z-10 bg-[#00E676] absolute bottom-0 left-24 blur-[250px]"
        ></motion.div>
        <Image
          className="absolute pointer-events-none top-0 left-0 w-full h-full object-cover"
          src="/Bg2.png"
          width={1000}
          height={1000}
          alt="bg"
        />
        <Image
          className="absolute pointer-events-none bottom-0 right-0 w-full h-full object-fill"
          src="/gtao-artwork.png"
          width={1000}
          height={1000}
          alt="bg"
        />

        <div className="relative z-10 flex flex-row items-center p-10 w-full h-full">
          <div className="relative w-full flex justify-end">
            <div className="relative w-1/2">
              <motion.div
                ref={scrollRef}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                onScroll={handleScroll}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex overflow-x-scroll no-scrollbar space-x-6 w-full justify-start p-4 rounded-xl scroll-smooth cursor-grab"
                style={{
                  scrollBehavior: "smooth",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {allCards.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                    className="flex-shrink-0 w-[250px] h-[300px] rounded-2xl overflow-hidden relative group"
                  >
                    <Image
                      src={item.img || "/placeholder.svg"}
                      alt={item.title}
                      width={250}
                      height={300}
                      className="object-cover w-full h-full pointer-events-none select-none"
                      draggable={false}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="absolute bottom-0 w-full h-1/3 bg-black/30 backdrop-blur-md p-4 flex flex-col justify-center select-none"
                    >
                      <div className="flex space-x-2 items-center">
                        <div className="h-5 w-1 bg-[#00E676]"></div>
                        <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-gray-300 text-sm">
                        {item.desc} <span className="text-green-400 underline cursor-pointer">aici.</span>
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full">
          <Image
            className="w-full h-72 object-cover opacity-95"
            src="/test.svg"
            alt="Background"
            width={0}
            height={0}
          />
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute bottom-20 left-30 text-white flex flex-row items-center space-x-4 px-10"
          >
            <motion.div
              whileHover={{ rotate: 5, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex bg-[#D9D9D9] rounded-2xl w-20 h-20 items-center justify-center"
            >
              <h1 className="text-black">ICON</h1>
            </motion.div>
            <div className="flex flex-col">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-5xl font-extrabold"
              >
                De Ce Să Alegi Serverul Nostru de Roleplay?
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl mt-2"
              >
                Descoperă aici câteva beneficii și avantaje ale serverului.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
