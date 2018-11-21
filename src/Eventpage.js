import React, {Component} from 'react'
import Events from './component/events/events'
// import './css/app.css'

var eventlist = [
    {
        speaker: 'Ariana Grande',
        eventname: 'Venue',
        eventtype: 'Music',
        date: 'Dec, 19, 2018',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        contact: ['abc@xyz.com','9496311967'],
        locationMap:'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31433.034004547695!2d76.33633136533761!3d10.00618103770082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c9374d88309%3A0x2792b3523aaf54f7!2sCochin+Special+Economic+Zone+Ernakulam!5e0!3m2!1sen!2sin!4v1542780730491',
        location: 'IIT Mumbai'

    },

    {
        speaker: 'Ariana Grande',
        eventname: 'The Venue',
        eventtype: 'Standup',
        date: 'Dec, 16, 2018',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        contact: ['abc@xyz.com','9496311967'],
        locationMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22676.573915000565!2d72.91426295725398!3d19.136254571742047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f189efc039%3A0x68fdcea4c5c5894e!2sIndian+Institute+of+Technology+Bombay!5e0!3m2!1sen!2sin!4v1542774715016',
        location: 'IIT Mumbai'

    },
    {
        speaker: 'Ariana Grande',
        eventname: 'The Venue',
        eventtype: 'Tech',
        date: 'Dec, 16, 2018',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        contact: ['abc@xyz.com','9496311967'],
        locationMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22676.573915000565!2d72.91426295725398!3d19.136254571742047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f189efc039%3A0x68fdcea4c5c5894e!2sIndian+Institute+of+Technology+Bombay!5e0!3m2!1sen!2sin!4v1542774715016',
        location: 'IIT Mumbai'

    },
    {
        speaker: 'Ariana Grande',
        eventname: 'The Venue',
        eventtype: 'Gaming',
        date: 'Dec, 16, 2018',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        contact: ['abc@xyz.com','9496311967'],
        locationMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22676.573915000565!2d72.91426295725398!3d19.136254571742047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f189efc039%3A0x68fdcea4c5c5894e!2sIndian+Institute+of+Technology+Bombay!5e0!3m2!1sen!2sin!4v1542774715016',
        location: 'IIT Mumbai'

    },
    {
        speaker: 'Ariana Grande',
        eventname: 'The Venue',
        eventtype: 'Art',
        date: 'Dec, 16, 2018',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        contact: ['abc@xyz.com','9496311967'],
        locationMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22676.573915000565!2d72.91426295725398!3d19.136254571742047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c7f189efc039%3A0x68fdcea4c5c5894e!2sIndian+Institute+of+Technology+Bombay!5e0!3m2!1sen!2sin!4v1542774715016',
        location: 'IIT Mumbai'

    }
]

export default class App extends Component {
    render() {
        return(
            <div>
                <Events evt={eventlist[0]}/>
            </div>
        );
    }
}