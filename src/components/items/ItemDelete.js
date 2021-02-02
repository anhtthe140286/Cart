import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchItem, deleteItem } from '../../actions';

const ItemDelete = (props) => {
    useEffect(() => {
        props.fetchItem(props.match.params.id);
    }, [])

    const renderActions = () => {
        const { id } = props.match.params;
        return (
            <React.Fragment>
                <button onClick={() => {
                    props.deleteItem(id);
                }}
                    className="ui button negative"
                >
                    Delete
                </button>
                <Link to="/" className="ui button">Cancel</Link>
            </React.Fragment>
        );
    }

    const renderContent = () => {
        if (!props.item) {
            return 'Really dude?';
        } else {
            return `Are you sure want to delete ${props.item.name}?`
        }
    }

    return (
        <Modal
            title="Delete Item"
            content={renderContent()}
            actions={renderActions()}
            onDismiss={() => history.push('/')}
        />
    )
}
const mapStateToProps = (state, ownProps) => {
    return { item: state.items[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchItem, deleteItem })(ItemDelete);
