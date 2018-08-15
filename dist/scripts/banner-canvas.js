'use strict';

var canvas = document.querySelector('.banner-canvas');
canvas.width = canvas.parentElement.offsetWidth;
canvas.height = canvas.parentElement.offsetHeight;
var ctx = canvas.getContext('2d');

ctx.fillRect(0, 0, canvas.width, canvas.height);