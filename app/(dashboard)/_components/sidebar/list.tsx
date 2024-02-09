"use client"

import { useOrganizationList } from '@clerk/nextjs'
import { Item } from './item'

 const List = () => {
	const {userMemberships} = useOrganizationList({
		userMemberships: {
			infinite: true,
		}
	})

	if(!userMemberships.data?.length) return null

   return (
	 <ul className='space-y-4'>
		{userMemberships.data?.map(({organization: {id, name, imageUrl}})=>(
			<Item key={id} id={id} name={name} imageUrl={imageUrl}/>
		))}
	 </ul>
   )
 }

 export default List