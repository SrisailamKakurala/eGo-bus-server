const asyncHandler = require('../utils/asyncHandler')
const { ApiError } = require('../utils/ApiError')
const { ApiResponse } = require('../utils/ApiResponse')
const parentModel = require('../models/parent.model');


const registerParent = asyncHandler(async (req, res) => {

    const { schoolId, busNo, tripNo, studentId, name, parentName, rollNo, phoneNumber, schoolName } = req.body;
    console.log({ schoolId, busNo, tripNo, studentId, name, parentName, rollNo, phoneNumber, schoolName });

    // Check if all required fields are present
    if (!(schoolId && busNo && tripNo && studentId && name && parentName && rollNo && phoneNumber)) {
        throw new ApiError(400, 'All fields are required');
    }

    // Check if the parent already exists
    const existingParent = await parentModel.findOne({ schoolId, busNo, tripNo, studentId });
    if (existingParent) {
        throw new ApiError(409, 'Parent already registered');
    }

    // Create new parent
    const newParent = await parentModel.create({
        schoolId,
        busNo,
        tripNo,
        studentId,
        name,
        parentName,
        rollNo,
        phoneNumber,
        schoolName
    });

    return res
        .status(201)
        .json(
            new ApiResponse(
                201,
                {
                    user: newParent
                },
                'Parent registered successfully'
            )
        );
});


const loginParent = asyncHandler(async (req, res) => {

    
    const { schoolId, busNo, tripNo, studentId } = req.body
    console.log({ schoolId, busNo, tripNo, studentId })

    if (!(schoolId || busNo || tripNo || studentId)) {
        throw new ApiError(400, 'All fields are required')
    }

    const parent = await parentModel.findOne({ schoolId, busNo, tripNo, studentId })

    if (!parent) {
        throw new ApiError(404, 'user not found')
    }


    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {
                    user: parent
                },
                'user logged in successfully'
            )
        )


})


module.exports = { registerParent, loginParent };
