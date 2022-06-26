'use strict';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import router from 'next/router';

export default function Comments({ comments }) {
    const { id } = router.query;

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center row">
                    <div className="col-md-8">
                        <div className="feed">
                            {comments.map((x) => (
                                <div className="bg-white border mt-2" style={{ borderRadius: '0.5rem' }}>
                                    <div>
                                        <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                                            <div className="d-flex flex-row align-items-center feed-text px-2">
                                                <div className="d-flex flex-column flex-wrap ml-2">
                                                    <span className="font-weight-bold text-muted">{x.createdAt}</span>
                                                </div>
                                            </div>
                                            <div className="feed-icon px-2">
                                                <i className="fa fa-ellipsis-v text-black-50"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-2 px-3">
                                        <span>{x.content}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
