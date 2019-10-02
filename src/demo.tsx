import * as React from 'react';

interface Foo {
  bar :number;
  bas :string;
}

const foo = {} as Foo;
foo.bar = 100;
foo.bas = 'Hello';

console.log("Foo",foo)

interface HelloProps {
  name: string;
}

interface BookState {
  bookName: string,
  auth: string,
  page: number,

  // @ts-ignore
  //onChange(event: React.ChangeEvent<HTMLInputElement>)
}

function buildName(firstName: string, lastName?: string) {
  if (lastName)
    return firstName + " " + lastName;
  else
    return firstName;
}

let result1 = buildName("Bob");
let result2 = buildName("Bob", "Adams");

console.log("result1",result1)
console.log("result2",result2)

function Value(first: string, second: string, ...allOthers: string[]) {
  console.log("allOthers",allOthers);
}
Value('Hii', 'bye'); // []
Value('Hii', 'bye', 'HH', 'BB');

class Hello extends React.Component<HelloProps, BookState> {
  // @ts-ignore
  public bookName: React.RefObject<HTMLInputElement>;
  constructor(props: HelloProps) {
    super(props);
    this.state = {
      bookName: ''
    };
    this.bookName = null
  }

  publish = () => {
    // @ts-ignore
   this.setState({
      bookName: this.bookName.value
    })
    this._onReset()
  }

  onEnter = (event: { keyCode: number; }) => {
    if(event.keyCode == 13){
      // @ts-ignore
      this.setState({
        bookName: this.bookName.value
      })
      this._onReset();
    }
  };

  _onReset = () => {
    // @ts-ignore
    this.bookName.value = ''
  }

  /*// @ts-ignore
  handleChange = (e) => {
    // @ts-ignore
    this.setState({bookName: e.target.value});
  };*/

  render() {
    const {bookName} = this.state;
    return (
      <div>
        {/*<input onChange={this.handleChange} ref={(ref) => {this.bookName = ref}}/>*/}
        <input ref={(e) => {this.bookName = e}} onKeyDown={this.onEnter}/>
        <input type='button' value="Send" onClick={this.publish}/>
        <h3>{bookName}</h3>
      </div>
    );
  }
}

export default Hello;
