import React from 'react';

export default class AddCas extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id : 0,
            ville : '',
            quartier : '',
            date : '',
            listeCas: []
        };

        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangeVille = this.handleChangeVille.bind(this);
        this.handleChangeQuartier = this.handleChangeQuartier.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleChangeId(event) {
        this.setState({
            id: event.target.value
        });
    }
    handleChangeVille(event) {
        this.setState({
            ville: event.target.value
        });
    }
    handleChangeQuartier(event) {
        this.setState({
            quartier: event.target.value
        });
    }
    handleChangeDate(event) {
        this.setState({
            date: event.target.value
        });
    }
    componentDidMount() {
       fetch("http://localhost:8088/corona/cas/get/?id="+this.props.match.params.id)
            .then( result => result.json())
            .then(result => {
                this.setState({
                    id : result.id,
                    ville : result.ville,
                    quartier : result.quartier,
                    date : result.date,
                    listeCas: []
                });
        
            });
    }
    handleAdd(event) {
        event.preventDefault();
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch("http://localhost:8088/corona/cas/update/"+this.state.id+"?ville="+this.state.ville+"&quartier="+this.state.quartier+"&datecas="+this.state.date, requestOptions)
        .then( result => result.json())
        .then(result => {
            this.setState({
                ville : '',
                quartier : '',
                date : '',
                listeCas : result
            });
        });

    }
    render() {
        return(
            <div className="col-xl-6 col-lg-5">
                <div className="card shadow mb-4">

                    <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-primary">Formulaire</h6>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.handleAdd}>
                        <div className="row">
                                <div className="form-group col-xl-6">
                                    <label className="control-label" htmlFor="nom">Identifiant du cas constaté</label>
                                    <input className="form-control" readOnly="readOnly" value={this.state.id} onChange={this.handleChangeId} type="text" name="id" id="id"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-xl-6">
                                    <label className="control-label" htmlFor="nom">Ville du cas constaté</label>
                                    <input className="form-control" value={this.state.ville} onChange={this.handleChangeVille} type="text" name="ville" id="ville"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-xl-6">
                                    <label className="control-label" htmlFor="prenom">Quartier du cas constaté</label>
                                    <input className="form-control" value={this.state.quartier} onChange={this.handleChangeQuartier}  type="text" name="quartier" id="quartier"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-xl-6">
                                    <label className="control-label" htmlFor="email">Date de constat du cas</label>
                                    <input className="form-control" value={this.state.date} onChange={this.handleChangeDate}  type="date" name="date" id="date"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-success" type="submit" name="envoyer" id="envoyer" value="Envoyer"/>
                                <input className="btn btn-warning" type="reset" name="annuler" id="annuler" value="Annuler"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
