import * as React from 'react';

/*function demo(a: number, b: number) {
  return a * b
}

let aa = demo(105, 2)
console.log('aaaaa', aa)

const person = [
  {name: 'abc', city: 'amd', age: 10},
  {name: 'xyz', city: 'mum', age: 100},
  {name: 'pqr', city: 'rkt', age: 10},
]

function sqr(person: Object): any {
  console.log('person', person)
  // @ts-ignore
  return person.map((per:any) => {
     return {'name':per.name, 'city': per.city, 'age': per.age}
  })
}

const persons = sqr(person)
console.log('personsssss', persons)*/
/*
interface HelloProps {
  name: string;
}

interface BookState {
  bookName: string,
  auth: string,
  page: number
}*/
/*interface BookSubmit {
  onOk: () => any
}*/

/*class Hello extends React.Component<HelloProps, BookState> {
  // @ts-ignore
  public bookName: React.RefObject<HTMLInputElement>;
  // @ts-ignore
  public auth: React.RefObject<HTMLInputElement>;
  // @ts-ignore
  public page: React.RefObject<HTMLInputElement>;

  //const bookname = useRef<HTMLInputElement>(null)

  constructor(props: HelloProps) {
    super(props)
    this.state = {
      bookName: '',
      auth: '',
      page: undefined
    }
    this.bookName = null
    this.auth = null
    this.page = null
  }

  onSubmit = () => {
    //this.data = this.username.value;
    //console.log('this.props.name', this.data)
    // if(typeof this.bookName.value === "string") {
    this.setState({
      bookName: this.bookName.value,
      auth: this.auth.value,
      page: this.page.value
    })
    /!* }else {
       alert('restrict')
     }*!/
  }

  render() {
    const {bookName, auth, page} = this.state;
    return (
      <div>
        Book name : <input type='text' placeholder='Book Name' ref={(e) => this.bookName = e}/><br/><br/>
        Author : <input type='text' placeholder='Author' ref={(e) => this.auth = e}/><br/><br/>
        Total Page : <input type='number' placeholder='Page' ref={(e) => this.page = e}/><br/><br/>
        <input type='button' name='Ok' value='ok' onClick={this.onSubmit}/><br/><br/>
        <table border={'2'}>
          <body>
          <tr>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Total Page</th>
          </tr>
          <tr>
            <td>{bookName}</td>
            <td>{auth} </td>
            <td>{page}</td>
          </tr>
          </body>
        </table>
      </div>
    )
  }
}

export default Hello;*/

interface IntersaceUser {
  userName: string
}

const ComplextState = ({ initialUser}: any) => {
  const [user, setUser] = React.useState<IntersaceUser | null>(initialUser)
  console.log('userss', user)

  return(
    <form>
      <input value={user.userName} onChange={e => setUser({...user, userName: e.target.value})} />
    </form>
  )
}

export default ComplextState



/*interface people {
  name: string,
  city: string
}

class Person extends React.Component<people, {}> {
  render() {
    return(
      <div>
        {people.name}
      </div>
    )
  }
}
export default Person*/


/*
interface Dog {
  name: string,
  speech? : string
}

const register = (dog: Dog) => {
 console.log(
   ` ${dog.name}
    ${dog.speech}`
)
}

register({name: 'jenny'})
register({name: 'jenny', speech: 'Wow..wow..wow!!'})
*/


/*interface msgProps {
  title: string,
  body: string
}

export const Msg: React.SFC<msgProps> = ({
  title, body
}) => (
  <div>
    <h4>
      {title}
    </h4>
    <h5>
      {body}
    </h5>
  </div>
)*/

/*interface userProps {
  country: string
}

export const Users: React.SFC<userProps>  = ({
                                              country
}) => (
  <div>
    <h1>{country}</h1>
  </div>
)*/


/*

type BookProps = {
  bookName: string,
  auth: string,
  page: number
}

export const Book = ({bookName, auth, page}: BookProps) => <aside>
  <h2>Book name : {bookName}</h2>
  <h2> Author : {auth}</h2>
  <h2>Total Page : {page}</h2>

  Book name : <input type='text' placeholder='Book Name'/><br/><br/>
  Author : <input type='text' placeholder='Author'/><br/><br/>
  Total Page : <input type='number' placeholder='Page'/><br/><br/>
  <input type='button' value='ok' name='Submit'/>
</aside>
*/
