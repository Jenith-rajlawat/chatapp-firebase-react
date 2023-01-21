import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user' />
      </div>
      <div className="userChat">
        <img src="https://images.unsplash.com/photo-1509112756314-34a0badb29d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9ybWFsJTIwcGhvdG9tYW58ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60" alt="" />
        <div className="userChatInfo">
          <span>Jenith</span>
        </div>
      </div>

    </div>
  )
}

export default Search