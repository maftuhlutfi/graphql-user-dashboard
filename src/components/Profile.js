import React from 'react';
import './Profile.css';
import Avatar from './Avatar';
import Spinner from './Spinner';
import { useParams } from 'react-router-dom';

import { gql, useQuery } from '@apollo/client';

const GET_PROFILE = gql`
	query user($id: ID!) {
		user(id: $id) {
			id
			name
			username
		}
	}
`

function Profile() {
	const { id } = useParams();
	const {loading, data} = useQuery(GET_PROFILE, {variables: {id}});

	if (loading) {
		return <Spinner />
	}

	const { user: { name, username } } = data;

	function setName() {
		if (name.length <= 13) {
			return name;
		} else {
			const arrName = name.split(' ');
			return arrName[0] + ' ' + arrName[1].charAt(0) + '.';
		}
	}

	return (
		<div className="profile">
			<div className='profile-head'>
				<div className='identity'>
					<Avatar isUser name={name} width='55px' />
					<div className='details'>
						<h3 className='name'>{setName()}</h3>
						<span className='username'>@{username.toLowerCase()}</span>
					</div>
				</div>
				<div className='add-post'>
					<input type='text' placeholder='What are you up to ?' />
				</div>
			</div>
			<div className='menu-container'>
				<div className='menu'>
					<i className="far fa-user" style={{ color: '#669fdd' }}></i>
					<span className='text'>Profile</span>
					<span className='counter'>{Math.round(Math.random() * 20)}</span>
				</div>
				<div className='menu'>
					<i className="far fa-comment-alt" style={{ color: '#ffe68c' }}></i>
					<span className='text'>Post</span>
					<span className='counter'>{Math.round(Math.random() * 20)}</span>
				</div>
				<div className='menu'>
					<i className="far fa-images" style={{ color: '#e54951' }}></i>
					<span className='text'>Album</span>
					<span className='counter'>{Math.round(Math.random() * 20)}</span>
				</div>
			</div>
		</div>
	);
}

export default Profile;