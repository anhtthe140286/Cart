import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchUserItems } from '../../actions';

const CartView = (props) => {
    useEffect(() => {
        props.fetchUserItems(props.currentUserId);
    });

    const renderList = () => {
        if (!props.cart[0]) {
            return <div>Loading...</div>
        }
        else {
            return props.cart[0].items.map(item => {
                return (
                    <div key={`${item.id}${props.currentUserId}`} className="ui link card">
                        <div className="image">
                            <img src="https://i.imgur.com/xWecX9u.png" />
                        </div>
                        <div className="content">
                            <Link to={`/items/${item.id}`} className="header">
                                {item.name}
                            </Link>
                            <div>
                                <div className="meta right floated">{item.quantity}</div>
                            </div>
                        </div>
                        <div className="extra content">
                            <p>Hello</p>
                        </div>
                    </div>
                )
            });
            // return <div>kec</div>
        }
    }

    return (
        <div className="ui container">
            <br />
            <div className="ui link cards three column grid">
                {renderList()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: Object.values(state.cart),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchUserItems })(CartView);