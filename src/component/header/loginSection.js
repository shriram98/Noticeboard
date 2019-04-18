import React, {Component} from 'react'
import GoogleLogin from 'react-google-login'
import {PostData} from '../../services/PostData'

export default class LoginSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
        this.signup = this.signup.bind(this)
    }

    signup(res) {
        let postData

        if(res.w3.U3) {
            postData = {name: res.w3.ig, provider: 'google', email:res.w3.U3, provider_id: res.El, token: res.Zi.access_token, provider_pic: res.w3.Paa}
        }

        PostData('login', postData).then((result) => {
            let responseJson = result
            if(responseJson.userData) {
                sessionStorage.setItem('userData', JSON.stringify(responseJson))
                this.setState({redirect: true})
            }
        })
    }    
    
    render() {                

        if(this.state.redirect) {
            this.props.resetLogin();
        }

        const responseGoogle = (response) => {
            console.log(response)
            this.signup(response)
        }
        return(
            <div>
                <GoogleLogin
                    clientId="22493967586-ns8gcf94a1mk5g47tk7tl3pniv3l22mr.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    />
            </div>
        );
    }
}