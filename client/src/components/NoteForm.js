import React from 'react';
import { connect } from 'react-redux';
import { updateNote, addNote } from '../actions/notes';
import { Form } from 'semantic-ui-react';

class NoteForm extends React.Component {
  initialState = {
    title: '',
    body: '',
    color: '',
    image: '',
    due: '',
  }

  state = {...this.initialState}

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
    const note = {...this.state}
    const { closeForm, dispatch } = this.props
    const func = this.props.id ? updateNote : addNote
    dispatch(func(note))
    closeForm()
  }

  render() {
    const { title, body, color, due, image } = this.props
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="title"
          required
          defaultValue={title}
          onChange={this.handleChange}
          label="Title"
        />
        <Form.Input
          name="body"
          defaultValue={body}
          onChange={this.handleChange}
          label="Body"
        />
        <Form.Input
          name="color"
          defaultValue={color}
          onChange={this.handleChange}
          label="Color"
        />
        <Form.Input
          name="due"
          defaultValue={due}
          onChange={this.handleChange}
          label="Due Date"
        />
        <Form.Input
          name="image"
          defaultValue={image}
          onChange={this.handleChange}
          label="Image"
        />
        <Form.Button>Save</Form.Button>
      </Form>
    )
  }
}

export default connect()(NoteForm);