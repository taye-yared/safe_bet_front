// This is just a template to copy and paste whenever you need to make a new component
import React from 'react'
import {Component} from 'react'
import {Card, Image, Icon, Divider} from 'semantic-ui-react'

const style = {
    width: '24vw',
    height: '60vh',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-60%)',
    marginLeft: '74vw'
}

export default class MiamiCard extends Component{
    constructor(props){
        super(props)

        this.state={
            // Initialize state here if neded
        }
    }

    render(){
        // Function will be called whenever the state or props of this class changes.
        // Never call setState in this function! (Will cause an infinite loop)
        return(
            <div style={style}>
                <Card>
                    <Card.Content>
                        <Card.Header>Miami</Card.Header>
                        <Card.Meta>Florida</Card.Meta>
                        <Card.Description>
                        The international port city of Miami is located on the Atlantic coast of Florida 
                        and is one of the top tourist spots in the U.S. Miami offers various tourist stops 
                        ranging from beaches like Miami Beach and South Beach where tourist can enjoy the 
                        subtropical weather, to the Art Deco District and Little Havana and Calle Ocho where 
                        tourists can appreciate the city’s history and Cuban influenced culture.
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <ul>
                            <h4 id="activity_header">Activities</h4>
                            <li>Clubbing</li>
                            <li>Skydiving</li>
                            <li>Deep sea fishing</li>
                            <li>Snorkeling</li>
                            <li>Sailing</li>
                        </ul>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}