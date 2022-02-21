/**
 * @name advancedResults
 * @description Manipulate query to return an advanced result
 * @param {*} model
 * @param {*} populate
 * @returns Response
 */
const advancedResults = (model, populate) => async (req, res, next) => {
    let query;

    // Copy the req.query that come in the request
    const reqQuery = { ...req.query };

    // Fields to exclude
    const removeFields = ["select", "sort", "page", "limit"];

    // Loop over removeFields and delete then from reqQuery
    removeFields.forEach((params) => delete reqQuery[params]);

    // Create query string
    let queryString = JSON.stringify(reqQuery);

    // Create operators ($gt, $gte, etc) Reference https://docs.mongodb.com/manual/reference/operator/query-comparison/
    queryString = queryString.replace(
        /\b(gt|gte|lt|lte|in)\b/g,
        (match) => `$${match}`
    );

    // Finding resource
    query = model.find(JSON.parse(queryString));

    // Select fields
    if (req.query.select) {
        const fields = req.query.select.split(",").join(" ");
        query = query.select(fields);
    }

    // Sort
    if (req.query.sort) {
        const sortBy = req.query.sort.split(",").join(" ");
        query.sort(sortBy);
    } else {
        query = query.sort("createdAt");
    }

    // Pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const total = await model.countDocuments();

    query = query.skip(startIndex).limit(limit);

    if (populate) {
        query = query.populate(populate);
    }

    // Executing query
    const result = await query;

    // Pagination result
    const pagination = {};

    if (endIndex < total) {
        pagination.next = {
            page: page + 1,
            limit,
        };
    }

    if (startIndex > 0) {
        pagination.prev = {
            page: page - 1,
            limit,
        };
    }

    res.advancedResults = {
        success: true,
        count: result.length,
        pagination,
        data: result,
    };

    next();
};

export default advancedResults;
