import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signIn, signOut } from '../actions'

const GoogleAuth = (props) => {
    let auth;
    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '345078686432-f8t3iblsi8bkt1g4b57ocn576319u5il.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                auth = window.gapi.auth2.getAuthInstance();
                onAuthChange(auth.isSignedIn.get());
                auth.isSignedIn.listen(onAuthChange);
            });
        });
    });

    const onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            props.signIn(auth.currentUser.get().getId());
        } else {
            props.signOut();
        }
    };

    const onSignedInClick = () => {
        auth.signIn();
    };

    const onSignedOutClick = () => {
        auth.signOut();
    };

    const renderAuthButton = () => {
        if (props.isSignedIn === null) {
            return <div>Dude</div>;
        } else if (props.isSignedIn) {
            return (
                <button onClick={onSignedOutClick} className="ui red google button">
                    <i className="google icon" />
                    <Link to="/" style={{color:'white'}}>
                        Sign Out
                    </Link>
                </button>
            );
        } else {
            return (
                <button onClick={onSignedInClick} className="ui red google button">
                    <i className="google icon" />
                    <Link to="/" style={{color:'white'}}>
                        Sign in with Google
                    </Link>
                </button>
            );
        }
    }

    return (
        <div>{renderAuthButton()}</div>
    );

}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);