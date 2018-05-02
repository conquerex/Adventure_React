import React from 'react';
import PropTypes from 'prop-types';

export default class ContactDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEdit: false,
            name: '',
            phone: ''
        }

        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleToggle() {
        if(!this.state.isEdit) {
            this.setState({
                name: this.props.contact.name,
                phone: this.props.contact.phone
            });
        } else {
            this.handleEdit();
        };

        console.log('isEdit :::: ', !this.state.isEdit);
        this.setState({
            isEdit: !this.state.isEdit
        });
    }

    handleChange(e) {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    handleEdit() {
        this.props.onEdit(this.state.name, this.state.phone);
    }

    render() {

        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );

        const edit = (
            <div>
                <p>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                </p>
                <p>
                    <input 
                        type="text" 
                        name="phone" 
                        placeholder="Phone number"
                        value={this.state.phone}
                        onChange={this.handleChange} />
                </p>
            </div>
        );

        // 초기에는 false : 항목이 보임
        const view = this.state.isEdit ? edit : details;

        const blank = (<div>Not Selected</div>);

        return (
            <div>
                <h2>Detail</h2>
                {this.props.isSelected ? view : blank}
                <p/>
                <button onClick={this.handleToggle}>
                    {this.state.isEdit ? 'OK' : 'EDIT'}
                </button>
                <button onClick={this.props.onRemove}>DELETE</button>
            </div>
        );
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    },
    onRemove: () => { console.error('onRemove not defined.');},
    onEdit: () => { console.error('onEdit not defined.');}
}

ContactDetails.propTypes = {
    contact: PropTypes.object,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func
}