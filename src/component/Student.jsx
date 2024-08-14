import React from 'react'

function Student() {
  return (
    <div>
        <div className="h-auto w-100 flax-wrap flex-col items-center texts-center p-10">
        <div className="w-full h-auto flex flex-col items-center">
            <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">"Pure Hardwork No Shortcuts!"</p>
            <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-46 flex flex-col items-center mb-12">
                <img className="w-36" src="https://cdn-icons-png.flaticon.com/512/3429/3429149.png" alt=""/>
                <p className="text-2xl font-bold text-white">600+</p>
                <p className="text-2xl font-bold text-gray-500">Different Courses</p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
                <img className="w-36" src="https://cdn-icons-png.flaticon.com/512/2330/2330919.png" alt=""/>
                <p className="text-2xl font-bold text-white">700,000+</p>
                <p className="text-2xl font-bold text-gray-500">Students Enrolled</p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
                <img className="w-36" src="https://cdn-icons-png.flaticon.com/512/6963/6963703.png" alt=""/>
                <p className="text-2xl font-bold text-white">600+</p>
                <p className="text-2xl font-bold text-gray-500">Successful Transition</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Student