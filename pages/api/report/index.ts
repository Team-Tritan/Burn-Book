'use strict';

import dbConnectionInit from '../../../libs/database/dbConnection';
import postModel from '../../../libs/database/models/posts';

export default async function newReport(req, res) {
    // Check if request is POST, if not return a 405.
    if (req.method === 'POST') {
        // Call to init db
        dbConnectionInit();

        // Process request in db
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

        // Return 200 to frontend
        return res.status(200).json({ error: false, status: 200, message: 'Report submitted successfully.' });
    } else {
        // Handle GET/other requests
        return res.status(405).json({
            error: true,
            code: 405,
            message: 'Method not allowed',
        });
    }
}
