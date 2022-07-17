'use strict';

import dbConnectionInit from '../../../libs/database/dbConnection';
import postModel from '../../../libs/database/models/posts';

export default async function createComment(req, res) {
    dbConnectionInit();
    
    if (req.method === 'POST') {
        if (!req.query.id){
            return res.status(400).json({
                error: true,
                code: 400,
                message: 'No post id provided',
            });
        }
            if (req.query.id) {
                let postID = req.query.id;
                let comment = req.body.content;

                if (!comment){
                    return res.status(400).json({
                        error: true,
                        code: 400,
                        message: 'No comment provided',
                    });
                }
                const post = await postModel
                    .findOne({
                        _id: postID,
                    })

                if (!post) {
                    return res.status(404).json({
                        error: true,
                        code: 404,
                        message: 'Failed to find post with given id',
                    });
                }
                
               post.comments.push({id: req.query.id + post.comments.length + 1, createdAt: new Date(), content: comment, reported: false});

               await post.save();

                return res.status(200).json({
                    error: false,
                    code: 200,
                    message: 'Comment added successfully',
                });
         }
    }
}


