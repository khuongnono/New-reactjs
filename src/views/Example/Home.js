import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import logo from "../../assets/images/woker.jpg";
import { connect } from "react-redux";

class Home extends React.Component {
  componentDidMount() {
    // setTimeout(() => {
    //   this.props.history.push("/todo");
    // }, 3000);
  }

  handleDeleteUser = (user) => {
    console.log(">>> check user delete: ", user);
    this.props.deleteUserRedux(user);
  };

  handleCreateUser = () => {
    this.props.addUserRedux();
  };


  render() {
    console.log(">>>Check props Redux:", this.props.dataRedux);
    let listUser = this.props.dataRedux;
    return (
      <>
        <div>Wellcome - Come on, you can do it, Give it your best shot!</div>
        <div>
          <img
            src={logo} style={{ width: "200px", height: "200px", marginTop: "20px" }}
          ></img>
        </div>

        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div key={item.id}>
                  {index + 1} - {item.name}
                  &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              );
            })}
            <button onClick={() => this.handleCreateUser()}>Add new</button>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataRedux: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUserRedux: (userDelete) =>
      dispatch({ type: "DELETE_USER", payload: userDelete }),
    
      addUserRedux: () => dispatch({type: "CREATE_USER"})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));
