import React from 'react';
import './Profile.css';

function Profile(props) {
	return (
		<div className="profile">
			<div className='profile-head'>
				<div className='identity'>
					<div className='avatar' />
					<div className='details'>
						<h3 className='name'>James Kontlo</h3>
						<span className='username'>@james_kontlo12</span>
					</div>
				</div>
				<div className='add-post'>
					<input type='text' placeholder='What are you up to ?' />
				</div>
			</div>
			<div className='menu-container'>
				<div className='menu'>
					<i class="far fa-user" style={{ color: '#669fdd' }}></i>
					<span className='text'>Profile</span>
					<span className='counter'>10</span>
				</div>
				<div className='menu'>
					<i class="far fa-comment-alt" style={{ color: '#ffe68c' }}></i>
					<span className='text'>Post</span>
					<span className='counter'>8</span>
				</div>
				<div className='menu'>
					<i class="far fa-images" style={{ color: '#e54951' }}></i>
					<span className='text'>Album</span>
					<span className='counter'>3</span>
				</div>
			</div>
		</div>
	);
}

export default Profile;