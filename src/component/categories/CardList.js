import React from 'react'
import Card from './Card'
import {categories} from './categories'
import SearchBox from './SearchBox'

import {Redirect} from 'react-router-dom'

import axios from 'axios'


class CardList extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            categories: categories,
            searchfield: '',
        }
    }

    // componentWillMount() {
    //     axios.get('http://localhost:8080/category/tech')
    //     .then(function(response) {
    //         console.log(response.data[0].evt_name);
    //     })
    // }

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
            desc={categories[i].desc} 
            />
        );
        })
        //cardarray ends

        //main container
        return(
            <div className='pa1 ma7 f7   '> 
                <h1 >Categories</h1>
                {/* <SearchBox searchChange={this.onSearchChange} /> */}
                {cardarray}
            </div>

        );


    
    }

}
export default CardList