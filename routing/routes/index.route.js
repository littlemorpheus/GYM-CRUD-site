const express = require('express');
const router = express.Router();

const CTRL_WO = require('../controllers/workout.controller');
const CTRL_WO_DIARY = require('../controllers/workout-diary.controller');
const CTRL_WO_CHILD = require('../controllers/workout-child.controller');
const CTRL_EXERCISE = require('../controllers/exercise.controller');
const ctrl_media = require('../controllers/media.controller');
const { verifyAuth } = require('../auth');

const ctrl_wo = new CTRL_WO;
const ctrl_wo_diary = new CTRL_WO_DIARY;
const ctrl_wo_child = new CTRL_WO_CHILD;
const ctrl_exercise = new CTRL_EXERCISE;

/*    GET Requests    */
router.get('/exercise/:id', ctrl_exercise.get);
router.get('/workout-child/:id', ctrl_wo_child.get);
router.get('/workout-child/:id/1', ctrl_wo_child.get1);
router.get('/workout/:id', ctrl_wo.get)
router.get('/workout/:id/1', ctrl_wo.get1)
router.get('/workout/:id/2', ctrl_wo.get2)
router.get('/workout-diary/:id', ctrl_wo_diary.get)

router.get('/exercises', ctrl_exercise.getAll);
router.get('/workout-children', ctrl_wo_child.getAll);
router.get('/workouts', ctrl_wo.getAll)
router.get('/workout-diaries', ctrl_wo_diary.getAll)

/*    POST Requests    */
router.post('/exercise', verifyAuth, ctrl_exercise.add);
router.post('/workout-child', verifyAuth, ctrl_wo_child.add);
router.post('/workout-diary', verifyAuth, ctrl_wo_diary.add);
router.post('/workout', verifyAuth, ctrl_wo.add)
//router.post('/img', ctrl_media.upload.single('file'), ctrl_media.addImage)


/*    DELETE Requests    */
router.delete('/exercises/: id', verifyAuth, ctrl_exercise.del);
router.delete('/workout-children/:id', verifyAuth, ctrl_wo_child.del);
//router.post('/img/:id', ctrl_media.delImage)
router.delete('/workouts/:id', verifyAuth, ctrl_wo.del)

module.exports = router;