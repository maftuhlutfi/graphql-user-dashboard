import React from 'react';
import './Post.css';

import Avatar from './Avatar';

function Post({post: {body, user: {name, username}}}) {
	return (
		<div className="post">
			<div className='post-header'>
				<div className='post-user'>
					<Avatar isUser name={name} width='40px' />
					<div className='user-details'>
						<span className='name'>{name}</span>
						<span className='username'>@{username.toLowerCase()}</span>
					</div>
				</div>
			</div>
			<div className='post-content'>
				{body}
			</div>
		</div>
	);
}

export default Post;