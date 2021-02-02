import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItems } from '../../actions';

const ItemList = (props) => {
    useEffect(() => {
        props.fetchItems();
    }, [])

    const renderAdmin = (item) => {
        if (props.currentUserId == '108326807708212513630') {
            return (
                <div className="extra content">
                    <Link to={`/items/edit/${item.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/items/delete/${item.id}`} className="ui button negative right floated">Delete</Link>
                </div>
            )
        } else if (props.currentUserId != '108326807708212513630' && props.isSignedIn == true) {
            return (
                <div className="extra content">
                    <button className="ui button primary">Add to cart</button>
                </div>
            )
        } else {
            return;
        }
    }

    const renderList = () => {
        return props.items.map(item => {
            return (
                <div key={item.id} className="ui link card">
                    <div className="image">
                        <img src="https://i.imgur.com/xWecX9u.png" />
                    </div>
                    <div className="content">
                        <Link to={`/items/${item.id}`} className="header">
                            {item.name}
                        </Link>
                        <div>
                            <div className="meta right floated">{item.price}$</div>
                            <div className="meta">{item.brand}</div>
                        </div>
                        <div className="description">{item.description}</div>
                    </div>
                    <div className="extra content">
                        {renderAdmin(item)}
                    </div>
                </div>
            )
        });
    }

    const renderCreate = () => {
        if (props.currentUserId == '108326807708212513630') {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/items/new" className="ui button primary">Create Item</Link>
                </div>
            )
        }
    }

    return (
        // <div className="ui three column grid">
        <div className="ui container">
            {renderCreate()}
            <br />
            <div className="ui link cards three column grid">
                {renderList()}
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        items: Object.values(state.items),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { fetchItems })(ItemList);