import React from 'react'

export default function UserChat() {
  return (
    <div className='chat'>
        <p className='mychat'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p className='otherchat'>Ut non leo blandit, gravida est ac, tincidunt felis.</p>
        <p className='mychat'>Duis congue lorem eget elit luctus, et hendrerit neque fringilla.</p>
        <p className='otherchat'>Cras ut mauris in felis rhoncus accumsan eleifend id ex.</p>
        <p className='otherchat'>Cras vehicula arcu sed urna viverra, id vulputate lorem finibus.</p>
        <p className='mychat'>Integer finibus mauris et ligula dapibus congue.</p>
        <p className='otherchat'>Morbi ut nisi tristique sapien porttitor bibendum.</p>
        <input type="textarea" placeholder="type your message." className="textarea" style={{height:"50px"}}></input>
        <button className="btn" type="button">Post</button>
    </div>
  )
}
