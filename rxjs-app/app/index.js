import Rx, { Observable } from 'rxjs';
import jQuery from 'jquery';

//const button = document.querySelector('#button');
//const label = document.querySelector('#label');

//const clickStream = Observable.fromEvent(button, 'click');

//const doubleClickStream = clickStream
//	.buffer(() => clickStream.throttle(250));

//doubleClickStream.subscribe(event => {
//  label.textContent = 'double click';
//});

//doubleClickStream.
//  throttle(1000).
//  subscribe(suggestion => {
//    label.textContent = '-';
//  });

// Render on the DOM

const refreshButton = document.querySelector('.refresh');
const requestStream = Observable.just('https://api.github.com/users');

const responseStream = requestStream
  .flatMap(requestUrl => (
    Observable.fromPromise(jQuery.getJSON(requestUrl))
  ));

const suggestionStream = responseStream
  .map(listUser => (
    listUser[Math.floor(Math.random() * listUser.length)]
  ));

