import React, { Component } from 'react';
import DbTable from '../components/dbEntry';
import '../Style/DbTable.css';

export class dbTable extends Component {

    getstyle = () => {
        return{         //delete later saved for  format reminder

            // border: '1px solid black',
            // justifyContent: 'center',
            // alignSelf: 'center',
            
        }
    }


    render() {

        var data = this.props.data;
        if(!data[0].id){
            return(
                <div>
                    <h1>Database Down</h1>
                    
                </div>
            )
        }
        // console.log(data);
        // var parsed = JSON.parse(data);
        else
        return (
            
                
                <table className="table1">
                    <th>ID</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <DbTable
                        entries ={this.props.data}
                    />
                </table>
            
        )
    }
}


   

export default dbTable


