import React, {Component} from 'react'
import {Link} from "react-router-dom";
import CreateContact from "./CreateContact";
import DeleteContact from "./DeleteContact";

class ReadContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            act: 0,
            index: '',
            datas: []
        }
    }

    render() {
        return (
            <div>
                <div className="container align-content-center">
                    <div className="col md-12">
                        <hr/>
                        <h3 className="center">Liste des contacts</h3>
                        <table className="table striped">
                            <thead className="table-dark">
                            <tr>
                                <th scope="col">Nom</th>
                                <th scope="col">Prenom</th>
                                <th scope="col"> Adresse</th>
                                <th scope="col">Tel</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <td>lll</td>
                                        <td>sdfsdfds</td>
                                        <td>ffd</td>
                                        <td>gjgjjj</td>
                                        <td>
                                            <Link to="/add_contact"><i className="fas fa-plus"></i></Link>
                                            <Link to="delete_contact" ><i className="fas fa-trash-alt"></i></Link>
                                            <Link to="update_contact"><i className="fas fa-pen"></i></Link>
                                        </td>
                                    </tr>

                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReadContact
