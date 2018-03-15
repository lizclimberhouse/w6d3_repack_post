import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NoteForm from './NoteForm';

// const NoteView = ({ note = {} }) => (
class NoteView extends React.Component {
  state = { showForm: false }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  render() {
    const { showForm } = this.state;
    const { note = {} } = this.props;
    return (
      <Container>
        <Link to="/notes">View All Notes</Link>
        <Button onClick={this.toggleForm}>
          { showForm ? 'Cancel' : 'Edit' }
        </Button>
        { showForm ?
          <NoteForm {...note} closeForm={this.toggleForm} />
          :
          <div>
            <Header as="h3" textAlign="center">{note.title}</Header>
            <Image src={note.image} />
            <Table definition>
            <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell />
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Body</Table.Cell>
                  <Table.Cell>{note.body}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Color</Table.Cell>
                  <Table.Cell>{note.color}</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Due Date</Table.Cell>
                  <Table.Cell>{note.due}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { note: state.notes.find( n => n.id === parseInt(props.match.params.id )) }
}

export default connect(mapStateToProps)(NoteView);