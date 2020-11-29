import React, { Component } from 'react'

class UpdateEvent extends Component {
    constructor(props) {
        super(props)

        this.state = {

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
        e.preventDefault();

    }

    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                     <hr/>
                     <h3>Modifier evenement</h3>
                     <hr/>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nouveau nom</label>
                        <input type="text" className="form-control" value={this.state.value}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nouveau prenom</label>
                        <input type="text" className="form-control"  value={this.state.value}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nouvelle adresse</label>
                        <input type="text" className="form-control" value={this.state.value}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Nouveau telephone</label>
                        <input type="text" className="form-control"  value={this.state.value}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Mettre a jour</button>
                </form>
            </div>
        )
    }
}

export default UpdateEvent
