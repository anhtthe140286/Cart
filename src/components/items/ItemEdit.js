import _ from 'lodash';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchItem, editItem } from '../../actions';
import ItemForm from '../items/ItemForm';

const ItemEdit = (props) => {
    useEffect(() => {
        props.fetchItem(props.match.params.id);
    }, [])

    const onSubmit = (formValues) => {
        props.editItem(props.match.params.id, formValues);
    }

    if (!props.item) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <h3>Edit an Item</h3>
                <ItemForm
                    initialValues={_.pick(props.item, 'name', 'description', 'brand', 'price', 'stock')}
                    onSubmit={onSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { item: state.items[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchItem, editItem })(ItemEdit);