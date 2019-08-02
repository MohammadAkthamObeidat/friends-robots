import React, {Component} from 'react';

class Card extends Component{
    state = {

    };

    render(){ 
        return( 
        <div className='bg-light-blue dib ma2 br4 grow pa3 pr3 bw2 shadow-5'>
            <img alt='Robot Photo' src='https://robohash.org/nancy?50x150' />
            <div className='tc'>
                <h2 className='b'> Siri </h2>
                <p className='i'>siri@Email.com</p>
            </div>
        </div>
        
        );
    }
}
export default Card;