const express = require('express');
const router = express.Router();

const Cohort = require('../model/cohortClass');

router.get('/', (req, res) => {
    const cohortsData = Cohort.all;
    res.send(cohortsData);
});

router.get('/:name', (req, res) => {
    try {
        const cohortName = req.params.name;
        console.log(cohortName);
        const selectedCohort = Cohort.findByName(cohortName);
        res.send(selectedCohort);
    } catch (err) {
        console.log(err);
        res.status(404).send(err);
    }
});
    
router.post('/', (req, res) => {
    const data = req.body;
    const newCohort = Cohorts.create(data);
    res.status(201).send(newCohort);
});

// router.delete('/:id', (req, res) => {
//     const catId = parseInt(req.params.id);
//     const catToDestroy = Cat.findById(catId);
//     catToDestroy.destroy();
//     res.status(204).send();
// });

module.exports = router;