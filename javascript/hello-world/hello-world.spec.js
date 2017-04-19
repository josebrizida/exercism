var HelloWorld = require('./hello-world');

describe('Hello World', function() {
  var helloWorld = new HelloWorld();

  it('says hello world with no name', function() {
    expect(helloWorld.hello('')).toEqual('Hello, World!');
  });

  it('says hello to bob', function() {
    expect(helloWorld.hello('Bob')).toEqual('Hello, Bob!');
  });

  it('says hello to sally', function() {
    expect(helloWorld.hello('Sally')).toEqual('Hello, Sally!');
  });

  it('says hello to sally', function() {
    expect(helloWorld.hello('John')).toEqual('Hello, John!');
  });

  it('says hello to sally', function() {
    expect(helloWorld.hello('David')).toEqual('Hello, David!');
  });

  it('says hello to sally', function() {
    expect(helloWorld.hello('Richard')).toEqual('Hello, Richard!');
  });

  it('says hello to sally', function() {
    expect(helloWorld.hello('Mary')).toEqual('Hello, Mary!');
  });

  it('says hello to sally', function() {
    expect(helloWorld.hello('Sandra')).toEqual('Hello, Sandra!');
  });

  it('says hello to sally', function() {
    expect(helloWorld.hello('Kieren')).toEqual('Hello, Kieren!');
  });

  it('says hello to sally', function() {
    expect(helloWorld.hello('Ronald')).toEqual('Hello, Ronald!');
  });
});
