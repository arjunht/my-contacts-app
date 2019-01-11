import React, { Component } from 'react';

class ListContacts extends Component {
	render() {
		
		//console.log(this.props);
		
		return (
			<ol className='contact-list'>
				{this.props.contacts.map((contact) => (
					<li key={contact.id} className='contact-list-item'>
						<div
							className='contact-avatar'
							{/* Here the first {} is for JS code and the second {} is for the object that we will be passing - each property on that object being a specific CC property */}
							style={{
								backgroundImage: `url(${contact.avatarURL})`
							}}
						></div>
						<div className='contact-details'>
							<p>{contact.name}</p>
							<p>{contact.handle}</p>
						</div>
						<button className='contact-remove'>
							Remove
						</button>
					</li>
				))}
			</ol>
		);
	}
}

export default ListContacts

/* my Try:
class ContactList extends Component {
	
	render() {
		const people = this.props.contactsProperty;
		
		return (
			<ul>
				{people.map(person => 
					<li key={person.id}>
						<img src={person.avatarURL} />
						<p>{person.name}</p>
						<p>{person.handle}</p>
					</li>)
				}
			</ul>
		);
	}
}
*/