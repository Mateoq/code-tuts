import { Observable } from 'rxjs';
import jQuery from 'jquery';

// Render on the DOM

const refreshButton = document.querySelector('.refresh');
const closeButton1 = document.querySelector('.close1');
const closeButton2 = document.querySelector('.close2');
const closeButton3 = document.querySelector('.close3');

const refreshClickStream = Observable.fromEvent(refreshButton, 'click');
const close1Clicks = Observable.fromEvent(closeButton1, 'click');
const close2Clicks = Observable.fromEvent(closeButton2, 'click');
const close3Clicks = Observable.fromEvent(closeButton3, 'click');

const startupRequestStream = Observable.of(['https://api.github.com/users']);

const requestOnRefreshStream = refreshClickStream
  .map(() => {
    const randomOffset = Math.floor(Math.random() * 500);
    return `https://api.github.com/users?since=${randomOffset}`;
  });

const requestStream = requestOnRefreshStream
  .merge(startupRequestStream);

const responseStream = requestStream
  .flatMap(requestUrl => (
    Observable.fromPromise(jQuery.getJSON(requestUrl))
  ))
  .share();

const getRandomUser = (listUsers) => (
  listUsers[Math.floor(Math.random() * listUsers.length)]
);

function createSuggestionStream(stream, closeClickStream) {
  return stream
    .map(getRandomUser)
    .startWith(null)
    .merge(
    refreshClickStream
      .map(() => null)
    )
    .merge(
    closeClickStream
      .withLatestFrom(stream, (e, listUsers) => getRandomUser(listUsers))
    );
}

const suggestionStream = createSuggestionStream(responseStream, close1Clicks);
const suggestion2Stream = createSuggestionStream(responseStream, close2Clicks);
const suggestion3Stream = createSuggestionStream(responseStream, close3Clicks);

const renderSuggestion = (suggestedUser, selector) => {
  const suggestionElement = document.querySelector(selector);

  if (suggestedUser === null) {
    suggestionElement.style.vsibility = 'hidden';
  } else {
    suggestionElement.style.vsibility = 'hidden';

    const usernameEl = suggestionElement.querySelector('.username');
    usernameEl.href = suggestedUser.html_url;
    usernameEl.textContent = suggestedUser.login;
    const imgEl = suggestionElement.querySelector('img');
    imgEl.src = '';
    imgEl.src = suggestedUser.avatar_url;
  }
};

suggestionStream.subscribe(user => {
  renderSuggestion(user, '.suggestion1');
});

suggestion2Stream.subscribe(user => {
  renderSuggestion(user, '.suggestion2');
});

suggestion3Stream.subscribe(user => {
  renderSuggestion(user, '.suggestion3');
});

