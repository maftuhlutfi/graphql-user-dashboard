import React from 'react';
import './Post.css';

import Avatar from './Avatar';

function Post(props) {
	return (
		<div className="post">
			<div className='post-header'>
				<div className='post-user'>
					<Avatar name='Morgan' width='40px' />
					<div className='user-details'>
						<span className='name'>Morgan Hopkins</span>
						<span className='username'>@morgans12</span>
					</div>
				</div>
			</div>
			<div className='post-content'>
				quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit 
				molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto
			</div>
		</div>
	);
}

export default Post;