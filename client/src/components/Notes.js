import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNotes } from '../actions/notes';
import { Container, Grid, Header, Card, Image, Dropdown, Divider, Button } from 'semantic-ui-react';
import NoteForm from './NoteForm';

class Notes extends React.Component {

  state = { color: '', showForm: false }

  // componentDidMount() {
  //   this.props.dispatch(getNotes())
  // }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  notes = () => {
    const { notes } = this.props;
    const { color } = this.state;
    let visible = notes;
    if (color)
      visible = notes.filter( n => n.color === color )
    
    return visible.map( note =>
      <Card key={note.id}>
        <Image src={note.image} />
        <Card.Content>
          <Card.Header>
            {note.title}
          </Card.Header>
          <Card.Meta>
            <span>
              {note.color}
            </span>
          </Card.Meta>
          <Card.Meta>
            <span>
              {note.due}
            </span>
          </Card.Meta>
          <Card.Description>
            {note.body}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Link to={`/notes/${note.id}`}>
            View Note
          </Link>
        </Card.Content>
      </Card>
    )
  }

  colorOptions = () => {
    return this.props.colors.map( (c,i) => {return { key: i, text: c, value: c } })
  }

  render() {
    const { color, showForm } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">Notes</Header>
        <Button basic><Link to="/">
          Home
        </Link></Button>
        <Button basic><Link to="/friends">
          Friends
        </Link></Button>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Hide Form' : 'Show Form' }
        </Button>
        { showForm ?
          <NoteForm closeForm={this.toggleForm} />
          :
          <div>
            <Dropdown
              placeholder="Filter by color"
              fluid
              selection
              options={this.colorOptions()}
              onChange={ (e, data) => this.setState({ color: data.value }) }
              value={color}
            />
            { color && <Button fluid basic onClick={ () => this.setState({ color: '' }) }>Clear Color Filter: {color}</Button>}
            <Divider />
            <Card.Group itemsPerRow={2}>
              { this.notes() }
            </Card.Group>
          </div>
        }    
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const notes = state.notes;
  const colors = [...new Set(notes.map( n => n.color ))]
  return { notes, colors }
}

export default connect(mapStateToProps)(Notes);
