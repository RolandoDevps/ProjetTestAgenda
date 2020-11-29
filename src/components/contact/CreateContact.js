import React, { Component } from 'react'
import ReadContact from "./ReadContact";

class CreateContact extends Component {
    constructor() {
        super();
    
        this.state = {
            act: 0,
            index: '',
            datas: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.refs.name.focus();
    }

    handleChange(e){
        this.setState({
            name: e.target.value,
            surname: e.target.value,
            adresse: e.target.value,
            phone: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let surname = this.refs.surname.value;
        let adresse = this.refs.adresse.value;
        let phone = this.refs.phone.value;

        let data = {
            name,surname,adresse,phone
        }

        datas.push(data);

        this.setState({
            datas:datas
        });

        this.refs.myForm.reset();
        this.refs.name.focus();

    }
    
    render() {
        return (
            <div>
                 <form ref="myForm" onSubmit={this.handleSubmit}>
                     <hr/>
                     <h3>Ajouter contact</h3>
                     <hr/>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nom</label>
                        <input type="text" className="form-control" ref="name" value={this.state.value}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Prenom</label>
                        <input type="text" className="form-control" ref="surname" value={this.state.value}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Adresse</label>
                        <input type="text" className="form-control" ref="adresse" value={this.state.value}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Telephone</label>
                        <input type="text" className="form-control" ref="phone" value={this.state.value}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e)=>this.handleSubmit(e)}>Enregistrer</button>
                </form>
            </div>
        )
    }
}

export default CreateContact
