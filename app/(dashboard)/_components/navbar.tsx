"use client"

import { UserButton } from '@clerk/nextjs'

type Props = {}

const Navbar = (props: Props) => {
  return (
	<div className='flex items-center gap-x-4 p-5 bg-green-500'>
		<div className='hidden lg:flex lg:flex-1 bg-yellow-500'>
			{/* add search */}
			Search
		</div>
		<UserButton />
	</div>
  )
}

export default Navbar