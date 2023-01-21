import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://images.unsplash.com/photo-1509112756314-34a0badb29d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybWFsJTIwcGhvdG9tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.unsplash.com/photo-1509112756314-34a0badb29d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybWFsJTIwcGhvdG9tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60" alt="" />
      </div>

    </div>
  )
}

export default Message