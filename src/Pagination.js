import React, {Component} from "react";
class Pagination extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[]
        };
    }
    componentDidMount(){
        fetch("https://randomuser.me/api/?page=3&results=10&seed=abc")
        .then(res=> res.json())
        .then(parsedJSON => parsedJSON.results.map(data=>(
            {
                id: `${data.id.name}`,
                firstName: `${data.name.first}`,
                LastName: `${data.name.last}`,
                age : `${data.dob.age}`,
                thumbnail: `${data.picture.medium}`,
                password : `${data.login.password}`,
            }
        )))
        .then(items => this.setState(
            {
                items, 
                isLoaded: false
            }
        ))
        .catch(error => console.log('parsing failed', error))
    }
    render(){
        const{items } = this.state;
        return(
                <div className="boxWhite">
                {
                    items.length > 0 ? items.map(item => {
                        const {id, firstName, LastName, age, thumbnail, password} = item;
                        return(
                            <div key={id} className="bgCircle">
                            <center><img src={thumbnail} alt={firstName} className="circle"/></center><br />
                            <div className="ctr">
                                {firstName} {LastName} <br/ >
                               {age} <br/>
                               {password} 
                            </div>
                     </div>
                        )
                    }) :null    
                }    
                </div>
        );
        
    }
}
export default Pagination;