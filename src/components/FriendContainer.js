import React from 'react';
import './FriendContainer.css';

import Avatar from './Avatar';

function FriendContainer(props) {
	return (
		<div className="friend-container">
			<h3>Friends</h3>
			<div className='friends'>
				<Avatar name='Haha' width='50px' />
				<Avatar name='A' width='50px' />
				<Avatar name='D' width='50px' />
				<Avatar name='S' width='50px' />
				<Avatar name='V' width='50px' />
				<Avatar name='B' width='50px' />
				<Avatar name='E' width='50px' />
				<Avatar name='Q' width='50px' />
				<Avatar name='D' width='50px' />
			</div>
		</div>
	);
}

export default FriendContainer;