import React from 'react';
import './Post.css';

function Post(props) {
	return (
		<div className="post">
			<div className='post-header'>
				<div className='post-user'>
					<div className='avatar' />
					<div className='user-details'>
						<span className='name'>Jimmy Hopkins</span>
						<span className='username'>@jimmy_h666</span>
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