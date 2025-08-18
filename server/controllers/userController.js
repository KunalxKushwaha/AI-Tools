// import sql from "../configs/db.js";


// export const getUserCreation = async (req,res) => {
//     try {
//         const {userId} = req.auth();

//         const creation = await sql` SELECT * FROM creation WHERE user_id = ${userId} ORDER BY created_at DESC`;

//       res.json({success:true,creation});

//     } catch (error) {
//         res.json({success:false, message: error.message });
//     }
// }


// export const getPublishCreation = async (req,res) => {
//     try {

//         const creation = await sql` SELECT * FROM creation WHERE publish = true ORDER BY created_at DESC`;

//       res.json({success:true, creation});

//     } catch (error) {
//         res.json({success:false, message: error.message });
//     }
// }

// export const toggleLikeCreation = async (req,res) => {
//     try {

//         const {userId} = req.auth();
//         const {id} = req.body;

//         const [creations] = await sql ` SELECT * FROM creation WHERE id = ${id}`

//         if(!creations) {
//             return res.json({succes:false, message:"Creation Not Found"})
//         }

//         const currentLikes = creations.likes;
//         const userIdStr = userId.toString();
//         let updatedLikes;
//         let message;

//         if(currentLikes.includes(userIdStr)) {
//             updatedLikes = currentLikes.filter((user)=> user!== userIdStr);
//             message = 'Creation Unliked'
//         } else {
//             updatedLikes = [...currentLikes, userIdStr]
//             message = 'Creation Liked'
//         }

//         const formattedArray = `{${updatedLikes.join(',')}}`


 
//       await sql` UPDATE creation SET likes = ${formattedArray}:: text[] WHERE id = ${id}`;

//       res.json({success:true, message});

//     } catch (error) {
//         res.json({success:false, message: error.message });
//     }
// }

import sql from "../configs/db.js";

export const getUserCreation = async (req,res) => {
    try {
        const {userId} = req.auth();
        const creations = await sql`
          SELECT * FROM creation WHERE user_id = ${userId} ORDER BY created_at DESC
        `;
        res.json({ success:true, creations });
    } catch (error) {
        res.json({ success:false, message: error.message });
    }
}

export const getPublishCreation = async (req,res) => {
    try {
        const creations = await sql`
          SELECT * FROM creation WHERE publish = true ORDER BY created_at DESC
        `;
        res.json({ success:true, creations });
    } catch (error) {
        res.json({ success:false, message: error.message });
    }
}

export const toggleLikeCreation = async (req,res) => {
    try {
        const {userId} = req.auth();
        const {id} = req.body;

        const [creation] = await sql`SELECT * FROM creation WHERE id = ${id}`;
        if(!creation) {
            return res.json({ success:false, message:"Creation Not Found" });
        }

        const currentLikes = creation.likes || [];
        const userIdStr = userId.toString();
        let updatedLikes, message;

        if(currentLikes.includes(userIdStr)) {
            updatedLikes = currentLikes.filter((u)=> u !== userIdStr);
            message = 'Creation Unliked';
        } else {
            updatedLikes = [...currentLikes, userIdStr];
            message = 'Creation Liked';
        }

        const formattedArray = `{${updatedLikes.join(',')}}`;

        await sql`UPDATE creation SET likes = ${formattedArray}::text[] WHERE id = ${id}`;

        res.json({ success:true, message });
    } catch (error) {
        res.json({ success:false, message: error.message });
    }
}
