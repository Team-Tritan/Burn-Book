'use strict';

import dbConnectionInit from '../../../libs/database/dbConnection';
import postModel from '../../../libs/database/models/posts';

export default async function fetchPost(req, res) {
    dbConnectionInit();

    // If query is ID, fetch individual post
    if (req.query.id) {
        const post = await postModel
            .findOne({
                _id: req.query.id,
                deleted: false,
            })
            .catch(() => {
                return res.status(500).json({
                    error: true,
                    code: 500,
                    message: 'Failed to find post with given id',
                });
            });

        if (!post) {
            return res.status(500).json({
                error: true,
                code: 500,
                message: 'Failed to find post with given id',
            });
        }

        return res.status(200).json(post);
    }

    // If query is limit, fetch limited number of posts
    if (req.query.limit) {
        const searchLimit = req.query.limit;
        const posts = await postModel
            .find({
                limit: searchLimit,
                deleted: false,
            })
            .sort({ createdAt: -1 }) // this is used to sort
            .catch((err) => {
                return res.status(500).json({
                    error: true,
                    code: 500,
                    message: 'Failed to find posts with given limit',
                    stacktrace: err,
                });
            });

        return res.status(200).json(posts);
    }
}
