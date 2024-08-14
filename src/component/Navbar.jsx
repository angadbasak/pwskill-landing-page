import React from 'react'

function Navbar() {
  return (
    <div>
        <nav class="w-full h-14 bg-indigo-200 flex justify-between px-4 md:px-4 items-center">
        <div class="text-2xl text-indigo-700 font-bold">PW Skills</div>
        <ul class="md:flex hidden font-semibold">
            <li class="mx-[10px] cursor-pointer">Home</li>
            <li class="mx-[10px] cursor-pointer">About Us</li>
            <li class="mx-[10px] cursor-pointer">Contact Us</li>
        </ul>
        <div class="hidden md:block px-2 py-2 bg-indigo-700 text-white rounded font-bold cursor-pointer">Login/Signup</div>
        <div class="md:hidden">
            <a href="#">&#8801;</a>
        </div>
    </nav>
    </div>
  )
}

export default Navbar