import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class FileList extends React.Component {
    render() {
        return (
            <div></div>
        )
    }
}

FileList.propTypes = {
    files: PropTypes.arrayOf(PropTypes.object)
}

const FileListItem = (props) => {
        return(
            <div></div>
        )
}

FileListItem: PropTypes.shape({
    name: propTypes.string,
    type: propTypes.string,
    message: propTypes.string,
    lastModified: propTypes.string
});

const FileName = (props) => {
    return (
        <div></div>
    )
}

FileName.PropTypes = {
    name: propTypes.string
}

const CommitMessage = (props) => {
    return (
        <div></div>
    )
}

CommitMessage.PropTypes = {
    message: propTypes.string
}