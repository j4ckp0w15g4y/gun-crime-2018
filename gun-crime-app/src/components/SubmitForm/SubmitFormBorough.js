import React, { Component } from 'react';

class SubmitFormBorough extends Component {
    render() {
        return (
            <div className="select is-rounded is-small is-right">
                <form>
                    <select type="text" onChange={this.props.submitFunc} value={this.props.borough}>
                        <option value=''>Select Borough</option>
                        <option value="BRONX">The Bronx</option>
                        <option value="QUEENS">Queens</option>
                        <option value="MANHATTAN">Manhattan</option>
                        <option value="BROOKLYN">Brooklyn</option>
                        <option value="STATEN ISLAND">Staten Island</option>
                    </select>
                </form>
            </div>
        )
    }
}

export default SubmitFormBorough