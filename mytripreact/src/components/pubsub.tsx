// import { Component } from 'react'
// import { Subject } from 'rxjs'
import * as React from 'react';
// import { RouteComponentProps } from 'react-router-dom';
// // The Main Subject/Stream to be listened on.
// const mainSubject = new Subject()
// // This function is used to publish data to the Subject via next().
// export const publish = (data:any) => mainSubject.next(data)

// interface IState{
//   datas : string
// }
//  class Subscriber extends React.Component<RouteComponentProps,IState> {
//   // Used for unsubscribing when our component unmounts
//    unsub:any = null;
//   constructor(props : any) {
//     super(props)
//     this.state = { datas: ""}
//      this.unsub = mainSubject
//                  .subscribe((data:any) => this.setState({ datas:data }))
//   }
//    componentWillUnmount() {
//     this.unsub.unsubscribe()
//   }
//   render() {
//     return this.props.children(this.state.datas);
//   }
// }
// export default Subscriber;