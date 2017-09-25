import React from 'react';
import '../styles/bootstrap-social.css';

const SocialMediaLogin = (props) => {
    const { googleLogin } = props;

    return(
        <div className="d-flex justify-content-center align-self-center mt-1">
            <button type="button" className="btn btn-social btn-google" onClick={googleLogin}>
                <span className="fa fa-google"/>Sign in with Google
            </button>
        </div>
    )
}

export default SocialMediaLogin;