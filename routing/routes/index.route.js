const express = require('express');
const router = express.Router();

const CTRL_WO = require('../controllers/workout.controller');
const CTRL_WO_DIARY = require('../controllers/workout-diary.controller');
const CTRL_WO_SECTIONS = require('../controllers/workout-section.controller');
const CTRL_EXERCISE = require('../controllers/exercise.controller');
const ctrl_media = require('../controllers/media.controller');
const ctrl_wo = new CTRL_WO;
const ctrl_wo_diary = new CTRL_WO_DIARY;
const ctrl_wo_sections = new CTRL_WO_SECTIONS;
const ctrl_exercise = new CTRL_EXERCISE;

/*    GET Requests    */
ctrl_exercise.test_working()
router.get('',)
router.get('/exercise/:id', ctrl_exercise.get);
router.get('/workout-section/:id', ctrl_wo_sections.get);
router.get('/workout/:id', ctrl_wo.get)
router.get('/workout-diary/:id', ctrl_wo_diary.get)

router.get('/exercises', ctrl_exercise.getAll);
router.get('/workout-sections', ctrl_wo_sections.getAll);
router.get('/workouts', ctrl_wo.getAll)
router.get('/workout-diaries', ctrl_wo_diary.getAll)

/*    POST Requests    */
router.post('/exercise', ctrl_exercise.add);
router.post('/workout-section', ctrl_wo_sections.add);
router.post('/workout-diary', ctrl_wo_diary.add);
router.post('/workout', ctrl_wo.add)
router.post('/img', ctrl_media.upload.single('file'), ctrl_media.addImage)


/*    DELETE Requests    */
router.delete('/exercises/:id', ctrl_exercise.del);
router.delete('/workout-sections/:id', ctrl_wo_sections.del);
router.post('/img/:id', ctrl_media.delImage)
router.delete('/workouts/:id', ctrl_wo.del)

module.exports = router;