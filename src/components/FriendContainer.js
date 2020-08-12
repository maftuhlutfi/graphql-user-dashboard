import React from 'react';
import './FriendContainer.css';
import Spinner from './Spinner';
import Avatar from './Avatar';
import { gql, useQuery } from '@apollo/client';

const GET_USERS = gql`
	{
		users{
		    data{
		      id
		      name
		    }
		  }
	}
`

function FriendContainer(props) {
	const { loading, data } = useQuery(GET_USERS);

	if (loading) {
		return <Spinner />;
	}

	const users = data.users.data;

	return (
		<div className="friend-container">
			<h3>Friends</h3>
			<div className='friends'>
				{users.map(({id, name}) => <Avatar key={id} name={name} width='50px' />)}
			</div>
		</div>
	);
}

export default FriendContainer;