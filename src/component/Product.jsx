import React from 'react'

function Product() {
  return (
    <div>
        <div className="h-auto w-100 flax-wrap flex-col items-center texts-center p-10">
        <div className="w-full h-auto flex flex-col items-center">
            <p className="text-indigo-800 font-bold text-3xl md:text-4xl text-center">Our Products</p>
            <div className="w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12"></div>
        </div>
        <div className="w-full flex flex-wrap justify-evenly">
            <div className="w-46 flex flex-col items-center mb-12">
                <img className="w-36" src="https://cdn-icons-png.flaticon.com/512/10262/10262344.png" alt="skill logo"/>
                <p className="text-2xl font-bold text-white">600+</p>
                <p className="text-2xl font-bold text-gray-500">Different Courses</p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
                <img className="w-36" src="https://cdn-icons-png.flaticon.com/512/11890/11890806.png" alt="Job Portal"/>
                <p className="text-2xl font-bold text-white">Job Portal</p>
                <p className="text-2xl font-bold text-gray-500">Students Enrolled</p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
                <img className="w-36" src="https://cdn-icons-png.flaticon.com/512/13441/13441798.png" alt=""/>
                <p className="text-2xl font-bold text-white pb-8"></p>
                <p className="text-2xl font-bold text-gray-500">Self Paced Learning</p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
                <img className="w-36" src="https://cdn-icons-png.flaticon.com/512/5024/5024468.png" alt=""/>
                <p className="text-2xl font-bold text-white pb-8"></p>
                <p className="text-2xl font-bold text-gray-500">Affiliate Marketing</p>
            </div>
            <div className="w-46 flex flex-col items-center mb-12">
                <img className="w-36 fill-white" src="https://cdn-icons-png.flaticon.com/512/7655/7655798.png" alt=""/>
                <p className="text-2xl font-bold text-white pb-8"></p>
                <p className="text-2xl font-bold text-gray-500">100K+ career transactions</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Product