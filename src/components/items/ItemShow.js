import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchItem } from '../../actions';

const ItemShow = (props) => {
    useEffect(() => {
        props.fetchItem(props.match.params.id);
    }, [])

    if (!props.item) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="ui divided items">
                <div className="item">
                    <div className="image">
                        <img src="https://i.imgur.com/xWecX9u.png" />
                    </div>
                    <div className="content">
                        <div className="header">{props.item.name}</div>
                        <div className="meta">
                            <span className="cinema">{props.item.brand}</span>
                        </div>
                        <div className="description">
                            <p>{props.item.description}</p>
                        </div>
                        <div className="extra">
                            <Link to="/" className="ui right floated primary button">
                                Add to cart
                                <i className="right chevron icon"></i>
                            </Link>
                            <div className="ui label">Price: {props.item.price}$</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { item: state.items[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchItem })(ItemShow);