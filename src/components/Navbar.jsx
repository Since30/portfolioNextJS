import Image from 'next/image';
import Link from 'next/link';
import React, { useState,useEffect } from 'react';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../../public/asset/Logo1.png'

const Navbar = () => {
  const[nav,setNav] = useState(false)
  const[shadow,setShadow] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }  

  useEffect(() => {
    const handleShadow = () => {
      if(window.scrollY > 90){
        setShadow(true)
      }else{
        setShadow(false)
      }
  };
    window.addEventListener('scroll',handleShadow)
  }, [])

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 shadow-xl z-[100]'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'>
          
            <Image
              src={Logo}
              alt='/'
              width='125'
              height='50'
              className='cursor-pointer'
            />
          
        </Link>
        <div>
          <ul  className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/'>Acceuil</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='#about'>A propos</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='#skills'>Compétences</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='#project'>Projets</Link>
            </li>
            
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='#contact'>Contact</Link>
            </li>
          </ul>
          
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

    
      <div
        className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/10' : ''}>
       
        <div
          className={
            nav
            ?'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
            :'fixed left-[-100%] top-0  p-10 ease-in duration-500'
          }
        >
          <div>
            <div className='flex w-full items-center justify-between'>
              <Link href='/'>
                
                  <Image
                    src={Logo}
                    width='87'
                    height='35'
                    alt='/'
                  />
                
              </Link>
              <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                <AiOutlineClose />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <p className='w-[85%] md:w-[90%] py-4'>
                Construisons ensemble quelques chose de légendaire
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  Accceuil
                </li>
              </Link>
              <Link href='#about'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  A propos
                </li>
              </Link>
              <Link href='#skills'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  Compétences
                </li>
              </Link>
              <Link href='#project'>
                <li onClick={()=> setNav(false)} className='py-4 text-sm'>
                  Projets
                </li>
              </Link>
              
              <Link onClick={()=> setNav(false)} href='#contact'>
                <li  className='py-4 text-sm'>
                  Contact
                </li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let's Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <Link
                  href='/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href='/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </Link>
                <Link href='/'>
                  <div
                    
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/'>
                  <div
                    
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
