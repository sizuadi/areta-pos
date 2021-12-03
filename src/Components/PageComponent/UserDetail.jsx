import React from 'react'
import { useSanctum } from 'react-sanctum';

const UserDetail = () => {
  const { user } = useSanctum();
  
  return (
    <div>
      <div className='fw-bolder d-flex align-items-center fs-5'>{user.name}</div>
      <a href='/' className='fw-bold text-muted text-hover-primary fs-7' onClick={e => e.preventDefault()}>
        {user.email}
      </a>
    </div>
  )
}

export default UserDetail;