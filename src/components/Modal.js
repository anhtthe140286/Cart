import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    height: '20%'
}

const Modal = props => {
    return ReactDOM.createPortal(
        <div style={{paddingLeft:'200px'}} onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div className="ui standard modal visible active" style={styles}>
                <div className="header">{props.title}</div>
                <div className="content">{props.content}</div>
                <div className="actions">{props.actions}</div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;