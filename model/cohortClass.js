const cohortsData = require("../data")

class Cohorts {
    constructor(name,noOfStudents,start_date,finish_date){
        this.name = name;
        this.noOfStudents = noOfStudents;
        this.start_date = start_date;
        this.finish_date = finish_date; 
    }



    static get all() {
      const  allCohorts = cohortsData.map((cohort) => new Cohorts(cohort));
      return allCohorts;
  }



static findByName(name) {
    try {
        const cohortData = cohortsData.filter((cohort) => cohort.name === name);
        const cohort = new Cohorts(cohortData);
        return cohort;
    } catch (err) {
        throw new Error('The  cohort you entered does not exist!');
    }
}


static create(cohort) {
    const newCohortId = cohortsData.length + 1;
    const newCohort = new Cohorts({ id: newCohortId, ...cohort });
    // const newCohort = new Cohorts({ id: newCohortId, ...cat });
    catsData.push(newCohort);
    return newCohort;
}

}
module.exports = Cohorts;

// destroy() {
//     const cat = catsData.filter((cat) => cat.id === this.id)[0];
//     catsData.splice(catsData.indexOf(cat), 1);
// }

