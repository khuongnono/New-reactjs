import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
// import axios from "axios";
class MyComponent extends React.Component{
    //state là 1 object
    
    //key:value
    state = {
        arrJobs: [
            {id: 'abcJob1', title: 'Develop', salary:'500'},
            {id: 'abcJob2', title: 'Teacher', salary:'400'},
            {id: 'abcJob3', title: 'Project managers', salary:'1000'}
        ]
    }

    addNewJob = (job) => {
        console.log('Check job from parent', job)
        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJobs
        })
    }

    deleteJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJobs
        })
    }

    componentDidUpdate(prevProps, prevState){
        console.log('>>> run did update', 'prev state:', prevState, 'current state:', this.state)
    }

    componentDidMount() {
        console.log(">>> run component Did mount")
    }
    /*
    JSX cho phép 1 hàm của js trả ra 1 đống html
    khi muốn gọi method hay muốn gọi cái biến state thì dùng this. (quy tắc dùng keyword .)
    */

   

    
    

    render() {
        console.log('>>> call render: ', this.state)    
        return (
            /* <> là fragment của react */
            
            <>   
                <AddComponent
                    addNewJob={this.addNewJob}
                />
                
               

                <ChildComponent 
                    arrJobs = {this.state.arrJobs}
                    deleteJob = {this.deleteJob}
                />
            

            </>
        )
    }

}
//extend: kế thừa 

export default MyComponent;