import React from 'react'
import '../../css/Footer.css'
// import {github} from 'react-icons/io'
class Footer extends React.Component{
    render(){
        return(
            <div className="footer">
            <div className="fl w-third pa2 ">
                <p>
                   This was done as the application software lab mini project.
                </p>
               
            </div>
            <div className='fl w-third pa2'> 
                <p >
               <h2> Our Team Members:</h2><span className='nameListing'> <ul> <li>Abhijith A</li> <li> Shawn Riju</li><li>Serene Elizabeth</li><li> Shriram V</li> <li>Megha Dinesh</li> </ul> </span>
               
                </p>
            </div>
            <div className='fl w-third pa2 contribute'>

                <ion-icon name="github"></ion-icon>
                Contribute to this project on <a href='https://github.com/shriram98/noticeboard'> <br></br><img className=' h3 github' src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'></img></a>

            </div>
        
        </div>

        );
    }
}
export default Footer