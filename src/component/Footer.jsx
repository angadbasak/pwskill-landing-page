import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row justify-between md:px-12">
        <div>
            <img className="w-36" src="https://lab.pwskills.com/images/PWSkills-white.png" alt=""/>
            <p className="my-4">Email Us: support@pwskills.com</p>
            <img className="w-16" src="https://lab.pwskills.com/images/landingpage/iso-9001-2015.svg" alt=""/>
        </div>
        <div>
            <h2 className="font-bold text-xl mt-4">PW Skills</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-500 rounded-2xl"></div>
            <div>
                <p>Abouts Us</p>
                <p>FAQs</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        <div>
            <h2 className="font-bold text-xl mt-4">Products</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-500 rounded-2xl"></div>
            <div>
                <p>PW Skills Lab</p>
                <p>Job Portal</p>
                <p>Experience Portal</p>
                <p>Become an affiliate</p>
                <p>Hall of fame</p>
            </div>
        </div>
        <div>
            <h2 className="font-bold text-xl mt-4">Links</h2>
            <div className="w-32 h-1 border-b-2 border-yellow-500 rounded-2xl"></div>
            <div>
                <p>Discord Channel</p>
                <p>PW Youtube</p>
                <p>Careers</p>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer