import React from 'react';

class Track extends React.Component {

    renderAction() {
        if (this.props.isRemoval) {
            return <button className='Track-action' onClick={ }> - </button>
        } else { return <button className='Track-action' onClick={ }> + </button> }
    }


    render() {
        retunr(
            <div className="Track">
                <div className="Track-information">
                    <h3><!-- track name will go here --></h3>
                    <p><!-- track artist will go here--> | <!-- track album will go here --></p>
                </div>
                <button className="Track-action"><!-- + or - will go here --></button>
            </div>
        )
    }
}