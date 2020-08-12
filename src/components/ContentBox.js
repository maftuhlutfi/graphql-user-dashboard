import React from 'react';
import './ContentBox.css'

import Post from './Post';

function ContentBox(props) {
	return (
		<div className="content-box">
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</div>
	);
}

export default ContentBox;