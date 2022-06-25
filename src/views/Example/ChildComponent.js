import React from 'react';
import './Demo.scss';
// import axios from "axios";
class ChildComponent extends React.Component{
    state = {
        showJob: false
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleOnClickDelete = (job) => {
        this.props.deleteJob(job)
    }
    


    render() {
        // console.log('>>> check props: ', this.props)    
        let {arrJobs} = this.props;
        let {showJob} = this.state;
        let check = showJob === true ? 'showJobs: true' : 'showJobs: false';
        console.log('>>> Check conditional:', check)
        return (    
            <>   
               {showJob === false ? 
               <div>
                     <button className='btn-show' onClick={() => this.handleShowHide()} >Show</button>
               </div>

               :
               <>
                    <div className='Job-List'>
                        {
                            arrJobs.map((item, index) => {
                                return(
                                    <div key={item.id}>
                                        {item.title} - {item.salary} <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div onClick={() => this.handleShowHide()} ><button>Hide</button></div> 
                </>
               }
               
            </>
        )
    }

}
// extend: kế thừa 
// const ChildComponent = (props) => {
//     let { arrJobs} = props;
//         return (
//             /* <> là fragment của react */
            
//             <>   

//                <div className='Job-List'>
//                    {
//                      arrJobs.map((item, index) => {
//                         if(item.salary >= 500){
//                             return(
//                              <div key={item.id}>
//                                 {item.title} - {item.salary} $
//                              </div>
//                         )
//                         }
                        
//                      })
//                    }
//                </div>

//             </>
//         )
// }
export default ChildComponent;