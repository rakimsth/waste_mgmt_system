const DataUtils = {
  paging: async ({ start, limit, sort, model, query, facet_data }) => {
    query.push({
      $sort: sort
    });
    // eslint-disable-next-line no-underscore-dangle
    let _facet_data = [
      {
        // eslint-disable-next-line radix
        $skip: parseInt(start)
      },
      {
        // eslint-disable-next-line radix
        $limit: parseInt(limit)
      }
    ];
    if (facet_data) _facet_data = _facet_data.concat(facet_data);
    query.push({
      $facet: {
        data: _facet_data,
        total: [
          {
            $group: {
              _id: null,
              count: {
                $sum: 1
              }
            }
          }
        ]
      }
    });
    const matchedData = await model.aggregate(query);

    let data = [];
    let total = 0;
    if (matchedData[0].data.length > 0) {
      data = matchedData[0].data;
      total = matchedData[0].total[0].count;
    }

    return {
      data,
      total,
      limit,
      start,
      page: Math.round(start / limit) + 1
    };
  }
};

module.exports = {
  DataUtils
};
