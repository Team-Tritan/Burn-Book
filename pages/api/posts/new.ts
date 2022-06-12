'use strict';

import dbConnectionInit from '../../../libs/database/dbConnection';
import postModel from '../../../libs/database/models/posts';

export default async function newPostAPI(req, res) {
    // Check if post request
    if (req.method === 'POST') {
        dbConnectionInit();

        const id = Math.floor(Math.random() * 1000000000000);
        const title = req.body.title;
        const content = req.body.content;
        const delete_keyword = req.body.delete_keyword;

        if (!title || !content || !delete_keyword) {
            return res.status(400).json({
                error: true,
                code: 400,
                message: 'Missing required field to create post.',
            });
        }

        new postModel({
            _id: id,
            title: title,
            content: content,
            delete_keyword: delete_keyword,
            deleted: false,
            deletedAt: null,
            reported: false,
            reportedAt: null,
        })
            .save()
            .catch((err) => {
                return res.status(500).json({
                    error: true,
                    code: 500,
                    message: '[Internal Error] Database save failure',
                    stacktrace: err,
                });
            })
            .then((post) => {
                console.log(`Added a record to the database.`, post);
                return res.redirect(`/feed/${post._id}`);
            });
    } else if (req.method === 'GET') {
        return res.status(405).json({
            error: true,
            code: 405,
            message: 'Method not allowed',
        });
    }
}
