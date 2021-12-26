---
title: "How To Use React Ticker To Create a Double Sliding News Bar"
date: 2021-12-26
published: false
---

Showing news in flash or the latest post sliding style, then news ticker is a good option for your website. 

On a previous project, I needed to show two tickers that move simultaneously, where the first ticker is for the author of the news and the date of the news, and the second ticker contains the news content.

## How the project started

In the project, I used React and found a great React library(React ticker link here) that does half of what I needed, but I still needed to connect the two tickers to move simultaneously.

Back then, the library didn't contain a callback that fires when the slide has ended or update the parent component that the ticker component fired an onNext function with the slide index. 

To add this feature, all I had to do was fork the original repo, add the functionality of `onNext` and `onFinish`, update the documentation to reflect the new changes, and create a pull request. With that, I have used a free library and contributed back.

## An Example of what you can do
