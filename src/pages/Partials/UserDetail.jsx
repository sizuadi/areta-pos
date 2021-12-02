import React from 'react'

const UserDetail = ({...props}) => {
  const user = props.userdata;
  
  return (
    <div>
      <div className='fw-bolder d-flex align-items-center fs-5'>{user.username}</div>
      <a href='/' className='fw-bold text-muted text-hover-primary fs-7' onClick={e => e.preventDefault()}>
        {user.email}
      </a>
    </div>
  )
}

export default UserDetail;