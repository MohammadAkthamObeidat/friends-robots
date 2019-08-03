import React, {Component} from 'react'
import Card from './Card.js'

class CardList extends Component{
    render(){
        return(
    <div>
        <Card id= { this.props.robots[0].id } name={this.props.robots[0].name} email= {this.props.robots[0].email} />
        <Card id= { this.props.robots[1].id } name={this.props.robots[1].name} email= {this.props.robots[1].email} />
        <Card id= { this.props.robots[2].id } name={this.props.robots[2].name} email= {this.props.robots[2].email} />
        <Card id= { this.props.robots[3].id } name={this.props.robots[3].name} email= {this.props.robots[3].email} />
        <Card id= { this.props.robots[4].id } name={this.props.robots[4].name} email= {this.props.robots[4].email} />
        <Card id= { this.props.robots[5].id } name={this.props.robots[5].name} email= {this.props.robots[5].email} />
        <Card id= { this.props.robots[6].id } name={this.props.robots[6].name} email= {this.props.robots[6].email} />
        <Card id= { this.props.robots[7].id } name={this.props.robots[7].name} email= {this.props.robots[7].email} />
        <Card id= { this.props.robots[8].id } name={this.props.robots[8].name} email= {this.props.robots[8].email} />
        <Card id= { this.props.robots[9].id } name={this.props.robots[9].name} email= {this.props.robots[9].email} />
    </div>
        );
    }
}
export default CardList;