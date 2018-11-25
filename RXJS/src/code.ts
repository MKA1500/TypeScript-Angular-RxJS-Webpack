// npm run start

import { Observable } from 'rxjs/Observable';

var observable = Observable.create((observer:any) => {
  try {
    observer.next('hello 1');
    observer.next('hello 2');
    observer.next('hello 3');
    observer.complete();
    observer.next('hello not send');
  } catch(err) {
    observer.error(err)
  }
});

observable.subscribe(
  (x:any) => addItem(x),
  (error:any) => addItem(error),
  () => addItem('Completed')
);

function addItem(val:any) {
  var node = document.createElement('li');
  node.classList.add('list-group-item');
  var textnode = document.createTextNode(val);
  node.appendChild(textnode);
  document.getElementById('output').appendChild(node);
}
