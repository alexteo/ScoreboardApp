import React, { Component } from "react";
import { Media } from "reactstrap";
import DishElement from './DishComponent'

class Menu extends Component {
// constructor(props){ //implicita =>this.props
//   super(props)
// }

  state = {
    
  };  
  
  render() {
    return (
      <div className="container">
        <div className="row">
          <Media list>
            { 
              this.props.dishes.map(dish => { //metoda map() o aplicam pe un array care trece prin resp array si ii acceseaza proprietatile
                return (
                  <DishElement 
                  key={dish.id.toString()}
                  image={dish.image}
                  name={dish.name}
                  description={dish.description}
                  />
                );
              })
            }
          </Media>
        </div>
      </div>
    );
  }
}

export default Menu;
//Raspunsuri 2.1
// const footer = () => {
//   return (
// <footer>
//         <h2>The Footer</h2>
//         <span>This is the awesome footer!</span>
//         <div className="container">    
//         </div>
//       </footer>   
//     );
// }

// const petName =  'Ernie';
// const header = (
//   <header>
//     <p>I have a pet named {petName} </p> 
//   </header>
// );


// 6. ReactDOM.render(   
//   <Scoreboad />,
//   document.getElementById('root') 
// );

//7. When a component contains other components, it's called … composition


// 8. const myConst = () => {
//   return(
//     <nav>
//       <ul> ... </ul>
//     </nav>   
//   );
// }

