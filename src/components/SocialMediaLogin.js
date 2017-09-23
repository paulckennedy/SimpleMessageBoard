import React from 'react';
import '../styles/bootstrap-social.css';

const SocialMediaLogin = (props) => {
    const { googleLogin } = props;

    return(
        <div className="d-flex justify-content-center align-self-center mt-1">
            <a href="#" className="btn btn-social btn-google" onClick={googleLogin}>
                <span className="fa fa-google"/>Sign in with Google
            </a>
        </div>
    )
}

export default SocialMediaLogin;