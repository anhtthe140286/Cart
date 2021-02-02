import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { createItem } from '../../actions';
import ItemForm from '../items/ItemForm';

const ItemCreate = (props) => {
    const onSubmit = (data) => {
        props.createItem(data);
    }

    return (
        <div>
            <h3>Create Item</h3>
            <ItemForm onSubmit={onSubmit} initialValues={_.pick(props.item, '', '', '', '', '')}/>
        </div>
    );
}

export default connect(null, { createItem })(ItemCreate);