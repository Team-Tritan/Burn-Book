'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import router from 'next/router';

export default function Comments({ post }) {
    const { id } = router.query;

    const [isModalOpen, setModal] = useState(false);
    const [commentData, setCommentData] = useState({
        content: '',
    });

    const showModal = () => {
        return setModal(!false);
    };

    const closeModal = () => {
        setModal(false);
    };

    async function createComment() {
        closeModal();

        let res = await axios.post(`/api/comments/create?id=${id}`, commentData);
        console.log(res);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="feed p-2">
                        <div
                            className="d-flex flex-row justify-content-between align-items-center p-1 bg-white border py-1"
                            onClick={showModal}
                            style={{ borderRadius: '.5rem' }}
                        >
                            <div className="feed-text px-2">
                                <h6 className="text-black-50 mt-2">Leave a comment</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal variant="dark" show={isModalOpen} size="sm" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton onClick={closeModal}>
                    <Modal.Title>New Comment</Modal.Title>
                </Modal.Header>
                <div
                    className="d-flex flex-row justify-content-between align-items-center p-1 bg-white"
                    style={{ textDecoration: 'none', outline: 'none' }}
                >
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Comment"
                        onChange={(e) => setCommentData({ ...commentData, content: e.target.value })}
                    />
                </div>
                <Modal.Footer>
                    <Button variant="dark" onClick={createComment}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
