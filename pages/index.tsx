import { ConnectButton } from "@rainbow-me/rainbowkit"
import React, { useEffect, useState } from "react"
import { useAccount } from "wagmi"
import Typewriter from "typewriter-effect"

function Landing() {
  const { isConnected } = useAccount()
  const timer = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
      }, 15000)
    })
  }
  useEffect(() => {
    if (isConnected) {
      // route to home if connected with metamask
      timer().then(() => (window.location.href = "/home"))
    }
  }, [isConnected])

  return (
    <>
      <section className='relative bg-background-light flex flex-col h-screen justify-center items-center'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          <div className='pt-32 pb-12 md:pt-40 md:pb-20'>
            <div className='text-center pb-12 md:pb-16'>
              <h1
                className='text-3xl text-text-light md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-text-dark'
                data-aos='zoom-y-out'
              >
                0xPlore
                <br />
                Decentralized Platform for{"  "}
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    cursor: "",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        `<h1 style='background: -webkit-linear-gradient(#1188f0, #f011d2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;'>Content Creators</h1>`
                      )
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString(
                        `<h1 style='background: -webkit-linear-gradient(#1188f0, #f011d2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;'>Artists</h1>`
                      )
                      .pauseFor(1500)
                      .deleteAll()
                      .typeString(
                        `<h1 style='background: -webkit-linear-gradient(#1188f0, #f011d2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;'>Explorers</h1>`
                      )
                      .pauseFor(2500)
                      .deleteAll()
                      .start()
                  }}
                />
              </h1>
              <div className='max-w-3xl mx-auto'>
                <p
                  className='text-xl text-gray-400 mb-8'
                  data-aos='zoom-y-out'
                  data-aos-delay='150'
                >
                  A Platform built on top of Polygon network, allow users to
                  create, share and watch videos, without worrying about their
                  privacy.Many more cool features in making...
                </p>
                <div className='flex justify-center'>
                  <ConnectButton
                    label='Connect Wallet'
                    accountStatus='address'
                    showBalance={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Landing
