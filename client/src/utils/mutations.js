import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
	mutation login($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				_id
				name
				username
			}
		}
	}
`;

export const ADD_USER = gql`
	mutation addUser(
		$name: String!
		$username: String!
		$email: String!
		$password: String!
	) {
		addUser(
			name: $name
			username: $username
			email: $email
			password: $password
		) {
			token
			user {
				_id
				username
			}
		}
	}
`;
export const ADD_EVENT = gql`
	mutation addEvent(
		$eventTitle: String!
		$eventDescription: String!
		$eventLink: String
	) {
		addEvent(
			eventTitle: $eventTitle
			eventDescription: $eventDescription
			eventLink: $eventLink
		) {
			_id
			eventTitle
			eventDescription
			eventLink
		}
	}
`;

export const ADD_ORDER = gql`
	mutation addOrder($products: [ID]!) {
		addOrder(products: $products) {
			purchaseDate
			products {
				_id
				name
				description
				price
				quantity
				category {
					name
				}
			}
		}
	}
`;

export const ADD_COMMENT = gql`
mutation addComment($eventId: ID!, $commentText: String!) {
    addComment(eventId: $eventId, commentText: $commentText) {
      _id
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
