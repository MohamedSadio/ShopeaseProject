import React, { useState } from 'react';
import Wishlist from '../common/Wishlist';
import AccountIcon from '../common/AccountIcon';
import CartIcon from '../common/CartIcon';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='relative'>
      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center py-6 px-40px justify-between gap-40'>
        <div className='flex items-center gap-6'>
          {/* Logo */}
          <Link to='/' className='text-3xl font-bold text-black gap-8'>Shopease</Link>
        </div>
        <div className='flex flex-wrap items-center gap-10 flex-1'>
          {/* Nav items */}
          <ul className='flex gap-14 text-gray-600 hover:text-black'>
            <li><NavLink to='/' className={({isActive})=> isActive ? 'active-link':''}>Shop</NavLink></li>
            <li><NavLink to='/men' className={({isActive})=> isActive ? 'active-link':''}>Men</NavLink></li>
            <li><NavLink to='/women' className={({isActive})=> isActive ? 'active-link':''}>Women</NavLink></li>
            <li><NavLink to='/kids' className={({isActive})=> isActive ? 'active-link':''}>Kids</NavLink></li>
          </ul>   
        </div>
        <div className='flex justify-center'>
          {/* Search bar */}
          <div className='border rounded flex overflow-hidden'>
            <div className="flex items-center justify-center px-4 border border-gray-300">
              <svg className="h-4 w-4 text-grey-dark " fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
              </svg>
              <input type="text" className="px-4 py-2 outline-none" placeholder="Search"/>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap items-center gap-4'>
          {/* Action items */}
          <ul className='flex items-center gap-8'>
            <li><button><Wishlist /></button></li>
            <li><button><AccountIcon /></button></li>
            <li><Link to='/'><CartIcon /></Link></li>
          </ul>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className='md:hidden flex items-center justify-between py-4 px-15px'>
        <div className='flex items-center'>
          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu} 
            className='p-2 focus:outline-none'
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
          
          {/* Logo */}
          <Link to='/' className='text-2xl font-bold text-black ml-2'>Shopease</Link>
        </div>
        
        <div className='flex items-center gap-3'>
          {/* Search Icon for Mobile */}
          <button className='p-2'>
            <svg className="h-5 w-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
            </svg>
          </button>
          
          {/* Cart Icon (always visible) */}
          <Link to='/' className='p-2'><CartIcon /></Link>
        </div>
      </div>

      {/* Mobile Menu (collapsible) */}
      {isMenuOpen && (
        <div className='md:hidden bg-white absolute top-16 left-0 w-full z-50 border-t shadow-lg'>
          {/* Mobile Navigation Links */}
          <ul className='flex flex-col text-gray-600'>
            <li className='py-3 px-15px border-b'><NavLink to='/' className={({isActive})=> isActive ? 'active-link':''} onClick={toggleMenu}>Shop</NavLink></li>
            <li className='py-3 px-15px border-b'><NavLink to='/men' className={({isActive})=> isActive ? 'active-link':''} onClick={toggleMenu}>Men</NavLink></li>
            <li className='py-3 px-15px border-b'><NavLink to='/women' className={({isActive})=> isActive ? 'active-link':''} onClick={toggleMenu}>Women</NavLink></li>
            <li className='py-3 px-15px border-b'><NavLink to='/kids' className={({isActive})=> isActive ? 'active-link':''} onClick={toggleMenu}>Kids</NavLink></li>
          </ul>
          
          {/* Mobile Search Bar */}
          <div className='px-15px py-3 border-b'>
            <div className='border rounded flex overflow-hidden'>
              <div className="flex items-center justify-center px-10px border border-gray-300 w-full">
                <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                </svg>
                <input type="text" className="px-10px py-2 outline-none w-full text-14px" placeholder="Search"/>
              </div>
            </div>
          </div>
          
          {/* Mobile Action Icons */}
          <div className='flex justify-around py-3 border-b'>
            <button className='p-2 flex flex-col items-center'>
              <Wishlist />
              <span className='text-12px mt-1'>Wishlist</span>
            </button>
            <button className='p-2 flex flex-col items-center'>
              <AccountIcon />
              <span className='text-12px mt-1'>Account</span>
            </button>
            <Link to='/' className='p-2 flex flex-col items-center' onClick={toggleMenu}>
              <CartIcon />
              <span className='text-12px mt-1'>Cart</span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;