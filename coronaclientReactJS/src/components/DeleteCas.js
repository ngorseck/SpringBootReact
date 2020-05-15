import React from 'react';

export default class ListUser extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listeCas : []
        }
    }

    componentDidMount() {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch("http://localhost:8088/corona/cas/delete/"+this.props.match.params.id, requestOptions)
            .then( result => result.json())
            .then(result => {
                this.setState({
                    listeCas : result
                });
        
            });
    }

    render() {
        return(
            <div className="container-fluid" style={{ marginTop: 50}}>
                <table className={"table table-bordered table-striped"}>
                    <thead>
                        <tr>
                            <th>Identifiant</th>
                            <th>Ville</th>
                            <th>Quartier</th>
                            <th>Date</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.listeCas.map(function (cas) {
                            return(
                                <tr>
                                    <td>{cas.id}</td>
                                    <td>{cas.ville}</td>
                                    <td>{cas.quartier}</td>
                                    <td>{cas.date}</td>
                                    <td><a href={"/cas/get/"+cas.id}>Editer</a></td>
                                    <td><a href={"/cas/delete/"+cas.id}>Supprimer</a></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}
