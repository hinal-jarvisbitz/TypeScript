import * as React from "react";
import ComplexState from "./Hello"; /*{Users, Book, Msg}*/

export default class User extends React.Component<{}, {}> {

  render() {
    return(
      <div>
        {/*<Person name='abc' city='xyz' />*/}
        {/*<Hello name="ABC" />*/}{/*
        <Msg title='Testing' body='Testing of Admin page'/>
        <Msg title='Develop' body='Develop of Admin page'/>
        <Msg title='Design' body='Design of Admin page'/>
        <Users country='DDD'/>
        <Book bookName='Three Thousand Stitches ' auth='Sudha Murthy' page={200}/>*/}
       {/* <Counter/>*/}
       <ComplexState userName='ABC' />
      </div>
    )
  }
}
  
