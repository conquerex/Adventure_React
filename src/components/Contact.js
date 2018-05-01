import React, {Component} from 'react';
import ContactInfo from './ContactsInfo';
import ContactDetails from './ContactDetails';

export default class Contact extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            keyword:'',
            selectKey: -1,
            contactData: [{
                name: 'Abet',
                phone: '010-0000-0001'
            }, {
                name: 'Betty',
                phone: '010-0000-0002'
            }, {
                name: 'Charlie',
                phone: '010-0000-0003'
            }, {
                name: 'David',
                phone: '010-0000-0004'
            }]
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick =  this.handleClick.bind(this);
    }
    
    handleChange(e) {
        // this 바인딩 필요. 임의 함수 만들때 반드시 필요
        this.setState({
            keyword: e.target.value
        });
    }

    handleClick(key) {
        this.setState({
            selectKey: key
        });
        console.log(key, ' is selected~!!!');
    }

    render() {
        const mapToComponents = (data) => {
            data.sort();
            data = data.filter(
                (contact) => {
                    return contact.name.toLowerCase()
                        .indexOf(this.state.keyword) > -1;
                }
            );
            return data.map((contact, i) => {
                return (<ContactInfo 
                            contact={contact} 
                            key={i}
                            onClick={() => this.handleClick(i)}/>);
            });
        };

        return (
            <div>
                <h1>Contacts</h1>
                <input
                    name='keyword'
                    placeholder='Search'
                    value={this.state.keyword}
                    onChange={this.handleChange} />
                <div>{mapToComponents(this.state.contactData)}</div>
                <p/>
                <ContactDetails
                    isSelected={this.state.selectKey != -1}
                    contact={this.state.contactData[this.state.selectKey]}/>
            </div>
        );
    }
}