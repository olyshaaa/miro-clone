'use client'

import { useOthers, useSelf } from '@/liveblocks.config'
import { UserAvatar } from './user-avatar'
import { connectionIdToColor } from '@/lib/utils'

const MAX_SHOWN_USERS = 2

export const Participants = () => {
	const users = useOthers()
	const currentUser = useSelf()
	const hasMoreUsers = users.length > MAX_SHOWN_USERS

	return(
		<div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md'>
			<div className='flex gap-x-2'>
				{currentUser && (
					<UserAvatar src={currentUser.info?.picture} name={`${currentUser.info?.name} (You)`} fallBack={currentUser.info?.name?.[0]}/>
				)}

				{users.slice(0, MAX_SHOWN_USERS)
				.map(({ connectionId, info }) =>
					(
						<UserAvatar key={connectionId} src={info?.picture} name={info?.name} fallBack={info?.name?.[0] || 'T'} borderColor={connectionIdToColor(connectionId)}/>
					)
				)}

				{hasMoreUsers && (
					<UserAvatar name={`${users.length - MAX_SHOWN_USERS} more`} fallBack={`+${users.length - MAX_SHOWN_USERS}`} borderColor={connectionIdToColor(currentUser.connectionId)}/>
				)}
			</div>
		</div>
	)
}

export const ParticipantsSkeleton = () => {
	return(
		<div className='absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]' />
	)
}