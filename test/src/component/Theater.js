import React, { Component } from 'react';
import axios from 'axios';
import '../css/theater.css';
import joeVideo from '../videos/JoeHorror.MP4'
import alecVideo from '../videos/alecVideo.mp4'
import idkWhatThisIsButItsAnAudioFile from '../videos/Constancy Part 1 - The Descent.mp3'
import { connect } from 'react-redux';
import { getSearch } from '../Redux/reducer'


class Theater extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    getUrlThing = () => {
        // console.log(this.props.match.params)
    }

    render() {
        console.log(this.props.search)
        console.log(this.props)
        return (
            <div>
                <div class="wrapper">
                    <div class="one">One</div>
                    <div class="two">Two</div>
                    <div class="three">Three</div>
                </div>
                <h2>Welcome to Theater</h2>
                <p>{this.props.word}</p>
                <h5>{`This is on redux "${this.props.search}"`}</h5>
                {/* <p>{(this.props.match) ? this.props.match.params.thing : 'There are no match params'}</p> */}
                <video width="400px" height="400px" controls>
                    <source src={joeVideo} type="video/mp4" />
                    <source src="mov_bbb.ogg" type="video/ogg" />
                    Your browser does not support HTML5 video.
                </video>
                <video width="400px" height="400px" controls>
                    <source src={alecVideo} type="video/mp4" />
                    <source src="mov_bbb.ogg" type="video/ogg" />
                    Your browser does not support HTML5 video.
                </video>
                <audio controls>
                    <source src={idkWhatThisIsButItsAnAudioFile} type="audio/mpeg" />
                </audio>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps, { getSearch })(Theater)


//