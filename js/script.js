// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Jakub Malhotra
// Created on: June 2023
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  //input
  const input = parseFloat(
    document.getElementById("input").value
  )
  //output
  document.getElementById("answer").innerHTML =
    "The input is: " + input + "."
  document.getElementById("tally").innerHTML =
    "The total is: " + input + "."
}