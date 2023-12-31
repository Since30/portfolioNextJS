import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Image4 from '/public/asset/contact/Image3.jpg';
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          {/* left */}
          <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full '>
              <div>
                <Image
                  className='rounded-xl hover:scale-105 ease-in duration-300'
                  src={Image4}
                  alt='/'
                />
              </div>
              <div>
                <h2 className='py-2'>Aflou Soulaimane</h2>
                <p>Devellopeur Frontend et Backend</p>
                <p className='py-4'>
                   Je suis un devellopeur junior qui cherche sa premiere experience pro dans le monde du developpement web
                </p>
              </div>
              <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                  <a
                    href='https://www.linkedin.com/in/soulaimane-aflou-041546264/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href='https://github.com/Since30'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                      <FaGithub />
                    </div>
                  </a>

                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                  <Link href='/resume'>
                    
                      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsFillPersonLinesFill />
                      </div>
                    
                  </Link>
                </div>
              </div>
            </div>
          </div>
                

                {/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Nom</label>
                                    <input 
                                    className='border-2 rounded-lg p-3 flex border-gray-300'
                                     type="text" />

                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Téléphone</label>
                                    <input 
                                    className='border-2 rounded-lg p-3 flex border-gray-300'
                                     type="text" />

                                </div>

                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input 
                                className='border-2 rounded-lg p-3 flex border-gray-300 w-full' 
                                type="mail" />

                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Sujet</label>
                                <input 
                                className='border-2 rounded-lg p-3 flex border-gray-300 w-full' 
                                type="text" />

                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300 ' rows='10'></textarea>

                            </div>
                            <button className='w-full p-4 text-gray-100 mt-4'>Envoyer un message</button>
                        </form>
                    </div>
                </div>
        </div>
        <div className='flex justify-center py-12'>
            <Link href='/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <HiOutlineChevronDoubleUp  size={30} className='text-[#5651e5]' />
                </div>
            </Link>
        </div>
    </div>
</div>
  )
}

export default Contact