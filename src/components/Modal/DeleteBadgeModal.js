import React from "react"
import Modal from "./Modal"

const DeleteBadgeModal = props => {
    const handleDelete = () => {
        props.onClose()
        props.history.push("/badges")
    }

    return(
        <Modal onClose={props.onClose} isOpen={props.isOpen}>
            <h3>Are you sure?</h3>
            <p>You are about to delete this badge</p>

            <div>
                <button className="btn" onClick={props.onClose}>Cancel</button>
                <button className="btn" onClick={() => handleDelete()}>Delete</button>
            </div>
        </Modal>
    )
}

export default DeleteBadgeModal



// props.history.push("/badges")