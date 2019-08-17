const express = require('express');

const ProjectsRouter = require('../projects/projects-router');
const ResourcesRouter = require('../resources/resources-router');
const TasksRouter = require('../tasks/tasks-router');

const router = express.Router();

router.use('/projects', ProjectsRouter)
router.use('/resources', ResourcesRouter)
router.use('/tasks', TasksRouter)

module.exports = router;