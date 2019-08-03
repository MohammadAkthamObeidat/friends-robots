import React, {Component} from 'react';

class Card extends Component{
    state = {

    };

    render(){ 
        return( 
        <div className='bg-light-blue dib ma2 br4 grow pa3 pr3 bw2 shadow-5'>
            <img alt='Robot' src={`https://robohash.org/${this.props.id}?50x150`}/>
            <div className='tc'>
                <h2 className='b'> {this.props.name} </h2>
                <p className='i'>{this.props.email}</p>
            </div>
        </div>
        
        );
    }
}
export default Card;