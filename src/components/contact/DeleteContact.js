import CreateContact from "./CreateContact";

let deleteFunction;
deleteFunction = (i) => {
    let datas = this.props.datas;
    datas.splice(1,1);
    this.setState({
        datas:datas
    })
}
const DeleteContact = (props) => {
    return(
        deleteFunction
    )
}

export default DeleteContact