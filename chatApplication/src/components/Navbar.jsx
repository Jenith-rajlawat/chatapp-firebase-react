import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>BitesToBeacon</span>
      <div className="user">
        <img src="https://images.unsplash.com/photo-1509112756314-34a0badb29d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybWFsJTIwcGhvdG9tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60" alt="" />
        <span>Jenith</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar