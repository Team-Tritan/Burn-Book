'use strict';

import dbConnectionInit from '../../../libs/database/dbConnection';
import postModel from '../../../libs/database/models/posts';

export default async function fetchPost(req, res) {
    // Init db
    dbConnectionInit();

    // If query is ID, fetch individual post
    if (req.query.id) {
        const post = await postModel
            .findOne({
                _id: req.query.id,
            })
            .catch(() => {
                return res.status(404).json({
                    error: true,
                    code: 404,
                    message: 'Failed to find post with given id',
                });
            });

        if (!post) {
            return res.status(404).json({
                error: true,
                code: 404,
                message: 'Failed to find post with given id',
            });
        }

        if (post.reported) {
            return res.status(202).json({
                error: true,
                code: 418,
                message: 'This post has been removed due to violating our terms of service.',
            });
        }

        if (post.deleted && !post.reported) {
            return res.status(202).json({
                error: true,
                code: 418,
                message: 'This post has been removed by the author.',
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
                reported: false,
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
