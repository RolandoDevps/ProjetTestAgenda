import React, { Component } from 'react'
import { Link} from "react-router-dom";

class Dashboard extends Component {
    state={

    }
    render() {
        return (
            <div>
                <div className="container align-content-center">
                    <div className="col md-12">
                        <hr/>
                        <h3 className="center">Liste des contacts</h3>
                        <table className="striped">
                            <thead>
                                      <tr>
                                          <th>Nom</th>
                                          <th>Prenom</th>
                                          <th> Adresse</th>
                                          <th>Tel</th>
                                          <th>Action</th>
                                      </tr>
                                    </thead>

                            <tbody>
                                      <tr>
                                          <td>Alvin</td>
                                          <td>Eclair</td>
                                          <td>Douala</td>
                                          <td>686898798789</td>
                                          <td>
                                              <Link to="/add_contact"><i class="fas fa-plus"></i></Link>
                                              <Link to=""><i className="fas fa-trash-alt"></i></Link>
                                              <Link to="update_contact"><i className="fas fa-pen"></i></Link>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>Alvin</td>
                                          <td>Eclair</td>
                                          <td>Douala</td>
                                          <td>686898798789</td>
                                          <td>
                                              <Link to="/add_contact"><i className="fas fa-plus"></i></Link>
                                              <Link to=""><i className="fas fa-trash-alt"></i></Link>
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

export default Dashboard
