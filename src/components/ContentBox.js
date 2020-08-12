import React from 'react';
import './ContentBox.css'; 
import Spinner from './Spinner';
import {useParams} from 'react-router-dom';

import { gql, useQuery } from '@apollo/client';

import Post from './Post';

const GET_POSTS = gql`
	query user($id: ID!) {
		user(id: $id) {
			posts{
			    data{
			      id
			      body
			      user{
			        name
			        username
			      }
			    }
		  }
		}
	}
`

function ContentBox(props) {
	const { id } = useParams();
	const { loading, data } = useQuery(GET_POSTS, {variables: {id}});

	if (loading) {
		return <Spinner />;
	}

	const posts = data.user.posts.data;

	return (
		<div className="content-box">
			{posts.map(post => <Post key={post.id} post={post} />)}
		</div>
	);
}

export default ContentBox;