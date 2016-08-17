# react-state-input

> US State input component for react

* Validates inputs
* Strips non-alphabetic characters
* Limits to 2 letters


## Install

```
$ npm install --save react-state-input
```


## Usage

```js
import State from 'react-state-input'

..

render () {
  <State onValue={(value) => console.log(`such value ${value}`)} />
}
```
