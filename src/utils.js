export const processData = (filtersToApply) => (data) => {
  let { gender: genderFilter, minHeight: heightFilter } = { ...filtersToApply };
  console.log(genderFilter, heightFilter, "filters");

  // in case "data" is object use Object.entries()
  /* filter by gender and height */
  let filteredData = [];
  data.map((object) => {
    let { height, mass, name } = { ...object };
    object.gender === genderFilter && object.height > heightFilter
      ? filteredData.push({ height, mass, name })
      : null;
  });


  /* sort by mass and by height, only if mass is the same */
  let sortedData = filteredData.sort((a, b) => {
    return a.mass === b.mass ? b.height - a.height : b.mass - a.mass;
  });

  return sortedData;
};
