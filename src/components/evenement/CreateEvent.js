import React, { Component } from 'react'

class CreateEvent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title:'',
            date:'',
            contact:'',
            lieu:'',
            descr:''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            title: e.target.value,
            date: e.target.value,
            contact: e.target.value,
            lieu: e.target.value,
            descr: e.target.value
        })
    }
    handleSubmit(e){
        alert('Evenement ajoute: ' +this.state.value);
        e.preventDefault();
    }

    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Titre</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" value={this.state.value}/>
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                        <input type="date" className="form-control" id="exampleInputEmail1" value={this.state.value}/>
                    </div>
                    <div className="form-group">
                        <label>Contact</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" value={this.state.value}/>
                    </div>
                    <div className="form-group">
                        <label>Lieu</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" value={this.state.value}/>
                    </div>
                      <div className="form-group">
                        <label>Description</label>
                        <textarea className="form-control" value={this.state.value}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Creer</button>
                </form>
            </div>
        )
    }
}

export default CreateEvent
