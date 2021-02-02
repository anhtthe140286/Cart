import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import GoogleAuth from './GoogleAuth';

const Header = (props) => {
    const renderMyCart = () => {
        if (props.isSignedIn && props.userId != '108326807708212513630') {
            return (
                <Link to={`/cart/${props.userId}`} className="item">
                    My Cart
                </Link>
            );
        } else {
            return null;
        }
    }

    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            <div className="right menu">
                {props.isSignedIn == true ? renderMyCart() : null}
                <GoogleAuth />
            </div>
        </div>
    );
}


const mapStateToProps = (state) => {
    // console.log(state);
    return {
        userId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn,
    };
}

export default connect(mapStateToProps)(Header);