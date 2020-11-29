import React, { Component } from 'react'
import { Link} from "react-router-dom";

class ReadEvent extends Component {
    state={

    }
    render() {
        return (
            <div>
                <div className="container align-content-center">
                    <div className="col md-12">
                        <hr/>
                        <h3 className="center">Liste des evenements</h3>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Titre</th>
                                    <th>Date</th>
                                    <th> Contact</th>
                                    <th>Lieu</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>jhgjhjghjgjh</td>
                                    <td>hkhkjhkhkj</td>
                                    <td>kjhjhkjh</td>
                                    <td>iuyiyetrert</td>
                                    <td>jfhhkjhkjlhlkjhkjlhljkhkjhkjlhouoiljhljhlhkj;ljlk;jl;kjjj;lkjklj</td>
                                    <td>
                                        <Link to="/add_event"><i class="fas fa-plus"></i></Link>
                                        <Link to=""><i className="fas fa-trash-alt"></i></Link>
                                        <Link to="update_event"><i className="fas fa-pen"></i></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>jhgjhjghjgjh</td>
                                    <td>hkhkjhkhkj</td>
                                    <td>kjhjhkjh</td>
                                    <td>iuyiyetrert</td>
                                    <td>jfhhkjhkjlhlkjhkjlhljkhkjhkjlhouoiljhljhlhkj;ljlk;jl;kjjj;lkjklj</td>
                                    <td>
                                        <Link to="/add_event"><i className="fas fa-plus"></i></Link>
                                        <Link to=""><i className="fas fa-trash-alt"></i></Link>
                                        <Link to="/update_event"><i className="fas fa-pen"></i></Link>
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

export default ReadEvent
