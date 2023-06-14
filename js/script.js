// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: June 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  var input = parseInt(document.getElementById("input").value)
  
  var answerElement = document.getElementById("answer")
  var tallyElement = document.getElementById("tally")
  var output = ""
  var total = 0
  
  for (var counter = 0; counter < input; counter++) {
    var roll = Math.floor(Math.random() * 6) + 1
    output += '<img src="./images/dice-' + roll + '.png" alt="Dice ' + roll + '" />'
    total += roll
  }
  
  answerElement.innerHTML = output
  tallyElement.innerHTML = "The total is " + total
}