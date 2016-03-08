'use strict';

class Dictionary {
  constructor () {
    const data = []
  }

  this.add (index, value) {
    this.data[index] = value
  }

  this.find (index) {
    return this.data[index]
  }

  this.remove (index) {
    delete this.data[index]
  }

  this.showAll () {
    Object
      .keys(data)
      .sort()
      .forEach(key => console.log(key, this.data[key]))
  }

}
