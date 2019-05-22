import React, { Component } from 'react';
import logo from './asia.svg';
import './App.css';
import Profile from './Profile.js';
import Calculator from './Calculator.js';
import Main from './Main';
import toast from 'toasted-notes' 
import 'toasted-notes/src/styles.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      active : 'Home',
      color : 'Merah',
      img : 'Merah.jpg',
      name : 'Apel',
     
    };
    toast.notify('Hello, Zulvia Eggy')
  }


clicked (menu){
    //untuk memperbarui state sesuai dengan menu yang dipilih
    this.setState({
      name :menu.name,
      color: menu.color,
      img:menu.img,
    });
  }
  /*handleSubmit(angka){
    angka.preventDefault();
    const nilai1 = parseInt(this.refs.nilai1.value);
    const nilai2 = parseInt(this.refs.nilai2.value);
    const operator =this.refs.operator.value;

    var hasil;
    switch(operator){
      case '+':
      hasil = nilai1+ nilai2;
      break;
     /* case '-':
      hasil = nilai1 - nilai2;
      break;
      case '*':
      hasil = nilai1 * nilai2;
      break;
      case '/':
      hasil = nilai1 / nilai2;
      break;
  }
  this.setState({nilai1, nilai2,operator, hasil});
  this.refs.nilai1.value = null;
  this.refs.nilai2.value = null;
}
renderHasil (){
  const {nilai1, nilai2, operator, hasil} = this.state;
  if (this.state.hasil){
    return (
      <div>
        <p className="alert alert-succes">
        {nilai1+operator+nilai2+'='+hasil}
        </p>
      </div>
    );
  }
} 
  /*handleSubmit(event){
    switch(this.state.operation){
        case "plus"=return parseInt(this.state.value1) + parseInt (this.state.value2);
        case 'minus'=return parseInt(this.state.value1) - parseInt (this.state.value2);
        case 'pow'=return parseInt(this.state.value1) * parseInt (this.state.value2);
        case 'div'=return parseInt(this.state.value1) / parseInt (this.state.value2);
    }
  }*/

  info(name){
   if (name == 'Calculator'){
     return <Calculator/>;
    }
   else if (name =="Profile"){
    return <h2><Profile nama="Apel Merah"/></h2>;
    }
    else if(name === 'Main'){
      return <Main test={this.state} />;
    /*}
    else if(name === 'Male'){
      return <Male test={this.state} />;
    }
    else if(name === 'Australia'){
      return <Australia test={this.state} />;
   */
   }else{
    //display default
    return (
     <div>
     ini adalah <span className={"selected "+this.state.color}> 
     {this.state.name}</span> <br></br><br></br>

    <img src={this.state.img} width="250"></img>
     </div>
     );
   }
   }
 
  /*menusaya(){
    var gambar;
    if(this.state.active.toLowerCase()==='Merah'){
      gambar="apel";
    } else if (this.state.active.toLowerCase()==='Kuning'){
      gambar="jeruk";
    } else if (this.state.active.toLowerCase()==='Hijau'){
      gambar="alpukat";
    } else if (this.state.active.toLowerCase()==='Biru'){
      gambar="anggur";
    }
      return <img src={gambar+".jpg"} width="200"></img>
    } */
  

  render() {
    return (
      <div className="App">
      {/*map akan loop sebanyak menu yang di definisikan */}
      {/*kemudian mengembalikan elemen <a/> */}
      <nav className="nav">{this.props.items.map((menu, index) => {
          var style = 'menu';

          if (this.state.color === menu.color) {
            style = `${style} is-active`;
          } 

        return <a 
			        className={style+" "+menu.color}
              //bind untuk membuat 'menu' bisa dikirim ke fungsi 'clicked' 
              onClick={this.clicked.bind(this, menu)}
              key={index}
              >
              {menu.name}
            </a>;
        }) }
        </nav>

        <div className="info">
        {this.info(this.state.name)}
      {/*this.menusaya()*/}
        </div>
    </div>

        
    );
  }   
} 

export default App;
