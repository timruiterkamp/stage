"use strict";

const gulp = require('gulp');
const tasks = [
  'build',
  'browserify',
  'clean',
  'copy',
  'html-include',
  'default',
  'imagemin',
  'sass',
  'watch',
];

for (const key in tasks) {
  if (tasks.hasOwnProperty(key)) {
    const task = tasks[key];

    gulp.task(
      task,
      require('./gulp_config/' + task + '.task.js')
    );
  }
}
