import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

function Header() {
   const {user,isSignedIn}=useUser();
  return (
    <div className='flex justify-between p-3 px-5 shadow-md'>
      <img src='/logo.svg' width={100} height={100}/>

      {
         isSignedIn?
         <div className='flex items-center gap-2'>
            <Button variant='outline'>Dashboard</Button>
            <Link to={'/dashboard'}>
            <UserButton/>
            </Link>
         </div> :
         <Link to={'/auth/sign-in'}>
      <Button>Get Started</Button>
      </Link>
      }
    </div>
  )
}

export default Header
