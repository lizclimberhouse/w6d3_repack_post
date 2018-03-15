import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFriends } from '../actions/friends';
import { Container, Grid, Header, Card, Image, Button } from 'semantic-ui-react';
import FriendForm from './FriendForm';


class Friends extends React.Component {

  state = { showFriendForm: false }

  componentDidMount() {
    this.props.dispatch(getFriends())
  }

  toggleFriendForm = () => {
    this.setState( state => {
      return { showFriendForm: !state.showFriendForm }
    })
  }

  friends = () => {    
    return this.props.friends.map( friend =>
      <Card key={friend.id}>
        <Image src={friend.pic} />
        <Card.Content>
          <Card.Header>
            {friend.name}
          </Card.Header>
          <Card.Description>
            {friend.desc}
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }

  render() {
    const { showFriendForm }  = this.state;
    return (

      <Container>
        <Header as="h3" textAlign="center">Friends</Header>
        <Button basic><Link to="/">
          Home
        </Link></Button>
        <Button basic><Link to="/notes">
          Notes
        </Link></Button>
        <Button onClick={this.toggleFriendForm}>
          { showFriendForm ? 'Hide Form' : 'Show Form' }
        </Button>
        { showFriendForm ?
          <FriendForm closeForm={this.toggleFriendForm} />
          :
          <div>
            <Card.Group itemsPerRow={4}>
              { this.friends() }
            </Card.Group>
          </div>
        }
        </Container>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { friends: state.friends }
  }

export default connect(mapStateToProps)(Friends);