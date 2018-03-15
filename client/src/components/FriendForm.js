import React from 'react';
import { connect } from 'react-redux';
import { addFriend, updateFriend } from '../actions/friends';
import { Form } from 'semantic-ui-react';

class FriendForm extends React.Component {
  initialFriendState = {
    name: '',
    desc: '',
    pic: '',
  }

  state = {...this.initialFriendState}

  componentWillMount() {
    if (this.props.id)
      this.setState({ ...this.props })
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const friend = {...this.state}
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updateFriend : addFriend
    dispatch(func(friend))
    closeForm()
  }

  render() {
    const { name, desc, pic } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          required
          defaultValue={name}
          onChange={this.handleChange}
          label="Name"
        />
        <Form.Input
          name="desc"
          defaultValue={desc}
          onChange={this.handleChange}
          label="Description"
        />
        <Form.Input
          name="pic"
          defaultValue={pic}
          onChange={this.handleChange}
          label="Picture"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(FriendForm);