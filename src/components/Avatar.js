import React from 'react';
import './Avatar.css';

function random_rgba() {
	var o = Math.round, r = Math.random, s = 255;
	return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function Avatar({name, width}) {
	const avatarStyle = {
		width: width,
		height: width,
		backgroundColor: random_rgba(),
		fontSize: parseInt(width) * 0.6
	}

	return (
		<div className="avatar" style={avatarStyle}>
			<span className='avatar-letter'>{name.charAt(0)}</span>
		</div>
	);
}

export default Avatar;