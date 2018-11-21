import React from 'react'
import Card from './Card'
import {categories} from './categories'
import SearchBox from './SearchBox'


class CardList extends React.Component {

    constructor(){
        super()
        this.state ={
            categories: categories,
            searchfield: ''
        }
    }

    //function to run when search input is given
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
        }
        
    
    //function ends

    render(){
            //filteredCategories filters the categories according to what input is given in search field
        const  filteredCategories = this.state.categories.filter(category =>{
            return category.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        //cardarray loops elements in categories.js with card.js
        const cardarray =filteredCategories.map((user,i)=> {
            return (
            <Card 
            key={i} 
            url={categories[i].url}
            id={categories[i].id} 
            name={categories[i].name} 
            desc={categories[i].desc} />
        );
        })
        //cardarray ends

        //main container
        return(
            <div className='pa6 tc ma6'> 
                <h1>Categories</h1>
                {/* <SearchBox searchChange={this.onSearchChange} /> */}
                {cardarray}
            </div>

        );


    
    }

}
export default CardList