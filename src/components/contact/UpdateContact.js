import React, { Component } from 'react'
import CreateContact from "./CreateContact";

class UpdateContact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name:'',
            prenom:'',
            add:'',
            tel:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        let data  =this.state.datas[1];
        this.refs.name.value = data.name;
        this.refs.surname.value = data.surname;
        this.refs.adresse.value = data.adresse;
        this.refs.phone.value = data.phone;

        this.setState({
            act: 1
        })
        this.refs.focus();

    }
    handleSubmit(e){
        alert('Le contact a ete mis a jour : ' +this.state.value);
        e.preventDefault();

    }

    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                     <hr/>
                     <h3>Modifier contact</h3>
                     <hr/>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nouveau titre</label>
                        <input type="text" className="form-control" value={this.state.value}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nouvelle date</label>
                        <input type="text" className="form-control"  value={this.state.value}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nouveau contact</label>
                        <input type="text" className="form-control" value={this.state.value}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nouveau lieu</label>
                        <input type="text" className="form-control"  value={this.state.value}/>
                    </div>
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nouvelle description</label>
                        <input type="text" className="form-control"  value={this.state.value}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Mettre a jour</button>
                </form>
            </div>
        )
    }
}

export default UpdateContact
