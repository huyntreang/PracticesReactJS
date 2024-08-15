import React from "react";
import "./Demo.scss";
/**
 *
 */
class ChildComponent extends React.Component {
  state = {
    showJobs: false,
  };

  handleShowHide = () => {
    this.setState({
      showJobs: !this.state.showJobs,
    });
  };

  handleOnClickDelete = (job) => {
    console.log(">>>handleOnClickDelete: ", job);
    this.props.deleteAJob(job);
  };

  render() {
    let { arrJobs } = this.props;
    let { showJobs } = this.state;
    let check = showJobs === true ? "showJobs = true" : "showJobs = false";
    console.log(">>check condition: ", check);

    return (
      <React.Fragment>
        <>
          {showJobs === false ? (
            <div>
              <button
                className="btn-show"
                onClick={() => this.handleShowHide()}
              >
                Show
              </button>
            </div>
          ) : (
            <>
              <div className="job-lists">
                {arrJobs.map((item, index) => {
                  return (
                    <div key={item.id}>
                      {item.title} - {item.salary} $ <></>
                      <span onClick={() => this.handleOnClickDelete(item)}>
                        x
                      </span>
                    </div>
                  );
                })}
              </div>
              <div>
                <button onClick={() => this.handleShowHide()}>Hide</button>
              </div>
            </>
          )}
        </>
      </React.Fragment>
    );
  }
}

// const ChildComponent = (props) => {
//        let {arrJobs} = props;

//         return (
//             <React.Fragment>
//                 {/* <div>
//                     Child component name: {name}<br></br>
//                     Age: {age}
//                     Address: {address}
//                 </div> */}

//                 <div className='job-lists'>
//                 {
//                     arrJobs.map((item, index) => {
//                         if(item.salary >= 300){
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary} $
//                             </div>
//                         )
//                     }
//                    })
//                 }
//                 </div>
//             </React.Fragment>
//         )
// }

export default ChildComponent;
