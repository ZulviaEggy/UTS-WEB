import React, {Component} from "react";
class Male extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[]
        };
    }
    componentDidMount(){
        fetch("https://randomuser.me/api/?nat=gb&results=9")
        .then(res=> res.json())
        .then(parsedJSON => parsedJSON.results.map(data=>(
            {
                id: `${data.id.name}`,
                firstName: `${data.name.first}`,
                LastName: `${data.name.last}`,
                email : `${data.email}`,
                thumbnail: `${data.picture.large}`,
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
                        const {id, firstName, LastName, email, thumbnail, password} = item;
                        return(
                            <div key={id} className="bgCircle">
                            <center><img src={thumbnail} alt={firstName} className="circle"/></center><br />
                            <div className="ctr">
                                {firstName} {LastName} <br/ >
                               {email} <br/>
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
export default Male;