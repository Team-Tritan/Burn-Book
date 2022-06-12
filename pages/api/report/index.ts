'use strict';

import dbConnectionInit from '../../../libs/database/dbConnection';
import postModel from '../../../libs/database/models/posts';

export default async function newReport(req, res) {
    if (req.method === 'POST') {
        dbConnectionInit();

        let post_id = req.query.id;
        if (!post_id) {
            return res.status(400).json({
                error: true,
                code: 400,
                message: 'Missing required field to create report.',
            });
        }

        let update = await postModel.updateMany(
            {
                _id: post_id,
            },
            {
                $set: {
                    reported: true,
                    reportedAt: new Date().toLocaleDateString(),
                    deleted: true,
                    deletedAt: new Date().toLocaleDateString(),
                },
            },
        );

        return res.send('Report submitted successfully.');
    } else if (req.method === 'GET') {
        return res.status(405).json({
            error: true,
            code: 405,
            message: 'Method not allowed',
        });
    }
}
